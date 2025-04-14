import { cache } from "react";
import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";

const getBlogs = cache(async () => {
  const blogs = await fs.readdir("./blogs/");
  return Promise.all(
    blogs
      .filter(
        (file) => path.extname(file) === ".mdx" || path.extname(file) === ".md"
      )
      .map(async (file) => {
        const filePath = `./blogs/${file}`;
        const blogContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(blogContent);

        if (data.published === "false" || data.published === false) {
          return null;
        }

        return { ...data, body: content };
      })
  );
});

const getBlog = cache(async (slug: string) => {
  const blogs = await getBlogs();
  return blogs.find((blog: any) => blog !== null && blog.slug === slug);
})

export {
  getBlog
};

export default getBlogs;