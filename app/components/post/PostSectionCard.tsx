import Link from "next/link";

type Props = {
  post: Meta;
};

export const PostSectionCard = ({ post: { id, title } }: Props) => {
  return (
    <Link
      href={`/${id}`}
      className="group relative flex transition-transform duration-300 ease-in-out hover:scale-[1.02]"
      aria-label={title}
    >
      <article className="transition-padding m-0.5 flex w-full flex-col space-y-4 rounded-md bg-zinc-100 p-4 pl-8 shadow-lg duration-300 ease-in-out hover:shadow-xl   dark:bg-zinc-800">
        <div className="flex flex-col space-y-2 pr-4">
          <h2 className=" text-balance text-zinc-800 group-hover:text-accent dark:text-zinc-50">
            {title}
          </h2>
        </div>
      </article>
      <div className="transition-[width, height] group-hover:h-100% absolute inset-0 z-20 my-auto h-[calc(100%_-_0.25rem)] w-1 rounded-l bg-accent duration-300 ease-in-out group-hover:w-[6px]" />
    </Link>
  );
};
