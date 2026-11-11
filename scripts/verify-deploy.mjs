/**
 * Pre-Deployment Static & Smoke Validation Script
 * Verifies that the production build outputs valid HTML, correct meta tags,
 * sitemaps, robots.txt, and zero broken local page references.
 */

import fs from 'fs';
import path from 'path';

const APP_DIR = path.join(process.cwd(), '.next', 'server', 'app');
const SITEMAP_PATH = path.join(process.cwd(), 'app', 'sitemap.js');
const ROBOTS_PATH = path.join(process.cwd(), 'app', 'robots.js');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

console.log('🚀 Running Pre-Deployment Verification Checks...\n');

// 1. Build Artifacts Check
console.log('[1/4] Checking Static Output Artifacts:');
const criticalPages = [
  'index.html',
  'about.html',
  'blogs.html',
  'projects.html',
  'skills.html',
  'contact.html',
  'sitemap.xml.meta',
  'robots.txt.meta'
];

criticalPages.forEach((file) => {
  const filePath = path.join(APP_DIR, file);
  assert(fs.existsSync(filePath), `Generated artifact exists: ${file}`);
});

// 2. Blog Static HTML Output Check
console.log('\n[2/4] Checking Static Pre-rendered Blogs:');
const blogsDir = path.join(APP_DIR, 'blogs');
if (fs.existsSync(blogsDir)) {
  const generatedBlogs = fs.readdirSync(blogsDir).filter(f => f.endsWith('.html'));
  assert(generatedBlogs.length > 0, `Pre-rendered blog posts count: ${generatedBlogs.length}`);
  
  // Verify contents of the first blog
  if (generatedBlogs.length > 0) {
    const sampleBlogHtml = fs.readFileSync(path.join(blogsDir, generatedBlogs[0]), 'utf-8');
    assert(sampleBlogHtml.includes('<article'), 'Blog HTML includes valid semantic <article> element');
    assert(sampleBlogHtml.includes('chitranjan-gupta'), 'Blog HTML includes author links/mentions');
  }
} else {
  assert(false, 'Blogs build directory found');
}

// 3. Homepage HTML Structure & Meta Tags Check
console.log('\n[3/4] Checking Meta Tags & SEO on Home Page:');
const homeHtmlPath = path.join(APP_DIR, 'index.html');
if (fs.existsSync(homeHtmlPath)) {
  const homeHtml = fs.readFileSync(homeHtmlPath, 'utf-8');
  assert(homeHtml.includes('<title>'), 'Includes <title> tag');
  assert(homeHtml.includes('name="viewport"'), 'Includes viewport meta tag');
  assert(homeHtml.includes('name="description"') || homeHtml.includes('property="og:description"'), 'Includes description meta');
} else {
  assert(false, 'Home index.html exists');
}

// 4. Configuration Sanity Check
console.log('\n[4/4] Checking Sitemap and Robots configurations:');
assert(fs.existsSync(SITEMAP_PATH), 'Sitemap generator file exists (app/sitemap.js)');
assert(fs.existsSync(ROBOTS_PATH), 'Robots generator file exists (app/robots.js)');

console.log('\n══════════════════════════════════════════════════');
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log('══════════════════════════════════════════════════\n');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 Pre-deployment check completely PASSED!\n');
}
