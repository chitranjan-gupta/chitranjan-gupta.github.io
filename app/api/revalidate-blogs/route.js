import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import crypto from 'crypto';
import { fetchLatestBlogsFromGitHub, saveBlogs } from '@/lib/blogs';

export async function POST(req) {
    try {
        const bodyText = await req.text();
        const signature = req.headers.get('x-hub-signature-256');
        const secret = process.env.BLOG_WEBHOOK_SECRET;

        // If a secret is defined in environment, verify the HMAC SHA-256 signature
        if (secret) {
            if (!signature) {
                return NextResponse.json({ error: 'Missing x-hub-signature-256 header' }, { status: 401 });
            }
            const hmac = crypto.createHmac('sha256', secret);
            const digest = `sha256=${hmac.update(bodyText).digest('hex')}`;
            if (signature !== digest) {
                return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 });
            }
        }

        // Fetch fresh articles from the GitHub repository
        console.log('[Webhook] Syncing blogs after repository push...');
        const updatedBlogs = await fetchLatestBlogsFromGitHub();

        if (updatedBlogs && updatedBlogs.length > 0) {
            saveBlogs(updatedBlogs);
            console.log(`[Webhook] Saved ${updatedBlogs.length} blogs to data/blogs.json`);
        }

        // Trigger on-demand revalidation of static routes
        revalidatePath('/');
        revalidatePath('/blogs');

        return NextResponse.json({
            revalidated: true,
            articlesSynced: updatedBlogs ? updatedBlogs.length : 0,
            timestamp: new Date().toISOString()
        });
    } catch (err) {
        console.error('[Webhook] Revalidation failed:', err);
        return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({
        status: 'active',
        endpoint: '/api/revalidate-blogs',
        description: 'GitHub Webhook on-demand revalidation endpoint for portfolio-next blogs.'
    });
}
