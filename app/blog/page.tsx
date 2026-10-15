import type { Metadata } from "next";
import { CollectionIndex } from "@/components/site/cms";
import { blogCopy } from "@/lib/collections";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: blogCopy.lead,
  alternates: { canonical: blogCopy.basePath },
};

export default function BlogPage() {
  return <CollectionIndex copy={blogCopy} />;
}
