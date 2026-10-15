import type { CollectionCopy } from "@/components/site/cms";

export const blogCopy: CollectionCopy = {
  collection: "post",
  basePath: "/blog",
  label: "Blog",
  title: "Blog.",
  lead: "Notes from our team on web development, design and the technology behind the products we build.",
  emptyTitle: "No posts yet.",
  emptyBody: "New articles appear here as soon as they are published.",
  moreTitle: "More from the blog",
};

export const productsCopy: CollectionCopy = {
  collection: "product",
  basePath: "/products",
  label: "Products",
  title: "Products.",
  lead: "Ready-made products from The Octopus Labs, built on the same craft as our bespoke work.",
  emptyTitle: "Products are on their way.",
  emptyBody: "We are preparing our first products. In the meantime, tell us what you need and we will build it for you.",
  moreTitle: "More products",
};
