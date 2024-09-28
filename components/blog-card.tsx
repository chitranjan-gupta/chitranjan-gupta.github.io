"use client";

import Link from "next/link";
import DateTime from "@/components/date-time";
import {QRCodeSVG} from 'qrcode.react';
import { SITE_URL } from "@/constants";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <div>
      <div className="w-full sm:w-80 h-[360px] relative shadow-md bg-[#E8F5E9] dark:bg-[#E0E0E0] flex flex-col justify-between">
        <div className="absolute w-full h-[fit-content] flex flex-row justify-around items-center -translate-y-2">
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
        </div>
        <div className="p-5">
          <DateTime datetime={blog?.created} />
          <span
            className="text-blue-500 text-lg font-bold flex overflow-hidden pr-3 w-full h-14"
            title="Blog title"
          >
            {blog?.title}
          </span>
          <p className="overflow-hidden h-24" title="Blog Description">
            {blog?.description}
          </p>
        </div>
        <Link href={`/blogs/${blog?.slug}`} className="p-1 mb-8 w-full" prefetch={false}>
          <button className="bg-[#FF6F61] dark:bg-[#00BFFF] w-full h-10 rounded-lg text-[#2C3E50] dark:text-gray-100">
            Read More
          </button>
        </Link>
      </div>
      <div className="w-full sm:w-80 h-32 shadow-md relative bg-[#E8F5E9] dark:bg-[#E0E0E0] ticketmarker">
        <div className="absolute flex flex-row w-full h-[fit-content] justify-between -translate-y-5">
          <div className="w-[40px] h-[40px] rounded-full bg-white dark:bg-[#1E1E1E] -translate-x-4"></div>
          <div className="w-[40px] h-[40px] rounded-full bg-white dark:bg-[#1E1E1E] translate-x-4"></div>
        </div>
        <div className="flex flex-row gap-x-2 p-8">
          <QRCodeSVG value={`${SITE_URL}/blogs/${blog?.slug}`} className="w-[70px] h-[70px] bg-transparent" />
          <div className="">
            <h6>Scan or</h6>
            <p>Show the QR-code when requested</p>
          </div>
        </div>
        <div className="absolute w-full h-[fit-content] flex flex-row justify-around items-center -translate-y-4">
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white dark:bg-[#1E1E1E] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
