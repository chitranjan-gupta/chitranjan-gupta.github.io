export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="w-full p-2 prose sm:prose-sm md:prose-lg lg:prose-xl prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
      {children}
    </article>
  );
}
