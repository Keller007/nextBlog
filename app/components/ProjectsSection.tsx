export function ProjectsSection() {
  return (
    <section className="relative space-y-2 flex flex-col text-zinc-900 dark:text-zinc-50">
      <h2 className="inline-flex items-center justify-between border-b text-xl font-semibold dark:border-zinc-700 sm:text-2xl">
        Projects{" "}
        <a
          href="https://github.com/Keller007"
          target="_blank"
          rel="noopener"
          className="hover:text-accent/80 cursor-pointer text-base text-accent no-underline hover:underline"
        >
          GitHub
        </a>
      </h2>

      <a
        href="https://github.com/Keller007"
        target="_blank"
        rel="noopener"
        className="hover:text-accent/80 text-base font-semibold text-accent no-underline hover:underline"
      >
        Project A
      </a>
      <a
        href="https://github.com/Keller007"
        target="_blank"
        rel="noopener"
        className="hover:text-accent/80 text-base font-semibold text-accent no-underline hover:underline"
      >
        Project B
      </a>
    </section>
  );
}
