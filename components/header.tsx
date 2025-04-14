"use client";

import { usePathname, useRouter } from "next/navigation";
import ColorButton from "@/components/color-button";
import { scrollToSection } from "@/utils";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  function handleClick(sectionId: string, offset: number) {
    if (pathname === "/") {
      scrollToSection(sectionId, offset);
    } else {
      router.push(`/#${sectionId}`);
    }
  }
  return (
    <header className="w-full h-[110px] md:h-[50px] shadow-md p-[10px] block sticky top-0 z-[100] bg-[#FF6F61] dark:bg-[#007BFF]">
      <nav className="w-full h-full flex flex-col md:flex-row justify-between">
        <div className="flex flex-row items-center justify-start md:justify-center text-[25px] flex-wrap">
          <div id="menu">
            <svg
              id="bar"
              className="block w-[24px] h-[24px] fill-[#5f6368] dark:fill-[#E0E0E0]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              data-g="bar"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
            <svg
              id="close"
              className="hidden w-[24px] h-[24px] fill-[#5f6368]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              data-g="close"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
          <span className="h-[30px] flex font-[900] flex-row justify-center items-center pt-2 text-[#333333] dark:text-[#E0E0E0] rounded-[5px]">
            Chitranjan Gupta
          </span>
          <ColorButton className="ml-2" />
        </div>
        <div className="head-list flex flex-row justify-start md:justify-end mr-0 md:mr-[30px]">
          <ul className="nav-list flex flex-row flex-wrap list-none dark:text-[#E0E0E0]">
            <li className="mr-[10px]">
              <button onClick={() => handleClick("home", 100)}>Home</button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("about", 100)}>About</button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("education", 100)}>
                Education
              </button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("blogs", 100)}>Blogs</button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("portfolio", 100)}>
                Portfolio
              </button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("projects", 100)}>
                Projects
              </button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("certificates", 100)}>
                Certificates
              </button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("githubstats", 100)}>
                Github Stats
              </button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("solutions", 100)}>
                Solutions
              </button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("contact", 100)}>
                Contact
              </button>
            </li>

            <li className="mr-[10px]">
              <button onClick={() => handleClick("connect", 100)}>
                Connect
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
