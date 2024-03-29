import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4 px-8 pt-8 text-zinc-900 dark:text-zinc-50">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-2xl font-bold text-accent drop-shadow-sm sm:text-3xl md:text-5xl">
          404
        </h1>
      </div>
      <div>
        <h3 className="text-center text-xl">
          This is not the page you&apos;re looking for,{" "}
          <Link href="/" className="hover:text-accent/80 text-accent">
            move along
          </Link>
        </h3>
      </div>
    </div>
  );
}
