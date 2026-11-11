import { isValidElement, Children } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkToc from "remark-toc";
import { Pre, highlight } from "codehike/code";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

const remarkUnwrapAnchors = () => {
  return (tree) => {
    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];
      if (node.type === 'paragraph' && node.children?.length === 1 && node.children[0].type === 'link') {
        // Replace the paragraph node directly with the link node in tree.children
        tree.children[i] = node.children[0];
      }
    }
  };
};

async function PreBlock(props) {
  const child = props.children;
  const codeProps = child?.props || {};
  const className = codeProps.className || "";
  const lang = className.replace(/language-/, "") || "txt";
  const value = typeof codeProps.children === "string" ? codeProps.children : String(codeProps.children || "");

  let highlighted = null;
  try {
    highlighted = await highlight({ value: value.trimEnd(), lang, meta: "" }, "github-dark");
  } catch (err) {
    highlighted = null;
  }

  if (highlighted) {
    return (
      <div className="my-6 rounded-xl overflow-hidden border border-[var(--border)] shadow-md">
        <Pre code={highlighted} className="!m-0 !p-4 !bg-[#0d1117] text-sm overflow-x-auto" />
      </div>
    );
  }

  return (
    <pre className="my-6 p-4 rounded-xl bg-[#0d1117] text-white border border-[var(--border)] overflow-x-auto text-sm font-mono">
      <code>{value}</code>
    </pre>
  );
}

function InlineCode({ className, children, ...props }) {
  if (className?.includes("language-")) {
    return <code className={className} {...props}>{children}</code>;
  }
  return (
    <code
      className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[var(--accent-1)] text-[0.88em] font-mono border border-black/5 dark:border-white/10"
      {...props}
    >
      {children}
    </code>
  );
}

function A({ children, ...props }) {
  if (
    props.href?.match(
      /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})$/
    )
  ) {
    const videoId = props.href.split("v=")[1];
    return (
      <div className="my-6 overflow-hidden rounded-xl">
        <YouTubeEmbed
          videoid={videoId}
          height={400}
          params="controls=0"
        />
      </div>
    );
  } else {
    return (
      <Link {...props} href={props.href || ""} className={`${props.className || ''} break-words text-[var(--accent-1)] hover:underline`}>
        {children}
      </Link>
    );
  }
}

function Img(props) {
  if (
    typeof props.src === 'string' &&
    props.src?.match(
      /^https?:\/\/(?:i\.)?img\.youtube\.com\/vi\/([a-zA-Z0-9_-]{11})\/([0-9]+)\.(jpg|jpeg|png)$/
    )
  ) {
    return null;
  } else {
    return (
      <Image
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={800}
        height={450}
        {...props}
        alt={props.alt || ""}
        className="rounded-xl my-4 border border-[var(--border)]"
      />
    );
  }
}

function P({ children, ...props }) {
  // If paragraph contains a YouTube link/embed or block-level element, render a div to prevent hydration errors (<p> cannot contain <div>)
  const childrenArray = Children.toArray(children);
  const containsYouTubeOrBlock = childrenArray.some((child) => {
    if (isValidElement(child)) {
      if (child.props?.href && typeof child.props.href === 'string') {
        return child.props.href.match(/^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})$/);
      }
    }
    return false;
  });

  if (containsYouTubeOrBlock) {
    return <div {...props}>{children}</div>;
  }
  return <p {...props}>{children}</p>;
}

export function MDXBody({ children }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            remarkA11yEmoji,
            remarkToc,
            remarkUnwrapAnchors,
          ],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'wrap',
                properties: {
                  className: ['subheading-anchor'],
                  ariaLabel: 'Link to section',
                },
              },
            ],
          ],
        },
      }}
      components={{ pre: PreBlock, code: InlineCode, a: A, img: Img, p: P }}
    />
  );
}

export default MDXBody;
