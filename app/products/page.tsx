import type { Metadata } from "next";
import { CollectionIndex } from "@/components/site/cms";
import { productsCopy } from "@/lib/collections";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Products",
  description: productsCopy.lead,
  alternates: { canonical: productsCopy.basePath },
};

export default function ProductsPage() {
  return <CollectionIndex copy={productsCopy} />;
}
