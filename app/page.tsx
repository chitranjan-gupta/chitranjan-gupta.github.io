"use client";
import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import author from "@/assets/images/author.png";
import webdev from "@/assets/images/web.webp";
import appdev from "@/assets/images/app.webp";
import shikshasetu from "@/assets/images/shikshaSetu.png";
import wrenchworks from "@/assets/images/wrenchworks.png";
import papaplayer from "@/assets/images/papa-player.png";
import coldbreez from "@/assets/images/coldbreez.png";
import imageshuffler from "@/assets/images/image-shuffler.png";
import patternlock from "@/assets/images/pattern-lock.png";
import examsforcareers from "@/assets/images/examsforcareers.png";
import filexplorer from "@/assets/images/file-explorer.png";
import websocket_chat from "@/assets/images/websocket-chat.png";
import knowtech from "@/assets/images/knowtech.png";
import sanity from "@/assets/images/sanity.svg";
import sanitylogo from "@/assets/images/sanity-logo.svg";
import laravel from "@/assets/images/laravel.svg";
import nodejs from "@/assets/images/nodejs.png";
import expressjs from "@/assets/images/expressjs.png";
import electronjs from "@/assets/images/electronjs.png";
import reactnative from "@/assets/images/react-native.png";
import expo from "@/assets/images/expo.png";
import linkedin from "@/assets/images/linkedin.png";

