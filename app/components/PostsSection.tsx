import Link from "next/link";

import { getPostsMeta } from "@/lib/hooks/getPosts";

import { PostSectionCard } from "./post/PostSectionCard";

export async function PostsSection() {
  const posts = await getPostsMeta();
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="flex flex-col space-y-2 text-zinc-900 dark:text-zinc-50">
      <h2 className="inline-flex items-center justify-between border-b text-xl font-semibold dark:border-zinc-700 sm:text-2xl">
        Latest Posts{" "}
        <Link
          href="/posts"
          className="hover:text-accent/80 cursor-pointer text-base text-accent no-underline hover:underline"
        >
          All
        </Link>
      </h2>

      {latestPosts.map((post) => (
        <PostSectionCard key={post.id} post={post} />
      ))}
    </section>
  );
}
