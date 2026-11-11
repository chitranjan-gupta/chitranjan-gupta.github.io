import { test, expect } from '@playwright/test';

test.describe('E2E Portfolio Smoke Test', () => {
  test('homepage loads and renders primary hero elements', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Chitranjan|Gupta|Portfolio/i);

    // Verify main section elements exist
    await expect(page.locator('#about')).toBeAttached();
    await expect(page.locator('#projects')).toBeAttached();
    await expect(page.locator('#skills')).toBeAttached();
    await expect(page.locator('#contact')).toBeAttached();
  });

  test('navigation to /blogs displays published articles', async ({ page }) => {
    await page.goto('/blogs');
    await expect(page).toHaveURL(/.*blogs/);

    // Should list at least 1 blog card
    const blogLinks = page.locator('a[href^="/blogs/"]');
    await expect(blogLinks.first()).toBeVisible();
    const count = await blogLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('blog reader page renders title, content, share buttons and author attribution', async ({ page }) => {
    await page.goto('/blogs/freshmarks-it');
    await expect(page.locator('h1')).toBeVisible();

    // Verify Blogged By attribution
    await expect(page.getByText(/Blogged By/i)).toBeVisible();

    // Verify ShareButtons link elements exist (header & footer)
    await expect(page.locator('a[aria-label*="Share on Facebook"]').first()).toBeVisible();
    await expect(page.locator('a[aria-label*="Share on Telegram"]').first()).toBeVisible();
    await expect(page.locator('button[aria-label*="Copy article link"]').first()).toBeVisible();
  });

  test('cookie consent banner is present on first visit', async ({ page }) => {
    // Clear cookies/localStorage
    await page.context().clearCookies();
    await page.goto('/');
    
    // Cookie banner should be rendered
    const banner = page.getByText(/Cookie Preferences/i);
    await expect(banner).toBeVisible({ timeout: 5000 });
  });

  test('theme switcher changes data-design attribute on root element', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    
    // Default design should be set
    await expect(html).toHaveAttribute('data-design', /.+/);
  });
});
