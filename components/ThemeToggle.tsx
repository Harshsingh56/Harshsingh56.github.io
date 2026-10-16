"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function readSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null; // localStorage can be blocked (private mode, strict settings)
  }
}

export default function ThemeToggle() {
  // The inline script in layout.tsx already applied the saved theme.
  // In development, React's Strict Mode can reset <html> attributes on remount,
  // so re-apply it here (a no-op in production).
  useLayoutEffect(() => {
    const saved = readSavedTheme();
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next: Theme = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the theme still switches, it just won't be remembered.
    }
  }

  // Which icon and label show is decided by CSS (.only-dark / .only-light),
  // so the server HTML and the client always match — no hydration errors.
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-foreground hover:bg-hover"
    >
      <Sun aria-hidden="true" className="only-dark h-4 w-4" strokeWidth={1.5} />
      <Moon aria-hidden="true" className="only-light h-4 w-4" strokeWidth={1.5} />
      <span className="only-dark sr-only">Switch to light theme</span>
      <span className="only-light sr-only">Switch to dark theme</span>
    </button>
  );
}
