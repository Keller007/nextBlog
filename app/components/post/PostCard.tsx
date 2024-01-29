import Link from "next/link";

import { PostPublished } from "./PostPublished";
import { PostTags } from "./PostTags";

type Props = {
  post: Meta;
};

export const PostCard = ({ post }: Props) => {
  const { id, title, date, tags, description } = post;

  return (
    <Link
      href={`/${id}`}
      className="group relative flex transition-transform duration-300 ease-in-out hover:scale-[1.02]"
      aria-label={title}
    >
      <article className="transition-padding m-0.5 flex w-full flex-col space-y-4 rounded-md bg-zinc-100 p-4 pl-8 shadow-lg duration-300 ease-in-out hover:shadow-xl group-hover:pl-12 dark:bg-zinc-800">
        <div className="flex flex-col space-y-2 pr-4">
          <h2 className="text-balance text-2xl font-bold text-zinc-800 dark:text-zinc-50 sm:text-3xl">
            {title}
          </h2>

          <p className="text-balance text-zinc-700 dark:text-zinc-200">
            {description}
          </p>

          <div className="flex flex-col justify-between  gap-2 md:flex-row md:items-center">
            <PostPublished publishedDate={date} />
            <PostTags tags={tags} />
          </div>
        </div>
      </article>
      <div className="transition-[width, height] absolute inset-0 z-20  my-auto h-[calc(100%_-_0.25rem)] w-3 rounded-l bg-accent duration-300 ease-in-out group-hover:h-[calc(80%_-_0.25rem)] group-hover:w-6" />
    </Link>
  );
};
