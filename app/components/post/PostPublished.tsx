import getFormattedDate from "@/lib/hooks/getFormattedDate";

export const PostPublished = ({ publishedDate }: { publishedDate: string }) => {
  return (
    <div className="text-xs text-zinc-600 dark:text-zinc-300">
      <span>Published </span>
      <span className="inline-block text-zinc-500 dark:text-zinc-400">
        {getFormattedDate(publishedDate)}
      </span>
    </div>
  );
};
