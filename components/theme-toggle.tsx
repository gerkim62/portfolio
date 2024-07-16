"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={
        resolvedTheme === "dark"
          ? () => setTheme("light")
          : () => setTheme("dark")
      }
      className="p-2 rounded-full text-gray-700 hover:text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200
      dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-700
      "
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
