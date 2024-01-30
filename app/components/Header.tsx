"use client";
import clsx from "clsx";

import { NavItem } from "@/app/components/NavItems";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { useEventListener } from "@/lib/hooks/useEventListener";
function Header() {
  return (
    <div
      className={clsx(
        "flex items-center justify-between px-4  text-zinc-700  transition-[padding,background-color] duration-300 ease-in-out dark:text-zinc-50 sm:px-8",
        useEventListener() ? "bg-slate-200/10 py-4" : "bg-transparent  py-8 ",
      )}
    >
      <nav className="flex h-8 flex-row items-center space-x-2 text-sm sm:space-x-4 sm:text-base">
        <NavItem href="/">
          AndreyPirogov{"  "}
          <span className="hidden sm:inline">{`_aka='Keller007'`}</span>
        </NavItem>

        <NavItem href="/posts">Posts</NavItem>
      </nav>
      <div className="ml-auto flex h-8 flex-row items-center justify-end space-x-1">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
// backdrop-blur