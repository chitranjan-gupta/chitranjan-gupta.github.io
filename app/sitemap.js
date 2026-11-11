import { SITE_URL } from "@/constants";
import getBlogs from "@/lib/get-blogs";

export default async function sitemap() {
  const blogs = await getBlogs();
  const blogUrls = (blogs || [])
    .filter((blog) => blog !== null && blog.slug)
    .map((blog) => ({
      url: `${SITE_URL}/blogs/${blog.slug}`,
      lastModified: blog.updated ? new Date(blog.updated) : (blog.created ? new Date(blog.created) : new Date()),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  // Sort the blog URLs by lastModified date in descending order
  const sortedBlogSitemap = blogUrls.sort((a, b) => {
    return (
      new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
    );
  });

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacypolicy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/cookiepolicy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...sortedBlogSitemap,
  ];
}
