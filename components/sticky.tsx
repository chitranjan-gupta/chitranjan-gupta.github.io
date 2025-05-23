"use client";

import Link from "next/link";
import Social from "@/components/social";
import { author } from "@/assets";
import { ALTERNATE_EMAIL, EMAIL, PHONE_NO } from "@/constants";

export default function Sticky() {
  return (
    <section
      id="sticky"
      className="relative md:sticky top-0 md:top-[50px] left-0 right-0 bottom-0 w-full md:w-1/3 h-[65vh] md:h-[90vh] flex flex-row z-50"
    >
      <div className="imgBox flex flex-col w-full h-full relative items-center">
        <div
          className="img relative left-0 w-[220px] h-[400px] border-[0px] border-transparent bg-no-repeat bg-transparent bg-origin-border"
          style={{
            backgroundImage: `url('${author.src}')`,
            backgroundSize: "500px",
            backgroundPosition: "55% 46%",
          }}
        ></div>

        <div className="intro-box flex flex-col items-start relative left-0 mt-2">
          <span className="font-bold text-2xl dark:text-[#E0E0E0]">
            Chitranjan Kumar Gupta
          </span>
          <span className="font-bold text-2xl dark:text-[#E0E0E0]">
            चितरंजन कुमार गुप्ता
          </span>
          <span className="font-bold text-xl mt-2 dark:text-[#E0E0E0]">
            he/him
          </span>
          <span className="font-bold text-xl dark:text-[#E0E0E0]">
            Learner, Developer
          </span>
          <div className="mt-4">
            <Link
              href={`tel:${PHONE_NO}`}
              className="flex flex-row gap-x-2"
              prefetch={false}
            >
              <svg
                className="w-[30px] h-[30px] fill-[#000000] dark:fill-[#E0E0E0]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              <span className="font-black text-md text-blue-500">
                {PHONE_NO}
              </span>
            </Link>
          </div>
          <div>
            <Link
              href={`mailto:${EMAIL}`}
              className="flex flex-row gap-x-2"
              prefetch={false}
            >
              <svg
                className="w-[30px] h-[30px] fill-[#000000] dark:fill-[#E0E0E0]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <span className="font-black text-md text-blue-500">{EMAIL}</span>
            </Link>
          </div>
          <div>
            <Link
              href={`mailto:${ALTERNATE_EMAIL}`}
              className="flex flex-row gap-x-2"
              prefetch={false}
            >
              <svg
                className="w-[30px] h-[30px] fill-[#000000] dark:fill-[#E0E0E0]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
              </svg>
              <span className="font-black text-md text-blue-500">
                {ALTERNATE_EMAIL}
              </span>
            </Link>
          </div>
          <Social />
        </div>
      </div>
      <div className="openBox hidden"></div>
    </section>
  );
}
