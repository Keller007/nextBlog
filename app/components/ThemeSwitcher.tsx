"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

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
          className="hover:text-accent h-8 w-8 text-zinc-800"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <FaMoon onClick={() => setTheme("light")} />
      )}
    </>
  );
};

export default ThemeSwitch;
