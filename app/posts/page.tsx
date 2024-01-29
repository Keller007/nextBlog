import { getPostsMeta } from "@/lib/hooks/getPosts";

import { PostCard } from "../components/post/PostCard";

async function AllPosts() {
  const posts = await getPostsMeta();
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <section className="flex h-full flex-col space-y-4 px-8 pb-8">
      <div className="flex flex-col space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
export default AllPosts;
