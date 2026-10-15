import Link from "next/link";
import { notFound } from "next/navigation";
import { SRCImage, StructuredText } from "react-datocms";
import { cn } from "@/lib/utils";
import { formatDate, type EntrySummary } from "@/lib/datocms";
import { getEntries, getEntry, type Collection, type ImageBlock } from "@/lib/cms-content";
import { ButtonLink, CtaPanel, PageHero, shell } from "./ui";

export type CollectionCopy = {
  collection: Collection;
  basePath: string;
  title: string;
  lead: string;
  label: string;
  emptyTitle: string;
  emptyBody: string;
  moreTitle: string;
};

function Tags({ tags, className }: { tags: EntrySummary["tags"]; className?: string }) {
  if (!tags.length) return null;
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((t) => (
        <li key={t.slug} className="rounded-full bg-(--c-mist) px-3 py-1 text-sm text-(--c-ink)/80">
          {t.tag}
        </li>
      ))}
    </ul>
  );
}

function Meta({ entry }: { entry: EntrySummary }) {
  return (
    <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-(--c-muted)">
      <time dateTime={entry.date}>{formatDate(entry.date)}</time>
      {entry.author?.name && <span>{entry.author.name}</span>}
    </p>
  );
}

function EntryCard({ entry, basePath, featured }: { entry: EntrySummary; basePath: string; featured?: boolean }) {
  return (
    <article className={cn("group relative", featured && "grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14")}>
      <div className="overflow-hidden rounded-3xl bg-(--c-mist)">
        {entry.coverImage ? (
          <SRCImage
            data={entry.coverImage.responsiveImage}
            sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"}
            imgClassName="aspect-video w-full object-cover transition-transform duration-700 ease-(--ease-out-arm) group-hover:scale-[1.03]"
            priority={featured}
          />
        ) : (
          <div className="aspect-video" />
        )}
      </div>
      <div className={cn(!featured && "mt-5")}>
        <Meta entry={entry} />
        <h2
          className={cn(
            "f-display mt-2 font-semibold text-balance",
            featured ? "text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.02]" : "text-2xl leading-[1.12]"
          )}
        >
          <Link href={`${basePath}/${entry.slug}`} className="after:absolute after:inset-0 group-hover:text-(--c-red)">
            {entry.title}
          </Link>
        </h2>
        {entry.excerpt && (
          <p className={cn("mt-3 leading-relaxed text-(--c-muted)", featured ? "text-lg" : "line-clamp-3")}>{entry.excerpt}</p>
        )}
        <Tags tags={entry.tags} className="mt-4" />
      </div>
    </article>
  );
}

export async function CollectionIndex({ copy }: { copy: CollectionCopy }) {
  const entries = await getEntries(copy.collection);
  const [first, ...rest] = entries;

  return (
    <main>
      <PageHero title={copy.title} lead={copy.lead} />

      <section className={cn(shell, "pb-24 md:pb-32")}>
        {!first ? (
          <div className="flex flex-col items-start gap-6 rounded-[2rem] bg-(--c-mist) p-8 md:p-14">
            <h2 className="f-display text-3xl font-semibold">{copy.emptyTitle}</h2>
            <p className="max-w-xl text-lg leading-relaxed text-(--c-muted)">{copy.emptyBody}</p>
            <ButtonLink href="/contact" tone="ink">
              Contact us
            </ButtonLink>
          </div>
        ) : (
          <>
            <div className="border-t border-(--c-ink)/10 pt-10">
              <EntryCard entry={first} basePath={copy.basePath} featured />
            </div>
            {rest.length > 0 && (
              <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-(--c-ink)/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((entry) => (
                  <EntryCard key={entry.id} entry={entry} basePath={copy.basePath} />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <CtaPanel />
    </main>
  );
}

export async function CollectionEntry({ copy, slug }: { copy: CollectionCopy; slug: string }) {
  const [entry, all] = await Promise.all([getEntry(copy.collection, slug), getEntries(copy.collection)]);
  if (!entry) notFound();
  const more = all.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <main>
      <nav aria-label="Breadcrumb" className={cn(shell, "pt-10 text-sm text-(--c-muted)")}>
        <ol className="flex items-center gap-2">
          <li>
            <Link href={copy.basePath} className="hover:text-(--c-ink)">
              {copy.label}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="line-clamp-1 text-(--c-ink)">
            {entry.title}
          </li>
        </ol>
      </nav>

      <header className={cn(shell, "pb-10 pt-12 md:pt-16")}>
        <h1 className="f-display max-w-5xl text-[clamp(2.4rem,5.6vw,5rem)] font-semibold leading-[0.95] text-balance">
          {entry.title}
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          {entry.author?.name && (
            <div className="flex items-center gap-3">
              {entry.author.picture && (
                <SRCImage
                  data={entry.author.picture.responsiveImage}
                  imgClassName="h-10 w-10 rounded-full object-cover"
                  pictureClassName="shrink-0"
                />
              )}
              <span className="font-medium">{entry.author.name}</span>
            </div>
          )}
          <time dateTime={entry.date} className="text-(--c-muted)">
            {formatDate(entry.date)}
          </time>
          <Tags tags={entry.tags} />
        </div>
      </header>

      {entry.coverImage && (
        <div className={shell}>
          <SRCImage
            data={entry.coverImage.responsiveImage}
            sizes="(min-width: 1440px) 1344px, 100vw"
            priority
            imgClassName="aspect-video w-full rounded-[2rem] object-cover"
          />
        </div>
      )}

      <div className={cn(shell, "py-16 md:py-24")}>
        <article className="article mx-auto max-w-3xl">
          {entry.excerpt && <p className="lead">{entry.excerpt}</p>}
          <StructuredText<ImageBlock>
            data={entry.content}
            renderBlock={({ record }) =>
              record.__typename === "ImageBlockRecord" ? (
                <figure>
                  <SRCImage data={record.image.responsiveImage} sizes="(min-width: 768px) 768px, 100vw" />
                  {record.image.responsiveImage.title && <figcaption>{record.image.responsiveImage.title}</figcaption>}
                </figure>
              ) : null
            }
          />
        </article>
      </div>

      {more.length > 0 && (
        <section className={cn(shell, "border-t border-(--c-ink)/10 py-16 md:py-24")}>
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="f-display text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-none">{copy.moreTitle}</h2>
            <Link href={copy.basePath} className="shrink-0 font-medium underline decoration-(--c-red) decoration-2 underline-offset-4">
              See all
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((e) => (
              <EntryCard key={e.id} entry={e} basePath={copy.basePath} />
            ))}
          </div>
        </section>
      )}

      <CtaPanel />
    </main>
  );
}
