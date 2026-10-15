import type { Metadata } from "next";
import { toNextMetadata } from "react-datocms";
import { CollectionEntry } from "@/components/site/cms";
import { getEntry, getEntrySlugs } from "@/lib/cms-content";
import { blogCopy } from "@/lib/collections";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const entries = await getEntrySlugs(blogCopy.collection);
  return entries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getEntry(blogCopy.collection, slug);
  if (!entry) return {};
  return {
    ...(toNextMetadata(entry._seoMetaTags) as Metadata),
    alternates: { canonical: `${blogCopy.basePath}/${slug}` },
  };
}

export default async function BlogEntryPage({ params }: Props) {
  const { slug } = await params;
  return <CollectionEntry copy={blogCopy} slug={slug} />;
}
