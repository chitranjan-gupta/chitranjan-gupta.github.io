import { ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkToc from "remark-toc";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";
import { Pre, RawCode, highlight } from "codehike/code";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image, { ImageProps } from "next/image";
import { Node, Parent } from 'unist';

interface LinkNode extends Node {
  type: 'link';
  url: string;
  title: string;
  children: Node[];
}

const remarkUnwrapAnchors = () => {
  return (tree: Parent) => {
    tree.children.forEach((node) => {
      if (node.type === 'paragraph' && (node as Parent).children.length === 1 && (node as Parent).children[0].type === 'link') {
        const linkNode = (node as Parent).children[0] as LinkNode;
        node.type = 'link';
        (node as any).url = linkNode.url;
        (node as any).title = linkNode.title;
        (node as any).children = linkNode.children;
      }
    });
  };
};


async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-from-css");
  return <Pre code={highlighted} style={highlighted.style} />;
}

interface AProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children?: ReactNode; // Make children optional
}

function A({ children, ...props }: AProps) {
  if (
    props.href?.match(
      /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})$/
    )
  ) {
    return (
      <div>
        <YouTubeEmbed
          videoid={props.href.split("v=")[1]}
          height={400}
          params="controls=0"
        />
      </div>
    );
  } else {
    return (
      <Link {...props} href={props.href || ""} className={`${props.className} break-words`}>
        {children}
      </Link>
    );
  }
}

interface ImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

function Img(props: ImgProps) {
  if (
    typeof props.src === 'string' &&
    props.src?.match(
      /^https?:\/\/(?:i\.)?img\.youtube\.com\/vi\/([a-zA-Z0-9_-]{11})\/([0-9]+)\.(jpg|jpeg|png)$/
    )
  ) {
    return <></>;
  } else {
    return (
      <Image
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
        {...(props as ImageProps)}
        alt={props.alt || ""}
      />
    );
  }
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
            remarkUnwrapAnchors
          ],
          // These work together to add IDs and linkify headings
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          recmaPlugins: [[recmaCodeHike, chConfig]],
        },
      }}
      components={{ Code, a: A, img: Img }}
    />
  );
}
