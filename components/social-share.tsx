"use client";

import Link from "next/link";
import Image from "next/image";
import { facebook, linkedinlogo, telegramlogo, whatsapplogo, x } from "@/assets";

export default function SocialShare({
  SITE_URL,
  slug,
}: {
  SITE_URL: string;
  slug: string;
}) {
  return (
    <div className="flex flex-row gap-x-2">
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}/blogs/${slug}`}
        target="_blank"
        prefetch={false}
        title="Share on Facebook"
      >
        <Image
          src={facebook}
          width={20}
          height={20}
          alt="facebook"
          className="object-contain h-[20px] my-0"
        />
      </Link>

      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${SITE_URL}/blogs/${slug}`}
        target="_blank"
        prefetch={false}
        title="Share on Linkedin"
      >
        <Image
          src={linkedinlogo}
          width={20}
          height={20}
          alt="linkedin"
          className="object-contain h-[20px] my-0"
        />
      </Link>
      <Link
        href={`https://api.whatsapp.com/send?text=Check%20this%20out:%20${SITE_URL}/blogs/${slug}`}
        target="_blank"
        prefetch={false}
        title="Share on Whatsapp"
      >
        <Image
          src={whatsapplogo}
          width={20}
          height={20}
          alt="whatsapp"
          className="object-contain h-[20px] my-0"
        />
      </Link>

      <Link
        href={`https://twitter.com/share?url=${SITE_URL}/blogs/${slug}`}
        target="_blank"
        prefetch={false}
        title="Share on Twitter or X"
      >
        <Image
          src={x}
          width={20}
          height={20}
          alt="twitter or x"
          className="object-contain h-[20px] my-0"
        />
      </Link>
      <Link
        href={`https://t.me/share/url?url=${SITE_URL}/blogs/${slug}&text=Check%20this%20out!`}
        target="_blank"
        prefetch={false}
        title="Share on Telegram"
      >
        <Image
          src={telegramlogo}
          width={20}
          height={20}
          alt="telegram"
          className="object-contain h-[20px] my-0"
        />
      </Link>
      <Link
        href={`mailto:?subject=Check%20this%20out&body=I%20thought%20you%20might%20like%20this!%20${SITE_URL}/blogs/${slug}`}
        className="flex flex-row items-center justify-center"
        prefetch={false}
        title="Share on Email"
      >
        <svg
          className="w-[20px] h-[20px] my-0 fill-[#000000] dark:fill-[#E0E0E0]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
        </svg>
      </Link>
    </div>
  );
}
