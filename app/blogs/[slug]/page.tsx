import { getBlog } from "@/lib/get-blogs";
import { MDXBody } from "@/components/mdx-body";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const blog = await getBlog(params.slug);
  if (!blog) return notFound();
  return <MDXBody>{blog?.body}</MDXBody>;
}
