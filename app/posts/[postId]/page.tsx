import Link from "next/link";
import { notFound } from "next/navigation";

import getFormattedDate from "@/lib/hooks/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/hooks/getPosts";

import "highlight.js/styles/github-dark.css";

export const revalidate = 0;

type Props = {
  params: {
    postId: string;
  };
};

// export async function generateStaticParams() {
//   const posts = await getPostsMeta(); //deduped!

//   if (!posts) return [];

//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`posts/${postId}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <article className="prose prose-sm prose-slate  mx-auto px-4 dark:prose-invert md:prose-lg lg:prose-xl md:px-6">
      <h2 className="mb-4 mt-2 text-balance text-center text-3xl">
        {meta.title}
      </h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </article>
  );
}
