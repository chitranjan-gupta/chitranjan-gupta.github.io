"use server";

import dynamic from "next/dynamic";
import getBlogs from "@/lib/get-blogs";

const Blogs = dynamic(() => import("@/components/blogs"));

export default async function Page() {
  const blogs = await getBlogs();
  return <Blogs blogs={blogs} />;
}
