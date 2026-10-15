import type { StructuredTextPropTypes } from "react-datocms";
import { datoRequest, entryDetailFields, entrySummaryFields, type EntrySummary, type ResponsiveImage } from "./datocms";

export type Collection = "post" | "product";

export type EntryDetail = EntrySummary & {
  author?: { name: string | null; picture: { responsiveImage: ResponsiveImage } | null } | null;
  _seoMetaTags: { attributes: Record<string, string> | null; content: string | null; tag: string }[];
  content: StructuredTextPropTypes<ImageBlock>["data"];
};

export type ImageBlock = { __typename: "ImageBlockRecord"; id: string; image: { responsiveImage: ResponsiveImage } };

const config = {
  post: { all: "allPosts", one: "post", withAuthor: true },
  product: { all: "allProducts", one: "product", withAuthor: false },
} as const;

export async function getEntries(collection: Collection): Promise<EntrySummary[]> {
  const { all, withAuthor } = config[collection];
  const data = await datoRequest<Record<string, EntrySummary[]>>(`
    query {
      entries: ${all}(first: 100, orderBy: date_DESC) { ${entrySummaryFields(withAuthor)} }
    }
  `);
  return data.entries;
}

export async function getEntry(collection: Collection, slug: string): Promise<EntryDetail | null> {
  const { one, withAuthor } = config[collection];
  const data = await datoRequest<{ entry: EntryDetail | null }>(
    `
    query Entry($slug: String) {
      entry: ${one}(filter: { slug: { eq: $slug } }) { ${entryDetailFields(withAuthor)} }
    }
  `,
    { slug }
  );
  return data.entry;
}

export async function getEntrySlugs(collection: Collection): Promise<{ slug: string; date: string }[]> {
  const { all } = config[collection];
  const data = await datoRequest<{ entries: { slug: string; date: string }[] }>(`
    query { entries: ${all}(first: 100, orderBy: date_DESC) { slug date } }
  `);
  return data.entries;
}
