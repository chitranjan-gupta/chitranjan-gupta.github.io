"use client";

import Link from "next/link";
import Image from "next/image";
import {
  coldbreez,
  examsforcareers,
  filexplorer,
  imageshuffler,
  knowtech,
  papaplayer,
  patternlock,
  shikshasetu,
  shikshasetuapp,
  websocket_chat,
  wrenchworks,
  shikshasetuextension
} from "@/assets";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="container projectslist w-full flex flex-row relative mt-10"
    >
      <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
      <div className="detailBox list w-full md:w-2/3 h-full p-[10px]">
        <div className="caption boxTitle text-gray-500 mb-[20px] text-center underline">
          <h2 className="bungee-tint text-center font-black text-2xl">
            Portfolio
          </h2>
        </div>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10">
          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="0"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="ShikshaSetu extension"
                    src={shikshasetuextension}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://github.com/chitranjan-gupta/shikshasetu"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    ShikshaSetu Extension
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="1"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="ShikshaSetu app"
                    src={shikshasetuapp}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://github.com/chitranjan-gupta/lms-app"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    ShikshaSetu App
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="2"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="ShikshaSetu"
                    src={shikshasetu}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://lms-sand-mu.vercel.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    ShikshaSetu
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="3"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="Wrenchworks"
                    src={wrenchworks}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://wrenchworks.vercel.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    Wrenchworks
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="4"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="Coldbreez"
                    src={coldbreez}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://coldbreez.vercel.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    Coldbreez
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="5"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="papa-player"
                    src={papaplayer}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://papa-player.vercel.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    Papa Player
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="6"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="image-shuffler"
                    src={imageshuffler}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://images-shuffler.vercel.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    Image Shuffler
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="7"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="pattern-lock"
                    src={patternlock}
                    className="w-full h-full object-center object-cover rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://patternlock.vercel.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    Pattern Lock
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="8"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="examsforcareers"
                    src={examsforcareers}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://examsforcareers.vercel.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    EXAMSFORCAREERS
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="9"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="file-explorer"
                    src={filexplorer}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://chitranjan-gupta.github.io/file-explorer/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    File Explorer
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="10"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="websocket-chat"
                    src={websocket_chat}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://websocket-chat.up.railway.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    Websocket Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slide relative w-full h-[280px] md:w-[420px] md:h-[320px] overflow-hidden shadow-md rounded-[10px]"
            id="11"
          >
            <div className="rounded-[10px] bg-[white] w-full h-full">
              <div className="p-0 bg-white text-gray-950 rounded-[10px] w-full h-full">
                <div className="relative w-full h-full rounded-[10px]">
                  <Image
                    fill
                    alt="knowtech"
                    src={knowtech}
                    className="w-full h-full object-fill rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="-translate-y-10 w-full text-center text-2xl bungee-spice font-black">
                  <Link
                    href="https://knowtech.netlify.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    prefetch={false}
                  >
                    Know Tech
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
