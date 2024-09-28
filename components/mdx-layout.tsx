"use client";

import type { ReactNode } from "react";
import Link from "next/link";

export function MDXLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col items-center">
      <article className="w-full p-2 prose md:prose-lg lg:prose-xl dark:prose-headings:text-[#E0E0E0] prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm dark:prose-hr:text-[#E0E0E0] prose-hr:my-2 prose-ol:overflow-hidden dark:prose-ol:text-[#E0E0E0] prose-ol:text-ellipsis prose-ol:whitespace-nowrap dark:prose-a:text-[#E0E0E0] dark:text-[#E0E0E0] dark:prose-code:text-[#E0E0E0]">
        <div className="">
          <Link
            href={"/blogs"}
            className="text-gray-500 dark:text-[#E0E0E0] no-underline text-base"
            title="Back to Blogs"
            prefetch={false}
          >
            &larr; Back to Blogs
          </Link>
        </div>
        {children}
      </article>
    </div>
  );
}
