"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="container home w-full flex flex-row relative md:absolute top-0 md:top-[10px] h-full"
    >
      <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
      <div className="detailBox w-full md:w-2/3 p-5 md:p-0 h-full flex flex-col justify-center items-center">
        <div>
          <span className="text-xl font-extrabold dark:text-[#E0E0E0]">
            Welcome to my portfolio!
          </span>
        </div>
        <div className="titleBox">
          <h1 className="bungee-tint font-black text-2xl text-center ">
            Hi 👋, I&apos;m Chitranjan Kumar Gupta
          </h1>
          <h2 className="bungee-tint font-black text-2xl text-center">
            A passionate developer from India
          </h2>
        </div>
        <div className="mt-4 text-base dark:text-[#E0E0E0]">
          <span>My passion includes: </span>
          <ul className="ml-10 list-disc">
            <li>Web development</li>
            <li>App development</li>
            <li>Database design and development</li>
            <li>User Interface/User Experience (UI/UX) design</li>
          </ul>
          <p>
            I value innovation and excellence in my work, and I&apos;m always
            eager to learn new technologies and approaches. <br />
            Check out my portfolio section to see my projects and checkout my blogs.
          </p>
        </div>
        <div className="cta flex flex-row gap-[10px] mt-3">
          <Link href="tel:+919113178457" prefetch={false}>
            <button className="border-none rounded-[50px] h-[50px] w-[140px] flex flex-row justify-center items-center gap-[10px] p-[10px] bg-white dark:bg-[#E0E0E0] shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px]"
                viewBox="0 -960 960 960"
                fill="#5f6368"
                data-g="contact"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              <span>Contact me</span>
            </button>
          </Link>

          <Link
            className="no-underline"
            href="/resume.pdf"
            target="_blank"
            prefetch={false}
          >
            <button className="border-none rounded-[50px] h-[50px] w-[140px] flex flex-row justify-center items-center gap-[10px] p-[10px] bg-white dark:bg-[#E0E0E0] shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px]"
                viewBox="0 -960 960 960"
                fill="#5f6368"
                data-g="download"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              <span>My Resume</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
