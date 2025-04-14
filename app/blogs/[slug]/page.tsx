"use server";

import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import getBlogs, { getBlog } from "@/lib/get-blogs";
import DateTime from "@/components/date-time";
import ShareButton from "@/components/share-button";
import SocialShare from "@/components/social-share";
import { MDXBody } from "@/components/mdx-body";
import { author } from "@/assets";
import { GITHUB_PROFILE, NAME, SITE_URL, USERNAME } from "@/constants";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog: any) => blog !== null && { slug: blog.slug });
}

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const blog: any = await getBlog(params.slug);
  if (!blog) return notFound();
  const blogs = await getBlogs();
  const relatedBlogs = blogs.filter((blog) => blog !== null).filter(
    (relatedBlog: any) =>
      relatedBlog.slug !== blog.slug &&
      relatedBlog.tags.some((tag: any) => blog.tags.includes(tag))
  );
  blog.relatedBlogs = relatedBlogs.length > 0 ? relatedBlogs.slice(0, 3): blogs.slice(0, 3);
  return (
    <Fragment>
      <div>
        <h1 title="Title">{blog?.title}</h1>
      </div>
      <div>
        <h2 title="Description">{blog?.description}</h2>
      </div>
      <div className="flex flex-row justify-between mb-1">
        <div>
          <span title="Blogged By">Blogged By</span>
          <Link
            href={GITHUB_PROFILE}
            target="_blank"
            className="flex flex-row no-underline items-center"
            referrerPolicy="no-referrer"
            prefetch={false}
          >
            <div
              className={`w-10 h-10 bg-no-repeat rounded-full`}
              style={{
                backgroundImage: `url('${author.src}')`,
                backgroundSize: "90px",
                backgroundPosition: "50% 45%",
              }}
              title="author image"
            ></div>
            <div className="flex flex-col justify-center ml-2">
              <span className="text-base" title="author name">
                {NAME}
              </span>
              <span
                className="text-xs text-gray-500 dark:text-[#E0E0E0]"
                title="author username"
              >
                {`@${USERNAME}`}
              </span>
            </div>
          </Link>
        </div>
        <div>
          <DateTime datetime={blog?.created} />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-2">
        <div className="">
          <ShareButton title={blog?.title} />
        </div>
        <div>
          <SocialShare SITE_URL={SITE_URL} slug={blog?.slug} />
        </div>
      </div>
      <hr />
      <MDXBody>{blog?.body}</MDXBody>
      <div>
        <h2 className="text-2xl font-bold mt-4 mb-2">Recent Blogs</h2>
        <div className="flex flex-col gap-2">
          {blog?.relatedBlogs?.map((relatedBlog: any) => (
            relatedBlog !== null && (
            <Link
              key={relatedBlog.slug}
              href={`/blogs/${relatedBlog.slug}`}
              className="no-underline break-words text-blue-500 hover:text-blue-700"
            >
              {relatedBlog.title}
            </Link>
            )
          ))}
        </div>
      </div>
    </Fragment>
  );
}
