# GitHub Webhook Setup Guide for Automated Blog Sync

This guide provides simple step-by-step instructions to connect your **GitHub Blog Repository** to your live portfolio so that whenever you push a new article, it updates automatically on your website.

---

### Step 1: Set Your Webhook Secret in Portfolio Environment

1. In your portfolio's local `.env.local` or hosting dashboard (Vercel, Netlify, Cloudflare), set:
   ```env
   BLOG_WEBHOOK_SECRET=your_super_secret_webhook_key_here
   BLOG_GITHUB_REPO=chitranjan-gupta/chitranjan-gupta.github.io
   BLOG_GITHUB_PATH=_posts
   BLOG_GITHUB_BRANCH=main
   ```
2. Save and deploy.

---

### Step 2: Add the Webhook in your Blog Repository on GitHub

1. Open your Blog Repository on GitHub (e.g. `https://github.com/chitranjan-gupta/chitranjan-gupta.github.io`).
2. Click on **Settings** (tab at the top).
3. In the left sidebar, click **Webhooks** → click the **Add webhook** button.
4. Fill in the fields:
   - **Payload URL**: `https://<YOUR_PORTFOLIO_DOMAIN>/api/revalidate-blogs`
     *(For example: `https://chitranjan.me/api/revalidate-blogs` or your vercel deployment URL)*
   - **Content type**: Select `application/json`
   - **Secret**: Enter the exact secret string you set as `BLOG_WEBHOOK_SECRET` in Step 1.
   - **SSL verification**: Enable SSL verification.
   - **Which events would you like to trigger this webhook?**: 
     Select **Just the `push` event**.
   - Check the **Active** checkbox.
5. Click **Add webhook**.

---

### Step 3: Verify the Connection

1. GitHub will send a test ping to your portfolio. It should show a green checkmark `✔ 200 OK`.
2. Push any new article or commit to your blog repository.
3. The webhook will trigger `/api/revalidate-blogs`, which pulls the new markdown files and calls Next.js on-demand revalidation.
4. Visit `/blogs` or `#blogs` on your portfolio — the new post will appear live immediately!
