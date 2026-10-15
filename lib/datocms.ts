const ENDPOINT = "https://graphql.datocms.com/";

/** Seconds before a cached page is rebuilt with fresh content from DatoCMS. */
export const CMS_REVALIDATE = 60;

export async function datoRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const token = process.env.DATOCMS_API_TOKEN;
  if (!token) throw new Error("DATOCMS_API_TOKEN is not set");

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Exclude-Invalid": "true",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: CMS_REVALIDATE, tags: ["datocms"] },
  });

  const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (!res.ok || json.errors) {
    throw new Error(`DatoCMS request failed: ${json.errors?.map((e) => e.message).join("; ") ?? res.statusText}`);
  }
  return json.data as T;
}

/* ---------- Shared fragments and types ---------- */

// The site publishes English content only.
export const LOCALE_ARGS = "locale: en";

const responsiveImage = (args: string) => `
  responsiveImage(imgixParams: ${args}) {
    src srcSet sizes width height alt title base64
  }`;

export type ResponsiveImage = {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
  alt: string | null;
  title: string | null;
  base64: string | null;
};

export type Tag = { tag: string; slug: string };

export type EntrySummary = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string | null;
  coverImage: { responsiveImage: ResponsiveImage } | null;
  tags: Tag[];
  author?: { name: string | null } | null;
};

const baseFields = (coverParams: string) => `
  id
  title(${LOCALE_ARGS})
  slug
  date
  excerpt
  coverImage { ${responsiveImage(coverParams)} }
  tags { tag slug }
`;

export const entrySummaryFields = (withAuthor: boolean) => `
  ${baseFields("{ w: 1200, h: 675, fit: crop, auto: format }")}
  ${withAuthor ? "author { name }" : ""}
`;

export const entryDetailFields = (withAuthor: boolean) => `
  ${baseFields("{ w: 1800, h: 1013, fit: crop, auto: format }")}
  ${withAuthor ? `author { name picture { ${responsiveImage("{ w: 96, h: 96, fit: crop, auto: format }")} } }` : ""}
  _seoMetaTags(${LOCALE_ARGS}) { attributes content tag }
  content(${LOCALE_ARGS}) {
    value
    blocks {
      __typename
      ... on ImageBlockRecord {
        id
        image { ${responsiveImage("{ w: 1600, auto: format }")} }
      }
    }
  }
`;

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
