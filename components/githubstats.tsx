"use client";

export default function GithubStats() {
  return (
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
              loading="lazy"
              className="content-center items-center w-auto h-auto"
              src="https://github-readme-stats.vercel.app/api?username=chitranjan-gupta&show_icons=true"
              alt="chitranjan-gupta"
              width={500}
              height={500}
            />
            <img
              loading="lazy"
              className="content-center items-center w-auto h-auto"
              src="https://streak-stats.demolab.com/?user=chitranjan-gupta"
              alt="chitranjan-gupta"
              width={500}
              height={180}
            />
          </div>
          <img
            loading="lazy"
            className="w-auto h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=chitranjan-gupta&layout=pie"
            alt="chitranjan-gupta"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
