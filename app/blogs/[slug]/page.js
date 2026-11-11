import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXBody } from '@/components/MDXBody';
import { RecommendedBlogs } from '@/components/RecommendedBlogs';
import ShareButtons from '@/components/ShareButtons';
import blogsData from '@/data/blogs.json';

export async function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);
    if (!blog) return { title: 'Blog Not Found' };

    const canonicalUrl = `https://chitranjan.me/blogs/${slug}`;

    return {
        title: `${blog.title} | Chitranjan Kumar Gupta`,
        description: blog.desc || 'Technical blog post by Chitranjan Kumar Gupta',
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: blog.title,
            description: blog.desc,
            url: canonicalUrl,
            type: 'article',
            publishedTime: blog.created,
            authors: ['https://chitranjan.me'],
        },
    };
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-32 pb-24 px-6 relative">
            <div className="w-[min(900px,92vw)] mx-auto">
                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-1)] hover:underline"
                    >
                        ← Back to all blogs
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-12 border-b border-[var(--border)] pb-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                        {blog.categories?.map((cat) => (
                            <span
                                key={cat}
                                className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-1)]/15 border border-[var(--accent-1)]/30 text-[var(--accent-1)]"
                            >
                                {cat}
                            </span>
                        ))}
                        <span className="text-[var(--text-muted)]">•</span>
                        <time className="text-[var(--text-muted)] font-medium">{formatDate(blog.created)}</time>
                        <span className="text-[var(--text-muted)]">•</span>
                        <span className="text-[var(--text-secondary)] font-medium">
                            Blogged By{' '}
                            <a
                                href="https://github.com/chitranjan-gupta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[var(--accent-1)] hover:underline inline-flex items-center gap-1"
                            >
                                Chitranjan Gupta
                                <span className="text-[var(--text-muted)] font-normal">@chitranjan-gupta</span>
                            </a>
                        </span>
                    </div>

                    <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight leading-[1.15] text-[var(--text-primary)] mb-6">
                        {blog.title}
                    </h1>

                    <p className="text-[1.15rem] text-[var(--text-secondary)] leading-relaxed font-normal mb-6">
                        {blog.desc}
                    </p>

                    {/* Header Share Bar */}
                    <div className="pt-2">
                        <ShareButtons title={blog.title} slug={slug} />
                    </div>
                </header>

                {/* Rendered MDX Content via custom CodeHike & YouTube embed components */}
                <div className="prose prose-invert max-w-none prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-a:text-[var(--accent-1)] prose-code:text-[var(--accent-1)] prose-pre:bg-[var(--bg-card)] prose-pre:border prose-pre:border-[var(--border)] blog-content">
                    <MDXBody>
                        {blog.body || ''}
                    </MDXBody>
                </div>

                {/* Article Footer: Tags & Share */}
                <footer className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    {blog.tags && blog.tags.length > 0 ? (
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-bold mr-1">
                                Tags:
                            </span>
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-md text-xs font-medium bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    ) : <div />}

                    <ShareButtons title={blog.title} slug={slug} />
                </footer>

                {/* Next & Previous Blog Navigation + Smart Recommendations */}
                <RecommendedBlogs currentSlug={slug} blogs={blogsData} />
            </div>
        </article>
    );
}
