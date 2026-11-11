import fs from 'fs';
import path from 'path';

const BLOGS_FILE_PATH = path.join(process.cwd(), 'data', 'blogs.json');

/**
 * Parses basic YAML frontmatter from markdown text without requiring heavy external dependencies.
 */
export function parseFrontmatter(markdownText) {
    if (!markdownText.startsWith('---')) {
        return { data: {}, content: markdownText };
    }

    const match = markdownText.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) {
        return { data: {}, content: markdownText };
    }

    const yamlBlock = match[1];
    const content = match[2];
    const data = {};

    yamlBlock.split(/\r?\n/).forEach((line) => {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) return;

        const key = line.slice(0, colonIdx).trim();
        let val = line.slice(colonIdx + 1).trim();

        // Strip surrounding quotes
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
        }

        // Handle array syntax e.g. [a, b, c]
        if (val.startsWith('[') && val.endsWith(']')) {
            val = val
                .slice(1, -1)
                .split(',')
                .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
                .filter(Boolean);
        }

        if (key) {
            data[key] = val;
        }
    });

    return { data, content };
}

/**
 * Returns existing blogs from data/blogs.json.
 */
export function getStoredBlogs() {
    try {
        if (!fs.existsSync(BLOGS_FILE_PATH)) return [];
        const raw = fs.readFileSync(BLOGS_FILE_PATH, 'utf-8');
        return JSON.parse(raw);
    } catch (e) {
        console.error('Error reading blogs.json:', e);
        return [];
    }
}

/**
 * Safely writes updated blogs to data/blogs.json.
 */
export function saveBlogs(blogs) {
    try {
        const dir = path.dirname(BLOGS_FILE_PATH);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(blogs, null, 2), 'utf-8');
        return true;
    } catch (e) {
        console.error('Error saving blogs.json:', e);
        return false;
    }
}

/**
 * Fetches the latest published blog articles from the GitHub repository API.
 */
export async function fetchLatestBlogsFromGitHub(options = {}) {
    const repo = options.repo || process.env.BLOG_GITHUB_REPO || 'chitranjan-gupta/chitranjan-gupta.github.io';
    const folder = options.folder || process.env.BLOG_GITHUB_PATH || '_posts';
    const branch = options.branch || process.env.BLOG_GITHUB_BRANCH || 'main';
    const token = options.token || process.env.GITHUB_TOKEN;

    const headers = {
        'User-Agent': 'portfolio-next-blog-sync',
        Accept: 'application/vnd.github.v3+json',
    };
    if (token) {
        headers['Authorization'] = `token ${token}`;
    }

    const apiUrl = `https://api.github.com/repos/${repo}/contents/${folder}?ref=${branch}`;

    try {
        console.log(`[BlogSync] Fetching contents list from: ${apiUrl}`);
        const res = await fetch(apiUrl, { headers, next: { revalidate: 0 } });

        if (!res.ok) {
            console.warn(`[BlogSync] GitHub API returned status ${res.status}: ${res.statusText}`);
            return null;
        }

        const items = await res.json();
        if (!Array.isArray(items)) {
            console.warn('[BlogSync] GitHub API did not return an array.');
            return null;
        }

        // Filter for markdown files
        const mdFiles = items.filter(
            (item) => item.type === 'file' && (item.name.endsWith('.md') || item.name.endsWith('.markdown') || item.name.endsWith('.mdx'))
        );

        const blogs = [];

        for (const file of mdFiles) {
            try {
                const rawUrl = file.download_url || `https://raw.githubusercontent.com/${repo}/${branch}/${file.path}`;
                const fileRes = await fetch(rawUrl);
                if (!fileRes.ok) continue;

                const text = await fileRes.text();
                const { data, content } = parseFrontmatter(text);

                // Derive slug from filename e.g. 2024-05-10-my-post.md -> my-post
                const baseName = file.name.replace(/\.(md|markdown|mdx)$/, '');
                const slug = data.slug || baseName.replace(/^\d{4}-\d{2}-\d{2}-/, '');

                blogs.push({
                    slug: slug,
                    title: data.title || baseName,
                    created: data.date || data.created || new Date().toISOString(),
                    desc: data.description || data.desc || content.slice(0, 160).replace(/[#*`\n]/g, ' ').trim() + '...',
                    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
                    categories: Array.isArray(data.categories) ? data.categories : data.categories ? [data.categories] : ['Tech'],
                    body: content.trim(),
                });
            } catch (err) {
                console.error(`[BlogSync] Failed to process file ${file.name}:`, err);
            }
        }

        // Sort descending by created date
        blogs.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

        return blogs.length > 0 ? blogs : null;
    } catch (e) {
        console.error('[BlogSync] Error fetching from GitHub:', e);
        return null;
    }
}
