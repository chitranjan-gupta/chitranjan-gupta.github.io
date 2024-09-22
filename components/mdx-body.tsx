import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkToc from "remark-toc";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";
import { MDXComponents } from "@/components/mdx-components";
import { Pre, RawCode, highlight } from "codehike/code";

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "slack-ochin");
  return <Pre code={highlighted} style={highlighted.style} />;
}

const chConfig = {
  components: { code: "Code" },
};

export function MDXBody({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [
            // Adds support for GitHub Flavored Markdown
            remarkGfm,
            // Makes emojis more accessible
            remarkA11yEmoji,
            // generates a table of contents based on headings
            remarkToc,
            [remarkCodeHike, chConfig],
          ],
          // These work together to add IDs and linkify headings
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          recmaPlugins: [[recmaCodeHike, chConfig]],
        },
      }}
      components={{ Code, ...MDXComponents }}
    />
  );
}
