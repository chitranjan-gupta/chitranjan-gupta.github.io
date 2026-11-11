import { describe, it, expect } from 'vitest';
import { getStoredBlogs, parseFrontmatter } from '@/lib/blogs';

describe('Blogs Data & Content Integrity', () => {
  it('parses YAML frontmatter correctly from markdown', () => {
    const raw = `---
title: "Testing Guide"
date: "2026-03-01"
categories: [Engineering, Quality]
tags: [Nextjs, Testing]
---
# Hello World
This is the blog body.`;

    const { data, content } = parseFrontmatter(raw);
    expect(data.title).toBe('Testing Guide');
    expect(data.date).toBe('2026-03-01');
    expect(data.categories).toEqual(['Engineering', 'Quality']);
    expect(data.tags).toEqual(['Nextjs', 'Testing']);
    expect(content.trim()).toBe('# Hello World\nThis is the blog body.');
  });

  it('retrieves stored blogs without throwing', () => {
    const blogs = getStoredBlogs();
    expect(Array.isArray(blogs)).toBe(true);
    expect(blogs.length).toBeGreaterThan(0);
  });

  it('each stored blog contains required schema attributes', () => {
    const blogs = getStoredBlogs();
    blogs.forEach(b => {
      expect(b.slug).toBeTruthy();
      expect(b.title).toBeTruthy();
      expect(b.body).toBeDefined();
      expect(typeof b.slug).toBe('string');
      expect(typeof b.title).toBe('string');
      expect(Array.isArray(b.tags)).toBe(true);
      expect(Array.isArray(b.categories)).toBe(true);
    });
  });

  it('no duplicate slugs exist in stored blogs', () => {
    const blogs = getStoredBlogs();
    const slugs = blogs.map(b => b.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });
});
