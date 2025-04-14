"use client";

import Image from "next/image";
import Link from "next/link";
import {
  whatsapp,
  telegram,
  youtube,
  githublogo,
  github,
  linkedin,
  twitter,
  x,
} from "@/assets";

export default function Footer() {
  return (
    <footer
      id="connect"
      className="container w-full flex flex-row relative mt-10"
    >
      <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
      <div className="detailBox w-full md:w-2/3 h-full">
        <h2 className="bungee-tint font-black text-2xl underline mb-[20px] text-center">
          Connect with me
        </h2>
        <div className="mb-[10px] flex flex-col md:flex-row md:flex-wrap items-center justify-around gap-[10px] md:gap-[50px]">
          <Link
            className="no-underline"
            href="https://www.youtube.com/@chitranjan_gupta"
            target="_blank"
            rel="noreferrer"
            prefetch={false}
          >
            <div className="relative w-[200px] md:w-[350px] h-[100px]">
              <Image
                className="w-full h-full object-contain"
                src={youtube}
                alt="https://www.youtube.com/@chitranjan_gupta"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
          <Link
            className="no-underline"
            href="https://www.github.com/chitranjan-gupta"
            target="_blank"
            rel="noreferrer"
            prefetch={false}
          >
            <div className="flex flex-row items-center justify-between gap-x-2">
              <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[100px]">
                <Image
                  className="w-full h-full object-contain"
                  src={githublogo}
                  alt="https://github.com/chitranjan-gupta"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative w-[150px] h-[50px] md:w-[230px] md:h-[100px]">
                <Image
                  className="w-full h-full object-contain"
                  src={github}
                  alt="https://github.com/chitranjan-gupta"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </Link>
          <Link
            className="no-underline"
            href="https://www.linkedin.com/in/chitranjan-gupta"
            target="_blank"
            rel="noreferrer"
            prefetch={false}
          >
            <div className="relative w-[200px] h-[50px] md:w-[350px] md:h-[100px]">
              <Image
                className="w-full h-full object-contain"
                src={linkedin}
                alt="chitranjan-gupta"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
          <Link
            className="no-underline"
            href="https://www.x.com/chitranjan___"
            target="_blank"
            rel="noreferrer"
            prefetch={false}
          >
            <div className="flex flex-row items-center justify-center gap-x-2">
              <div className="relative w-[150px] h-[50px] md:w-[230px] md:h-[100px]">
                <Image
                  className="w-full h-full object-contain"
                  src={twitter}
                  alt="chitranjan___"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative w-[50px] md:w-[70px] h-[30px] md:h-[100px]">
                <Image
                  className="w-full h-full object-contain"
                  src={x}
                  alt="chitranjan___"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </Link>
          <Link
            className="no-underline"
            href="https://wa.me/+919113178457"
            target="_blank"
            rel="noreferrer"
            prefetch={false}
          >
            <div className="relative w-[200px] md:w-[350px] h-[100px]">
              <Image
                className="w-full h-full object-cover"
                src={whatsapp}
                alt="https://wa.me/+919113178457"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
          <Link
            className="no-underline"
            href="https://t.me/chitranjangupta"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative w-[200px] md:w-[350px] h-[100px]">
              <Image
                className="w-full h-full object-contain"
                src={telegram}
                alt="https://t.me/chitranjangupta"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <img
            loading="lazy"
            src="https://komarev.com/ghpvc/?username=chitranjan-gupta&label=Profile%20views&color=0e75b6&style=flat"
            width={120}
            height={60}
            alt="chitranjan-gupta"
            className="w-auto"
          />
        </div>
        <div>
          <div className="text-center w-full">
            <div className="text-center flex flex-col md:flex-row items-center justify-center dark:text-[#E0E0E0]">
              <span>Copyright 2024. Chitranjan Kumar Gupta.</span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
