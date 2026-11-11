# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> E2E Portfolio Smoke Test >> blog reader page renders title, content and author attribution
- Location: tests/e2e/smoke.spec.js:26:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('button[aria-label*="Share on Facebook"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('button[aria-label*="Share on Facebook"]') with timeout 5000ms
  - waiting for locator('button[aria-label*="Share on Facebook"]')

```

```yaml
- banner:
  - navigation:
    - link "CK Gupta.":
      - /url: /
    - link "About":
      - /url: /about
    - link "Skills":
      - /url: /skills
    - link "Projects":
      - /url: /projects
    - link "Portfolio":
      - /url: /portfolio
    - link "Blogs":
      - /url: /blogs
    - button "More":
      - text: More
      - img
    - button "Open Spotlight Search (Cmd+K)":
      - img
      - text: Search ⌘K
    - button "Switch theme or design":
      - text: Aurora
      - img
    - link "Contact":
      - /url: /contact
- article:
  - link "← Back to all blogs":
    - /url: /blogs
  - text: Extension Addon Firefox Chrome •
  - time: January 16, 2025
  - text: • Blogged By
  - link "Chitranjan Gupta @chitranjan-gupta":
    - /url: https://github.com/chitranjan-gupta
  - heading "FreshMarks It - A Game-Changing Bookmark Updater Extension" [level=1]
  - paragraph: This extension or addon automatically updates your bookmarks by replacing outdated URLs with their redirected counterparts. It ensures that your bookmarks always point to the current location, removing the old URLs for better organization and accuracy.
  - text: "Share:"
  - link "Share on X (Twitter)":
    - /url: https://twitter.com/intent/tweet?text=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension&url=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - link "Share on Facebook":
    - /url: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - link "Share on LinkedIn":
    - /url: https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - link "Share on Telegram":
    - /url: https://t.me/share/url?url=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it&text=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension
    - img
  - link "Share on WhatsApp":
    - /url: https://api.whatsapp.com/send?text=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension%20https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - link "Share on Instagram":
    - /url: https://www.instagram.com/
    - img
  - link "Share on Reddit":
    - /url: https://reddit.com/submit?url=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it&title=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension
    - img
  - link "Share on Email":
    - /url: mailto:?subject=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension&body=Check%20out%20this%20article%3A%20FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension%0A%0Ahttps%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - button "Copy article link":
    - img
    - text: Copy Link
  - list:
    - listitem:
      - strong: Repository
      - text: ":"
      - link "https://github.com/chitranjan-gupta/freshmarks":
        - /url: https://github.com/chitranjan-gupta/freshmarks
    - listitem:
      - strong: Description
      - text: ": Bookmark Updater"
    - listitem:
      - strong: Primary Language
      - text: ": JavaScript (82.8%), HTML (17.2%)"
    - listitem:
      - strong: License
      - text: ": MIT License"
  - link "screenshot-1":
    - /url: https://github.com/chitranjan-gupta/freshmarks
    - img "screenshot-1"
  - button "Play"
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#description"
      - text: Description
  - paragraph: In today's digital age, bookmarks play a crucial role in helping us organize and access our favorite online resources. However, with the ever-changing nature of the internet, bookmarks can quickly become outdated, leading to broken links and frustrating searches.
  - paragraph: This is where FreshMarks It comes in – a revolutionary web extension designed to keep your bookmarks up-to-date by automatically detecting and updating URLs that have been redirected.
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#the-problem-with-outdated-bookmarks"
      - text: The Problem with Outdated Bookmarks
  - paragraph: "Outdated bookmarks can cause a range of problems, including:"
  - list:
    - listitem: "Broken links: When a website is relocated or restructured, bookmarks can become invalid, leading to frustrating \"404 Not Found\" errors."
    - listitem: "Wasted time: Searching for updated links or re-creating bookmarks can be a time-consuming and tedious process."
    - listitem: "Disorganized bookmarks: As bookmarks become outdated, they can clutter up your bookmark list, making it harder to find the resources you need."
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#how-freshmarks-it-works"
      - text: How FreshMarks It Works
  - paragraph: "FreshMarks It is incredibly easy to use and works seamlessly in the background to keep your bookmarks up-to-date. Here's how it works:"
  - list:
    - listitem:
      - strong: Redirect Detection
      - text: ": FreshMarks It listens for HTTP redirects (301, 302) and detects when a website has been relocated or restructured."
    - listitem:
      - strong: Bookmark Updating
      - text: ": When a redirect is detected, FreshMarks It automatically updates the corresponding bookmark with the new URL."
    - listitem:
      - strong: Multi-Bookmark Support
      - text: ": FreshMarks It supports updating multiple bookmarks simultaneously, making it easy to manage large collections of bookmarks."
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#features-and-benefits"
      - text: Features and Benefits
  - paragraph: "FreshMarks It offers a range of features and benefits, including:"
  - list:
    - listitem:
      - strong: Automatic bookmark updating
      - text: ": FreshMarks It works seamlessly in the background to keep your bookmarks up-to-date."
    - listitem:
      - strong: Time-saving
      - text: ": By automatically updating bookmarks, FreshMarks It saves you time and effort in searching for updated links or re-creating bookmarks."
    - listitem:
      - strong: Organized bookmarks
      - text: ": FreshMarks It helps keep your bookmark list organized by removing outdated bookmarks and replacing them with updated ones."
    - listitem:
      - strong: Support for multiple browsers
      - text: ": FreshMarks It is available for both Chrome and Firefox, making it easy to manage your bookmarks across multiple browsers."
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#permissions"
      - text: Permissions
  - list:
    - listitem:
      - strong: webRequest
      - text: ": To listen for HTTP requests and redirects."
    - listitem:
      - strong: bookmarks
      - text: ": To update bookmarks."
    - listitem:
      - strong: tabs
      - text: ": To access tab information."
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#installation"
      - text: Installation
  - paragraph: "Installing FreshMarks It is easy and straightforward. Here are the steps:"
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#edge"
      - text: Edge
  - list:
    - listitem:
      - text: Open Edge Browser and navigate to
      - link "https://microsoftedge.microsoft.com/addons/detail/freshmarks-it/ffmcidhkdkneebilleobjedhjdodlpea":
        - /url: https://microsoftedge.microsoft.com/addons/detail/freshmarks-it/ffmcidhkdkneebilleobjedhjdodlpea
    - listitem: Click on Get to install the extension
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#chrome--brave--opera--edge--arc-browser---personal-computer"
      - text: Chrome | Brave | Opera | Edge | Arc Browser - Personal Computer
  - list:
    - listitem:
      - text: Clone the repository or download the zip file from the FreshMarks It GitHub page. (
      - code: "`https://github.com/chitranjan-gupta/freshmarks`"
      - text: ).
    - listitem: Extract the zip file.
    - listitem:
      - text: Open Google Chrome and navigate to the extensions page (
      - code: "`chrome://extensions/`"
      - text: ).
    - listitem: Enable Developer mode.
    - listitem:
      - text: Click "Load unpacked" and select the
      - code: "`freshmarks/chrome`"
      - text: folder.
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#chrome-kiwi-browser---mobile-android"
      - text: Chrome (Kiwi Browser) - Mobile (Android)
  - blockquote:
    - paragraph:
      - text: Kiwi Browser
      - link "https://kiwibrowser.com/":
        - /url: https://kiwibrowser.com/
      - link "https://play.google.com/store/apps/details?id=com.kiwibrowser.browser":
        - /url: https://play.google.com/store/apps/details?id=com.kiwibrowser.browser
  - list:
    - listitem:
      - text: Clone the repository or download the zip file from the FreshMarks It GitHub page. (
      - code: "`https://github.com/chitranjan-gupta/freshmarks`"
      - text: ).
    - listitem: Extract the zip file.
    - listitem:
      - text: Open Google Chrome and navigate to the extensions page (
      - code: "`chrome://extensions/`"
      - text: ).
    - listitem: Enable Developer mode.
    - listitem:
      - text: Click "Load unpacked" and select the
      - code: "`freshmarks/chrome`"
      - text: folder.
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#firefox---personal-computer"
      - text: Firefox - Personal Computer
  - heading "Link to section" [level=4]:
    - link "Link to section":
      - /url: "#way-1"
      - text: Way 1
  - list:
    - listitem:
      - text: Open Firefox and navigate to (
      - link "https://addons.mozilla.org/en-US/firefox/addon/freshmarks-it/":
        - /url: https://addons.mozilla.org/en-US/firefox/addon/freshmarks-it/
      - text: )
    - listitem:
      - text: And Click on
      - code: "`Add to Firefox`"
      - text: and the click on
      - code: "`Add`"
  - heading "Link to section" [level=4]:
    - link "Link to section":
      - /url: "#way-2"
      - text: Way 2
  - list:
    - listitem:
      - text: Clone the repository or download the zip file from the FreshMarks It GitHub page. (
      - code: "`https://github.com/chitranjan-gupta/freshmarks`"
      - text: ).
    - listitem: Extract the zip file.
    - listitem:
      - text: Open Mozilla Firefox and navigate to the debugging page (
      - code: "`about://debugging`"
      - text: ).
    - listitem:
      - text: Click on
      - code: "`This Firefox`"
      - text: and then click on
      - code: "`Load Temporary Add-on`"
      - text: and load the
      - code: "`freshmarks/firefox/manifest.json`"
      - text: from the extracted folder.
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#firefox---mobile-android"
      - text: Firefox - Mobile (Android)
  - blockquote:
    - paragraph: Does not work on Firefox Android Version because bookmark API (Application Programming Interface) is not supported on Firefox Android
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#usage"
      - text: Usage
  - list:
    - listitem: Bookmark a page.
    - listitem: If the page redirects, the bookmark will be updated with the new URL.
  - paragraph: Once installed, FreshMarks It works seamlessly in the background to keep your bookmarks up-to-date. Simply bookmark a page, and if the page redirects, FreshMarks It will automatically update the bookmark with the new URL.
  - heading "Link to section" [level=2]:
    - link "Link to section":
      - /url: "#conclusion"
      - text: Conclusion
  - paragraph: FreshMarks It is a game-changing web extension that solves the problem of outdated bookmarks. By automatically detecting and updating URLs that have been redirected, FreshMarks It saves you time and effort in managing your bookmarks. With its easy installation process and seamless functionality, FreshMarks It is a must-have extension for anyone who uses bookmarks to organize their online resources.
  - text: "Tags: #extension #addon #firefox #chrome #edge #brave #webextension Share:"
  - link "Share on X (Twitter)":
    - /url: https://twitter.com/intent/tweet?text=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension&url=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - link "Share on Facebook":
    - /url: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - link "Share on LinkedIn":
    - /url: https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - link "Share on Telegram":
    - /url: https://t.me/share/url?url=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it&text=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension
    - img
  - link "Share on WhatsApp":
    - /url: https://api.whatsapp.com/send?text=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension%20https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - link "Share on Instagram":
    - /url: https://www.instagram.com/
    - img
  - link "Share on Reddit":
    - /url: https://reddit.com/submit?url=https%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it&title=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension
    - img
  - link "Share on Email":
    - /url: mailto:?subject=FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension&body=Check%20out%20this%20article%3A%20FreshMarks%20It%20-%20A%20Game-Changing%20Bookmark%20Updater%20Extension%0A%0Ahttps%3A%2F%2Fchitranjan.me%2Fblogs%2Ffreshmarks-it
    - img
  - button "Copy article link":
    - img
    - text: Copy Link
  - link "← Previous Article Expo Tunnel":
    - /url: /blogs/expo-tunnel
  - link "Next Article → Nextjs Metadata":
    - /url: /blogs/nextjs-metadata
  - text: Continue Reading
  - heading "Recommended For You" [level=3]
  - link "View all articles →":
    - /url: /blogs
  - link "Extension Feb 3, 2025 PastePass - Easily Paste Anywhere, Even on Restricted Websites! PastePass is a convenient web extension designed to enhance your browsing experience, especially on websites that restrict right-click functionality. With PastePass, you can effortlessly paste content from your clipboard into input fields and text areas with a simple click. Read post":
    - /url: /blogs/pastepass
    - text: Extension Feb 3, 2025
    - heading "PastePass - Easily Paste Anywhere, Even on Restricted Websites!" [level=4]
    - paragraph: PastePass is a convenient web extension designed to enhance your browsing experience, especially on websites that restrict right-click functionality. With PastePass, you can effortlessly paste content from your clipboard into input fields and text areas with a simple click.
    - text: Read post
    - img
  - link "React Jan 26, 2025 Debugging Expo React Native Debugging Expo React Native Read post":
    - /url: /blogs/expo-react-native-devtools-debugging
    - text: React Jan 26, 2025
    - heading "Debugging Expo React Native" [level=4]
    - paragraph: Debugging Expo React Native
    - text: Read post
    - img
  - link "React Nov 11, 2024 Expo Tunnel Tunneling in Expo React Native Read post":
    - /url: /blogs/expo-tunnel
    - text: React Nov 11, 2024
    - heading "Expo Tunnel" [level=4]
    - paragraph: Tunneling in Expo React Native
    - text: Read post
    - img
- contentinfo:
  - link "<CKG/>":
    - /url: "#hero"
  - paragraph: © 2026 Chitranjan Kumar Gupta. Crafted with ❤️ and lots of ☕
  - link "About":
    - /url: "#about"
  - link "Skills":
    - /url: "#skills"
  - link "Projects":
    - /url: "#projects"
  - link "Contact":
    - /url: "#contact"
- text: 🍪
- heading "Cookie Preferences" [level=4]
- paragraph: We use cookies, analytics, and performance measurement tools to ensure you get the best experience on this portfolio.
- button "Accept All"
- button "Decline"
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('E2E Portfolio Smoke Test', () => {
  4  |   test('homepage loads and renders primary hero elements', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     await expect(page).toHaveTitle(/Chitranjan|Gupta|Portfolio/i);
  7  | 
  8  |     // Verify main section elements exist
  9  |     await expect(page.locator('#about')).toBeAttached();
  10 |     await expect(page.locator('#projects')).toBeAttached();
  11 |     await expect(page.locator('#skills')).toBeAttached();
  12 |     await expect(page.locator('#contact')).toBeAttached();
  13 |   });
  14 | 
  15 |   test('navigation to /blogs displays published articles', async ({ page }) => {
  16 |     await page.goto('/blogs');
  17 |     await expect(page).toHaveURL(/.*blogs/);
  18 | 
  19 |     // Should list at least 1 blog card
  20 |     const blogLinks = page.locator('a[href^="/blogs/"]');
  21 |     await expect(blogLinks.first()).toBeVisible();
  22 |     const count = await blogLinks.count();
  23 |     expect(count).toBeGreaterThan(0);
  24 |   });
  25 | 
  26 |   test('blog reader page renders title, content and author attribution', async ({ page }) => {
  27 |     await page.goto('/blogs/freshmarks-it');
  28 |     await expect(page.locator('h1')).toBeVisible();
  29 | 
  30 |     // Verify Blogged By attribution
  31 |     await expect(page.getByText(/Blogged By/i)).toBeVisible();
  32 | 
  33 |     // Verify ShareButtons exist
> 34 |     await expect(page.locator('button[aria-label*="Share on Facebook"]')).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  35 |     await expect(page.locator('button[aria-label*="Share on Telegram"]')).toBeVisible();
  36 |   });
  37 | 
  38 |   test('cookie consent banner is present on first visit', async ({ page }) => {
  39 |     // Clear cookies/localStorage
  40 |     await page.context().clearCookies();
  41 |     await page.goto('/');
  42 |     
  43 |     // Cookie banner should be rendered
  44 |     const banner = page.getByText(/Cookie Preferences/i);
  45 |     await expect(banner).toBeVisible({ timeout: 5000 });
  46 |   });
  47 | 
  48 |   test('theme switcher changes data-design attribute on root element', async ({ page }) => {
  49 |     await page.goto('/');
  50 |     const html = page.locator('html');
  51 |     
  52 |     // Default design should be set
  53 |     await expect(html).toHaveAttribute('data-design', /.+/);
  54 |   });
  55 | });
  56 | 
```