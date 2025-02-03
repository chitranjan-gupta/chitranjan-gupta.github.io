"use server";

import dynamic from "next/dynamic";
import getBlogs from "@/lib/get-blogs";

const Home = dynamic(() => import("@/components/home"));
const Sticky = dynamic(() => import("@/components/sticky"));
const Footer = dynamic(() => import("@/components/footer"));
const Certificates = dynamic(() => import("@/components/certificates"));
const Contact = dynamic(() => import("@/components/contact"));
const GithubStats = dynamic(() => import("@/components/githubstats"));
const Solutions = dynamic(() => import("@/components/solutions"));
const Projects = dynamic(() => import("@/components/projects"));
const Portfolio = dynamic(() => import("@/components/portfolio"));
const About = dynamic(() => import("@/components/about"));
const Blogs = dynamic(() => import("@/components/blogs"));
const Education = dynamic(() => import("@/components/education"));

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <>
      <main className="w-full h-full">
        <Sticky />

        <Home />

        <About />

        <Education />

        <Portfolio />

        <Projects />

        <Certificates />

        <GithubStats />

        <Solutions />

        <Blogs blogs={blogs} />

        <Contact />

        <Footer />
      </main>
    </>
  );
}
