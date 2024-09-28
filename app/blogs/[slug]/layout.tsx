import type { ReactNode } from "react";
import { MDXLayout } from "@/components/mdx-layout";

export default function Layout({ children }: { children: ReactNode }) {
  return <MDXLayout>{children}</MDXLayout>
}
