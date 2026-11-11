#!/usr/bin/env node

/**
 * CLI Blog Sync Script
 * Usage: npm run sync-blogs
 */

import { fetchLatestBlogsFromGitHub, saveBlogs, getStoredBlogs } from '../lib/blogs.js';

async function run() {
    console.log('🔄 Checking GitHub repository for latest blog articles...');
    const blogs = await fetchLatestBlogsFromGitHub();

    if (blogs && blogs.length > 0) {
        saveBlogs(blogs);
        console.log(`✅ Successfully synced ${blogs.length} articles into data/blogs.json.`);
    } else {
        const existing = getStoredBlogs();
        console.log(`ℹ️ GitHub repository returned no new items (or rate-limited). Keeping ${existing.length} existing stored articles.`);
    }
}

run().catch((err) => {
    console.error('❌ Sync script failed:', err);
    process.exit(1);
});
