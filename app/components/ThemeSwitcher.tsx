"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isActive = theme === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {isActive ? (
        <FaSun
          className="h-8 w-8 text-zinc-800 hover:text-accent"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <FaMoon
          className="h-6 w-6 text-zinc-400 hover:text-accent "
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
};

export default ThemeSwitch;
