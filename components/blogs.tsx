"use client";

import { usePathname } from "next/navigation";
import BlogCard from "@/components/blog-card";

export default function Blogs({
  blogs,
}: {
  blogs: ({ body: string } | null)[];
}) {
  const pathname = usePathname();
  return (
    <section
      id="blogs"
      className="container blogs w-full flex flex-row relative mt-10"
    >
      <div
        className={`emptyBox hidden md:block md:w-1/3 h-full ${
          pathname.includes("/blogs") ? "!hidden" : ""
        }`}
      ></div>
      <div
        className={`detailBox w-full md:w-2/3 h-full ${
          pathname.includes("/blogs") ? "!w-full" : ""
        }`}
      >
        <h2 className="boxTitle bungee-tint text-2xl font-black mb-[20px] text-center underline">
          Blogs
        </h2>
        <div>
          <div className="w-full flex flex-row flex-wrap gap-5 p-5">
            {blogs &&
              blogs.map(
                (blog: any, index) =>
                  blog !== null && <BlogCard key={index} blog={blog} />
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
