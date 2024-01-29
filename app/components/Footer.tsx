import Link from "next/link";

import { socials } from "../../lib/const";

import { Copyright } from "./Copyright";

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-4">
      <div className="max-xs:px-16 flex flex-row flex-wrap justify-center gap-4">
        {socials.map(({ href, label, icon }) => (
          <Link
            prefetch={false}
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {icon({
              className:
                "h-8 w-8 text-zinc-900 hover:text-accent dark:text-zinc-100 dark:hover:text-accent",
            })}
          </Link>
        ))}
      </div>

      <div className="flex h-6 flex-row items-center justify-center space-x-1 text-zinc-600 dark:text-zinc-300">
        <Copyright className="h-3 w-3" />
        <span className="text-xs">
          {new Date().getFullYear()} · Andrey Pirogov
        </span>
      </div>
    </div>
  );
}
