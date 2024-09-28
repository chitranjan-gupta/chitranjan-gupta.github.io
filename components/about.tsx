"use client";

import Image from "next/image";
import {
  c,
  cplusplus,
  css,
  docker,
  electron,
  electronlogo,
  expo,
  expressjs,
  git,
  github,
  githublogo,
  html,
  java,
  javascript,
  laravel,
  laravellogo,
  mongodb,
  mysql,
  netlify,
  nextjs,
  nodejs,
  php,
  postman,
  python,
  react,
  reactnative,
  sanity,
  sanitylogo,
  solidity,
  sql,
  tailwindcss,
  typescript,
  vercel,
  visualstudiocode,
  visualstudiocodelogo,
  wordpress,
} from "@/assets";

export default function About() {
  return (
    <section
      id="about"
      className="container about w-full flex flex-row relative mt-10"
    >
      <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
      <div className="detailBox w-full md:w-2/3 h-full p-5 md:p-0">
        <div className="boxTitle mb-[20px] text-center underline">
          <h2 className="bungee-tint text-2xl font-black">About me</h2>
        </div>
        <div className="aboutmebox text-base dark:text-[#E0E0E0]">
          <span>
            Hi, I&apos;m Chitranjan Kumar Gupta, a creative and driven developer
            from India. With a passion for innovation and excellence, I bring a
            unique combination of skills and experience to the table. I&apos;ve
            always been fascinated by Software, and have spent years honing my
            skills in Software Development.
            <br />
          </span>
          <span>
            Looking Ahead I&apos;m excited to connect with like-minded
            individuals and explore new opportunities. Let&apos;s work together
            to create something amazing!
          </span>
          <div className="programBox flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-around md:justify-start md:gap-x-5 md:gap-y-5 md:p-0">
            <div>
              <b className="text-[20px] bungee-shade">Programming Languages:</b>
              <div className="flex flex-row flex-wrap mt-3 gap-y-[50px] gap-x-[50px] md:gap-x-[20px]">
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={html}
                      alt="html"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={css}
                      alt="css"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>

                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={php}
                      alt="php"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={cplusplus}
                      alt="cplusplus"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={c}
                      alt="c"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={python}
                      alt="python"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={javascript}
                      alt="javascript"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={typescript}
                      alt="typescipt"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={sql}
                      alt="sql"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </li>
                </ul>
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={solidity}
                      alt="solidity"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[40px] h-[40px]">
                    <Image
                      src={java}
                      alt="java"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <b className="text-[20px] bungee-shade">Libraries & Framework:</b>
              <div className="flex flex-row flex-wrap gap-y-[30px] gap-x-[30px] md:gap-x-[40px] mt-3">
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="flex flex-row gap-x-2">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={react}
                        alt="react"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-[80px] h-[40px]">
                      <Image
                        src={nextjs}
                        alt="nextjs"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={reactnative}
                      alt="react native"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={expo}
                      alt="expo"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="flex flex-row items-center gap-x-2">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={electronlogo}
                        alt="electron logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-[80px] h-[40px]">
                      <Image
                        src={electron}
                        alt="electron"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="flex flex-row items-center gap-x-2">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={laravellogo}
                        alt="laravel logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-[80px] h-[40px]">
                      <Image
                        src={laravel}
                        alt="laravel"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={expressjs}
                      alt="expressjs"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={tailwindcss}
                      alt="tailwindcss"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={nodejs}
                      alt="nodejs"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <b className="text-[20px] bungee-shade">Tools & Platforms:</b>
              <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[30px] mt-3">
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="flex flex-row items-center gap-x-1">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={visualstudiocodelogo}
                        alt="visual studio code logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-[80px] h-[40px]">
                      <Image
                        src={visualstudiocode}
                        alt="visualstudiocode"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={postman}
                      alt="postman"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={git}
                      alt="git"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="flex flex-row items-center gap-x-1">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={githublogo}
                        alt="github logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-[80px] h-[40px]">
                      <Image
                        src={github}
                        alt="github"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={netlify}
                      alt="netlify"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={vercel}
                      alt="vercel"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={docker}
                      alt="docker"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="flex flex-row items-center gap-x-1">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={sanitylogo}
                        alt="sanitylogo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-[80px] h-[40px]">
                      <Image
                        src={sanity}
                        alt="sanity"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={wordpress}
                      alt="wordpress"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <b className="text-[20px] bungee-shade">Databases:</b>
              <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[30px]">
                <ul className="flex flex-col flex-wrap gap-y-[30px]">
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={mysql}
                      alt="mysql"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                  <li className="relative w-[120px] h-[40px]">
                    <Image
                      src={mongodb}
                      alt="mongodb"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
