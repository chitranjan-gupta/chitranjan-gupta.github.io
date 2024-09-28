"use client";

import Link from "next/link";
import Image from "next/image";
import {
  githublogo,
  linkedinlogo,
  telegramlogo,
  whatsapplogo,
  x,
  youtubelogo,
} from "@/assets";

export default function Social() {
  return (
    <div className="flex flex-row gap-x-2 mt-1">
      <Link
        href="https://www.youtube.com/@chitranjan_gupta"
        target="_blank"
        rel="noreferrer"
        prefetch={false}
      >
        <Image
          src={youtubelogo}
          width={30}
          height={30}
          alt="https://www.youtube.com/@chitranjan_gupta"
          className="w-auto h-auto"
        />
      </Link>
      <Link
        href={"https://github.com/chitranjan-gupta"}
        target="_blank"
        rel="noreferrer"
        prefetch={false}
      >
        <Image src={githublogo} width={30} height={30} alt="chitranjan-gupta" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/chitranjan-gupta"}
        target="_blank"
        rel="noreferrer"
        prefetch={false}
      >
        <Image
          src={linkedinlogo}
          width={30}
          height={30}
          alt="chitranjan-gupta"
        />
      </Link>

      <Link
        href="https://www.x.com/chitranjan___"
        target="_blank"
        rel="noreferrer"
        prefetch={false}
      >
        <Image
          src={x}
          width={30}
          height={30}
          alt="chitranjan____"
          className="w-auto h-auto"
        />
      </Link>
      <Link
        href="https://wa.me/+919113178457"
        target="_blank"
        rel="noreferrer"
        prefetch={false}
      >
        <Image
          src={whatsapplogo}
          width={30}
          height={30}
          alt="https://wa.me/+919113178457"
          className="w-auto h-auto"
        />
      </Link>
      <Link
        href="https://t.me/chitranjangupta"
        target="_blank"
        rel="noreferrer"
        prefetch={false}
      >
        <Image
          src={telegramlogo}
          width={30}
          height={30}
          alt="https://t.me/chitranjangupta"
          className="w-auto h-auto"
        />
      </Link>
    </div>
  );
}
