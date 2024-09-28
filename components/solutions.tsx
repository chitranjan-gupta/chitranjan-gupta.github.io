"use client";

import Image from "next/image";
import { appdev, webdev } from "@/assets";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="container solutions w-full flex flex-row relative mt-10"
    >
      <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
      <div className="detailBox w-full md:w-2/3 h-full">
        <div className="boxTitle text-gray-500 mb-[20px] text-center underline">
          <h2 className="bungee-tint text-2xl font-black">Solutions</h2>
        </div>
        <div className="srBox flex flex-col md:flex-row items-center justify-center md:flex-wrap gap-[20px] p-[10px]">
          <div className="fBox w-full h-[370px] md:w-[400px] md:h-[400px] rounded-[10px] shadow-md p-0 bg-white dark:bg-[#E0E0E0]">
            <div className="fcontainer flex flex-col w-full h-full">
              <div className="fimgBox relative w-full h-full rounded-tl-[10px] rounded-tr-[10px]">
                <Image
                  src={webdev}
                  alt="Web Dev"
                  fill
                  className="w-full h-full object-fill rounded-tl-[10px] rounded-tr-[10px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="ftextBox w-full h-[10%] rounded-[10px] bg-white dark:bg-[#E0E0E0] relative top-[-30px] p-[5px]">
                <span className="text-[20px]">Web Development</span>
                <p className="text-[15px]">
                  Tech Stack: Next.js, Express.js, Laravel, Wordpress, Sanity
                </p>
              </div>
            </div>
          </div>
          <div className="fBox w-full h-[370px] md:w-[400px] md:h-[400px] rounded-[10px] shadow-md p-0 bg-white dark:bg-[#E0E0E0]">
            <div className="fcontainer flex flex-col w-full h-full">
              <div className="fimgBox relative w-[full] h-full rounded-tl-[10px] rounded-tr-[10px]">
                <Image
                  fill
                  alt="App Dev"
                  src={appdev}
                  className="object-fill rounded-tl-[10px] rounded-tr-[10px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="ftextBox w-full h-[10%] rounded-[10px] bg-white dark:bg-[#E0E0E0] relative top-[-30px] p-[5px]">
                <span className="text-[20px]">App Development</span>
                <p className="text-[15px]">
                  Tech Stack: React Native, Expo, Electron.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