export default function Home() {
  const first_name = useRef<HTMLInputElement>(null),
    middle_name = useRef<HTMLInputElement>(null),
    last_name = useRef<HTMLInputElement>(null),
    email = useRef<HTMLInputElement>(null),
    phone_number = useRef<HTMLInputElement>(null),
    input_file = useRef<HTMLInputElement>(null),
    input_message = useRef<HTMLTextAreaElement>(null);

  function validate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (first_name?.current?.value?.length! <= 0) {
      alert("Fill the first name");
      return false;
    }
    if (middle_name?.current?.value?.length! <= 0) {
      alert("Fill the middle name");
      return false;
    }
    if (last_name?.current?.value?.length! <= 0) {
      alert("Fill the last name");
      return false;
    }
    if (email?.current?.value.length! <= 0) {
      alert("Fill the email name");
      return false;
    }
    if (input_message?.current?.value.length! <= 0) {
      alert("Fill your message");
      return false;
    }
  }

  function scrollToSection(sectionId: string, offset: number) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <header className="w-full h-[100px] md:h-[50px] shadow-md p-[10px] block sticky top-0 z-[100] bg-[cornsilk]">
        <nav className="w-full h-full flex flex-col md:flex-row justify-between">
          <div className="flex flex-row items-center justify-start md:justify-center text-[25px] flex-wrap">
            <div id="menu">
              <svg
                id="bar"
                className="block w-[24px] h-[24px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#5f6368"
                data-g="bar"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
              <svg
                id="close"
                className="hidden"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
                data-g="close"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
            <span className="h-[30px] flex font-[900] flex-row justify-center items-center pt-2 text-gray-500 rounded-[5px]">
              Chitranjan Gupta
            </span>
          </div>
          <div className="head-list flex flex-row justify-start md:justify-end mr-0 md:mr-[30px]">
            <ul className="nav-list flex flex-row flex-wrap list-none">
              <li className="mr-[10px]">
                <button onClick={() => scrollToSection("hero", 100)}>
                  Home
                </button>
              </li>
              <li className="mr-[10px]">
                <button onClick={() => scrollToSection("about", 100)}>
                  About
                </button>
              </li>
              <li className="mr-[10px]">
                <button onClick={() => scrollToSection("portfolio", 100)}>
                  Portfolio
                </button>
              </li>

              <li className="mr-[10px]">
                <button onClick={() => scrollToSection("projects", 100)}>
                  Projects
                </button>
              </li>

              <li className="mr-[10px]">
                <button onClick={() => scrollToSection("githubstats", 100)}>
                  Github Stats
                </button>
              </li>

              <li className="mr-[10px]">
                <button onClick={() => scrollToSection("services", 100)}>
                  Solutions
                </button>
              </li>

              <li className="mr-[10px]">
                <button onClick={() => scrollToSection("contact", 100)}>
                  Contact
                </button>
              </li>

              <li className="mr-[10px]">
                <button onClick={() => scrollToSection("connect", 100)}>
                  Connect
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="w-full h-full">
        <section
          id="stick"
          className="stick relative md:sticky top-0 md:top-[50px] left-0 right-0 bottom-0 w-full md:w-1/3 h-[65vh] md:h-[90vh] flex flex-row z-50"
        >
          <div className="imgBox flex flex-col w-full h-full relative items-center">
            <div
              className="img relative left-0 w-[220px] h-[400px] border-[0px]"
              style={{
                backgroundImage: `url('${author.src}')`,
                backgroundColor: "transparent",
                backgroundSize: "500px",
                backgroundRepeat: "no-repeat",
                backgroundOrigin: "border-box",
                backgroundPosition: "55% 46%",
                borderColor: "transparent",
              }}
            ></div>

            <div className="intro-box flex flex-col items-start relative left-0 mt-2">
              <span className="font-bold text-2xl">Chitranjan Kumar Gupta</span>
              <span className="font-bold text-xl mt-2">he/him</span>
              <span className="font-bold text-xl">Learner, Developer</span>
              <div className="mt-4">
                <Link
                  href="tel:+91-9113178457"
                  className="flex flex-row gap-x-2"
                >
                  <svg
                    className="w-[30px] h-[30px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#000000"
                  >
                    <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  <span className="font-black text-md text-blue-500">
                    +91-9113178457
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href="mailto:chitranjankumargupta123@gmail.com"
                  className="flex flex-row gap-x-2"
                >
                  <svg
                    className="w-[30px] h-[30px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#000000"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                  <span className="font-black text-md text-blue-500">
                    chitranjankumargupta123@gmail.com
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href="mailto:chitranjankumargupta@outlook.com"
                  className="flex flex-row gap-x-2"
                >
                  <svg
                    className="w-[30px] h-[30px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#000000"
                  >
                    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                  </svg>
                  <span className="font-black text-md text-blue-500">
                    chitranjankumargupta@outlook.com
                  </span>
                </Link>
              </div>
              <div className="flex flex-row gap-x-2 mt-1">
                <Link
                  href={"https://www.linkedin.com/in/chitranjan-gupta"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedin}
                    width={30}
                    height={30}
                    alt="chitranjan-gupta"
                  />
                </Link>
                <Link
                  href={"https://github.com/chitranjan-gupta"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                    }
                    width={30}
                    height={30}
                    alt="chitranjan-gupta"
                  />
                </Link>
                <Link
                  href="https://www.x.com/chitranjan___"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/2267px-X_logo_2023.svg.png"
                    }
                    width={30}
                    height={30}
                    alt="chitranjan____"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="openBox hidden"></div>
        </section>
        <section
          id="hero"
          className="container hero w-full flex flex-row relative md:absolute top-0 md:top-[10px] h-full"
        >
          <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
          <div className="detailBox w-full md:w-2/3 p-5 md:p-0 h-full flex flex-col justify-center items-center">
            <div>
              <span className="text-xl font-extrabold">
                Welcome to my portfolio!
              </span>
            </div>
            <div className="titleBox">
              <h1 className="bungee-tint font-black text-2xl text-center">
                Hi 👋, I&apos;m Chitranjan Kumar Gupta
              </h1>
              <h2 className="bungee-tint font-black text-2xl text-center">
                A passionate developer from India
              </h2>
            </div>
            <div className="mt-4 text-base">
              <span>My passion includes: </span>
              <ul className="ml-10 list-disc">
                <li>Web development</li>
                <li>App development</li>
                <li>Database design and development</li>
                <li>User Interface/User Experience (UI/UX) design</li>
              </ul>
              <p>
                I value innovation and excellence in my work, and I&apos;m
                always eager to learn new technologies and approaches. <br />
                Check out my portfolio section to see my projects.
              </p>
            </div>
            <div className="cta flex flex-row gap-[10px]">
              <Link href="tel:+919113178457">
                <button className="border-none rounded-[50px] h-[50px] w-[140px] flex flex-row justify-center items-center gap-[10px] p-[10px] bg-white shadow-md">
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

              <Link className="no-underline" href="/resume.pdf" target="_blank">
                <button className="border-none rounded-[50px] h-[50px] w-[140px] flex flex-row justify-center items-center gap-[10px] p-[10px] bg-white shadow-md">
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
        <section
          id="about"
          className="container about w-full flex flex-row relative mt-10"
        >
          <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
          <div className="detailBox w-full md:w-2/3 h-full p-5 md:p-0">
            <div className="boxTitle mb-[20px] text-center underline">
              <h2 className="bungee-tint text-2xl font-black">About me</h2>
            </div>
            <div className="aboutmebox text-base">
              <span>
                Hi, I&apos;m Chitranjan Kumar Gupta, a creative and driven
                developer from India. With a passion for innovation and
                excellence, I bring a unique combination of skills and
                experience to the table. I&apos;ve always been fascinated by
                Software, and have spent years honing my skills in Software
                Development.
                <br />
              </span>
              <span>
                Looking Ahead I&apos;m excited to connect with like-minded
                individuals and explore new opportunities. Let&apos;s work
                together to create something amazing!
              </span>
              <div className="programBox flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-around md:justify-start md:gap-x-5 md:gap-y-5 md:p-0">
                <div>
                  <b className="text-[20px] bungee-shade">
                    Programming Languages:
                  </b>
                  <div className="flex flex-row flex-wrap mt-3 gap-x-[50px] md:gap-x-[20px]">
                    <ul className="text-[20px] bungee-shade">
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png')]"></li>
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png')]"></li>
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png')]"></li>
                    </ul>
                    <ul className={` text-[20px] bungee-shade`}>
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png')]"></li>
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/320px-Java_programming_language_logo.svg.png')]"></li>
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png')]"></li>
                    </ul>
                    <ul className={` text-[20px] bungee-shade`}>
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1024px-PHP-logo.svg.png')]"></li>
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png')]"></li>
                      <li className="flex flex-row items-center mb-8 before:content-[''] before:block before:relative before:w-[60px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/800px-The_C_Programming_Language_logo.svg.png')]"></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <b className="text-[20px] bungee-shade">
                    Libraries & Framework:
                  </b>
                  <div className="flex flex-row flex-wrap gap-x-[0px] md:gap-x-[40px] mt-2">
                    <ul className={` text-[20px] bungee-shade`}>
                      <li className="flex flex-row gap-x-2">
                        <span className="flex flex-row items-center before:content-[''] before:block before:relative before:w-[40px] before:h-[40px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/800px-React_Logo_SVG.svg.png')]"></span>
                        <span className="flex flex-row items-center before:content-[''] before:block before:relative before:w-[120px] before:h-[50px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1920px-Nextjs-logo.svg.png')]"></span>
                      </li>
                      <li className="flex flex-row items-center -ml-2 mb-1 relative w-[150px] h-[60px]">
                        <Image
                          src={reactnative}
                          alt="react native"
                          width={150}
                          height={40}
                        />
                      </li>
                      <li className="flex flex-row items-center mb-1 relative w-[130px] h-[40px]">
                        <Image src={expo} alt="expo" width={130} height={40} />
                      </li>
                      <li className="flex flex-row items-center mb-1 relative w-[180px] h-[60px]">
                        <Image
                          src={nodejs}
                          alt="nodejs"
                          width={180}
                          height={40}
                          className="w-auto h-auto"
                        />
                      </li>
                      <li className="flex flex-row items-center mb-1 realtive w-[140px] h-[60px]">
                        <Image
                          src={expressjs}
                          alt="expressjs"
                          width={140}
                          height={40}
                          className="w-auto h-auto"
                        />
                      </li>
                    </ul>
                    <ul className={` text-[20px] bungee-shade`}>
                      <li className="flex flex-row items-center mt-1 mb-4 before:content-[''] before:block before:relative before:w-[40px] before:h-[40px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/800px-Electron_Software_Framework_Logo.svg.png')]">
                        <Image
                          src={electronjs}
                          alt="electronjs"
                          width={120}
                          height={60}
                        />
                      </li>
                      <li className="flex flex-row items-center gap-x-2 mb-1 before:content-[''] before:block before:relative before:w-[40px] before:h-[40px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png')]">
                        <Image
                          src={laravel}
                          alt="sanity"
                          width={110}
                          height={40}
                          className="w-auto h-auto"
                        />
                      </li>
                      <li className="flex flex-row items-center mb-1 before:content-[''] before:block before:relative before:w-[150px] before:h-[70px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/WordPress_logo.svg/1920px-WordPress_logo.svg.png')]"></li>
                      <li
                        className={`relative flex flex-row items-center justify-start gap-x-1 mb-1 w-[150px] h-[40px]`}
                      >
                        <div className="relative w-[40px] h-[40px]">
                          <Image
                            src={sanitylogo}
                            alt="sanitylogo"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="relative w-[100px] h-[40px]">
                          <Image
                            src={sanity}
                            alt="sanity"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </li>
                      <li className="flex flex-row items-center mb-1 before:content-[''] before:block before:relative before:w-[150px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/1920px-Tailwind_CSS_logo.svg.png')]"></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <b className="text-[20px] bungee-shade">Database:</b>
                  <ul className={` text-[20px] bungee-shade`}>
                    <li className="flex flex-row items-center mb-3 before:content-[''] before:block before:relative before:w-[150px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/800px-MySQL_logo.svg.png')]"></li>
                    <li className="flex flex-row items-center mb-3 before:content-[''] before:block before:relative before:w-[150px] before:h-[60px] before:bg-center before:bg-contain before:bg-no-repeat before:bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/1920px-MongoDB_Fores-Green.svg.png')]"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                id="1"
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
                      >
                        ShikshaSetu
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
                      >
                        Wrenchworks
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
                      >
                        Coldbreez
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
                      >
                        Papa Player
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
                      >
                        Image Shuffler
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
                      >
                        Pattern Lock
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
                      >
                        EXAMSFORCAREERS
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
                      >
                        File Explorer
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
                      >
                        Websocket Chat
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
        <section
          id="projects"
          className="container projects w-full flex flex-row relative"
        >
          <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
          <div className="detailBox w-full md:w-2/3 h-full">
            <h2 className="boxTitle bungee-tint font-black text-2xl mb-[20px] text-center underline">
              Projects
            </h2>
            <div className="prBox flex flex-col md:flex-row md:flex-wrap items-center justify-around mx-3">
              <div className="cBox w-full h-[100px] md:w-[400px] md:h-[100px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white">
                <div className="icon-box flex flex-row items-center justify-start">
                  <svg className="w-[20px] h-[20px]">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <Link
                    href="https://github.com/chitranjan-gupta/cloudflare-telegram-bot"
                    target="_blank"
                  >
                    <span className="text-xl">
                      Cloudflare Worker Telegram Bot
                    </span>
                  </Link>
                </div>
                <div className="sum-box pl-[5px]">
                  <p className="text-ellipsis text-sm">
                    Package Hosted on npmjs to acts a telegram bot using
                    cloudflare worker
                  </p>
                </div>
                <div className="lang-box flex flex-row justify-start items-center gap-x-2 pl-[5px]">
                  <span className="w-[10px] h-[10px] bg-red-500 rounded-full"></span>
                  <span className="">Javascript</span>
                </div>
              </div>
              <div className="cBox w-full h-[100px] md:w-[400px] md:h-[100px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white">
                <div className="icon-box flex flex-row items-center justify-start">
                  <svg className="w-[20px] h-[20px]">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <Link
                    href="https://github.com/chitranjan-gupta/freshmarks"
                    target="_blank"
                  >
                    <span className="text-xl">FreshMarks</span>
                  </Link>
                </div>
                <div className="sum-box pl-[5px]">
                  <p className="text-ellipsis text-sm">
                    Firefox Addon and Chrome Extension used to update Bookmark
                  </p>
                </div>
                <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
                  <span className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></span>
                  <span>Javascript</span>
                </div>
              </div>
              <div className="cBox w-full h-[100px] md:w-[400px] md:h-[100px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white">
                <div className="icon-box flex flex-row items-center justify-start">
                  <svg className="w-[20px] h-[20px]">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <Link
                    href="https://github.com/chitranjan-gupta/Telegram-OAuth"
                    target="_blank"
                  >
                    <span className="text-xl">Telegram OAuth</span>
                  </Link>
                </div>
                <div className="sum-box pl-[5px]">
                  <p className="text-ellipsis text-sm">
                    Authentication using Telegram
                  </p>
                </div>
                <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
                  <span className="w-[10px] h-[10px] bg-gray-900 rounded-full"></span>
                  <span>Next.js</span>
                  <span className="w-[10px] h-[10px] bg-blue-400 rounded-full"></span>
                  <span>React</span>
                  <span className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></span>
                  <span>Javascript</span>
                </div>
              </div>
              <div className="cBox w-full h-[100px] md:w-[400px] md:h-[100px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white">
                <div className="icon-box flex flex-row items-center justify-start">
                  <svg className="w-[20px] h-[20px]">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <Link
                    href="https://github.com/chitranjan-gupta/sanity-plugin-social-embed"
                    target="_blank"
                  >
                    <span className="text-xl">Sanity Plugin Social Embed</span>
                  </Link>
                </div>
                <div className="sum-box pl-[5px]">
                  <p className="text-ellipsis text-sm">
                    Embed Social Media Post in Sanity
                  </p>
                </div>
                <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
                  <span className="w-[10px] h-[10px] bg-blue-300 rounded-full"></span>
                  <span>React</span>
                  <span className="w-[10px] h-[10px] bg-blue-600 rounded-full"></span>
                  <span>Typescript</span>
                </div>
              </div>
              <div className="cBox w-full h-[100px] md:w-[400px] md:h-[100px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white">
                <div className="icon-box flex flex-row items-center justify-start">
                  <svg className="w-[20px] h-[20px]">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <Link
                    href="https://github.com/chitranjan-gupta/QRPhishing"
                    target="_blank"
                  >
                    <span className="text-xl">QRPhishing</span>
                  </Link>
                </div>
                <div className="sum-box pl-[5px]">
                  <p className="text-ellipsis">
                    Hijack Web Session using QRPhishing
                  </p>
                </div>
                <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
                  <span className="w-[10px] h-[10px] bg-red-500 rounded-full"></span>
                  <span>HTML</span>
                  <span className="w-[10px] h-[10px] bg-yellow-200 rounded-full"></span>
                  <span>Javascript</span>
                </div>
              </div>
              <div className="cBox w-full h-[100px] md:w-[400px] md:h-[100px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white">
                <div className="icon-box flex flex-row items-center justify-start">
                  <svg className="w-[20px] h-[20px]">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <Link
                    href="https://github.com/chitranjan-gupta/Flipkart-Bot"
                    target="_blank"
                  >
                    <span className="text-xl">Flipkart-Bot</span>
                  </Link>
                </div>
                <div className="sum-box pl-[5px]">
                  <p className="text-ellipsis text-sm">
                    Flipkart Product Price Tracker Telegram Bot
                  </p>
                </div>
                <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
                  <span className="w-[10px] h-[10px] bg-blue-800 rounded-full"></span>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="githubstats"
          className="container githubstats w-full flex flex-row relative mt-10"
        >
          <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
          <div className="detailBox w-full md:w-2/3 h-full">
            <div className="boxTitle mb-[20px] text-center underline">
              <h2 className="bungee-tint text-2xl font-black">Github Stats</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end p-5 md:p-0">
              <div>
                <img
                  className="content-center items-center"
                  src="https://github-readme-stats.vercel.app/api?username=chitranjan-gupta&show_icons=true"
                  alt="chitranjan-gupta"
                  width="500"
                  height="190"
                />
                <img
                  className="content-center items-center"
                  src="https://streak-stats.demolab.com/?user=chitranjan-gupta"
                  alt="chitranjan-gupta"
                  width="500"
                  height="180"
                />
              </div>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=chitranjan-gupta&layout=pie"
                alt="chitranjan-gupta"
              />
            </div>
          </div>
        </section>
        <section
          id="services"
          className="container services w-full flex flex-row relative mt-10"
        >
          <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
          <div className="detailBox w-full md:w-2/3 h-full">
            <div className="boxTitle text-gray-500 mb-[20px] text-center underline">
              <h2 className="bungee-tint text-2xl font-black">Solutions</h2>
            </div>
            <div className="srBox flex flex-col md:flex-row items-center justify-center md:flex-wrap gap-[20px] p-[10px]">
              <div className="fBox w-full h-[370px] md:w-[400px] md:h-[400px] rounded-[10px] shadow-md p-0 bg-white">
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
                  <div className="ftextBox w-full h-[10%] rounded-[10px] bg-white relative top-[-30px] p-[5px]">
                    <span className="text-[20px]">Web Development</span>
                    <p className="text-[15px]">
                      Tech Stack: Next.js, Express.js, Laravel, Wordpress,
                      Sanity
                    </p>
                  </div>
                </div>
              </div>
              <div className="fBox w-full h-[370px] md:w-[400px] md:h-[400px] rounded-[10px] shadow-md p-0 bg-white">
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
                  <div className="ftextBox w-full h-[10%] rounded-[10px] bg-white relative top-[-30px] p-[5px]">
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

        <section
          id="contact"
          className="container contact w-full flex flex-row relative mt-10"
        >
          <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
          <div className="detailBox w-full md:w-2/3 h-full">
            <h2 className="boxTitle bungee-tint text-2xl font-black mb-[20px] text-center underline">
              Contact Me
            </h2>
            <div>
              <div className="flex flex-col md:flex-row md:flex-wrap items-start gap-2 p-2 md:p-[25px] pt-0">
                <div>
                  <Link
                    href="mailto:chitranjankumargupta123@gmail.com"
                    className="flex flex-row items-center gap-x-2"
                  >
                    <svg
                      className="w-[50px] h-[50px] p-2 bg-white shadow-md rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#000000"
                    >
                      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                    </svg>
                    <span className="h-[40px] font-black text-md text-center p-2.5 bg-white shadow-md rounded-full">
                      chitranjankumargupta123@gmail.com
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    href="mailto:chitranjankumargupta@outlook.com"
                    className="flex flex-row items-center gap-x-2"
                  >
                    <svg
                      className="w-[50px] h-[50px] p-2 bg-white shadow-md rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#000000"
                    >
                      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                    <span className="h-[40px] font-black text-md text-center p-2.5 bg-white shadow-md rounded-full">
                      chitranjankumargupta@outlook.com
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    href="tel:+91-9113178457"
                    className="flex flex-row items-center gap-x-2"
                  >
                    <svg
                      className="w-[50px] h-[50px] bg-white p-2 rounded-full shadow-md"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#000000"
                    >
                      <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                    </svg>
                    <span className="h-[40px] bg-white font-black text-md text-center p-2.5 shadow-md rounded-full">
                      +91-9113178457
                    </span>
                  </Link>
                </div>
              </div>
              <form onSubmit={validate} className="flex flex-col p-[20px] pt-0">
                <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2">
                  <input
                    className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white indent-[10px]"
                    ref={first_name}
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white indent-[10px]"
                    ref={middle_name}
                    id="middle_name"
                    name="middle_name"
                    type="text"
                    placeholder="Middle Name"
                  />
                  <input
                    className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white indent-[10px]"
                    ref={last_name}
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2">
                  <input
                    className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white indent-[10px]"
                    ref={email}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white indent-[10px]"
                    ref={phone_number}
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    placeholder="Phone Number"
                  />
                  <span className="w-full md:w-[260px] h-[50px] shadow-md border-none outline-none rounded-[5px] bg-white p-[5px]">
                    <input
                      className="w-[210px] h-[30px] md:h-[25px] shadow-none border-none rounded-bl-[0] rounded-br-[0] outline-none bg-white indent-[10px]"
                      ref={input_file}
                      id="input_file"
                      name="input_file"
                      type="file"
                      placeholder="Attach any file"
                    />
                    <b className="pl-[5px]">Attach any file</b>
                  </span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-x-0 md:gap-x-2">
                  <textarea
                    className="w-full md:w-full h-[50px] pt-[10px] pl-[10px] shadow-md border-none rounded-[5px] outline-none bg-white indent-[0px]"
                    ref={input_message}
                    id="input_message"
                    name="input_message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-x-0 md:gap-x-2">
                  <input
                    className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white indent-[10px]"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
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
              >
                <div className="relative w-[200px] md:w-[350px] h-[100px]">
                  <Image
                    className="w-full h-full object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                    alt="https://www.youtube.com/@chitranjan_gupta"
                    fill
                  />
                </div>
              </Link>
              <Link
                className="no-underline"
                href="https://www.github.com/chitranjan-gupta"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-row items-center justify-between gap-x-2">
                  <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[100px]">
                    <Image
                      className="w-full h-full object-contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                      alt="https://github.com/chitranjan-gupta"
                      fill
                    />
                  </div>
                  <div className="relative w-[150px] h-[50px] md:w-[230px] md:h-[100px]">
                    <Image
                      className="w-full h-full object-contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/2560px-GitHub_logo_2013.svg.png"
                      alt="https://github.com/chitranjan-gupta"
                      fill
                    />
                  </div>
                </div>
              </Link>
              <Link
                className="no-underline"
                href="https://www.linkedin.com/in/chitranjan-gupta"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative w-[200px] h-[50px] md:w-[350px] md:h-[100px]">
                  <Image
                    className="w-full h-full object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/2560px-LinkedIn_2021.svg.png"
                    alt="chitranjan-gupta"
                    fill
                  />
                </div>
              </Link>
              <Link
                className="no-underline"
                href="https://www.x.com/chitranjan___"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-row items-center justify-center gap-x-2">
                  <div className="relative w-[150px] h-[50px] md:w-[230px] md:h-[100px]">
                    <Image
                      className="w-full h-full object-contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Twitter_logo.svg/2560px-Twitter_logo.svg.png"
                      alt="chitranjan___"
                      fill
                    />
                  </div>
                  <div className="relative w-[50px] md:w-[70px] h-[30px] md:h-[100px]">
                    <Image
                      className="w-full h-full object-contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/2267px-X_logo_2023.svg.png"
                      alt="chitranjan___"
                      fill
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center w-full">
              <img
                src="https://komarev.com/ghpvc/?username=chitranjan-gupta&label=Profile%20views&color=0e75b6&style=flat"
                alt="chitranjan-gupta"
              />
            </div>
            <div>
              <div className="text-center w-full">
                <div className="text-center flex flex-col md:flex-row items-center justify-center">
                  <span>Copyright 2024. Chitranjan Kumar Gupta.</span>
                  <span>All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
