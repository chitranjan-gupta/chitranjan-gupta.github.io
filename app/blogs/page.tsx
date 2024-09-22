import getBlogs from "@/lib/get-blogs";
import Link from "next/link";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <div>
      <ul>
        {blogs &&
          blogs.map((blog: any) => (
            <li key={blog.slug}>
              <Link href={`/blogs/${blog?.slug}`}>{blog?.slug}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
