"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * The theme lives on <html data-theme="...">, set pre-paint by the inline
 * script in app/layout.tsx. React just mirrors that external state here.
 */

function subscribe(onStoreChange: () => void) {
  // Re-render whenever data-theme changes (from this toggle or anywhere else)
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Follow system changes only while the user hasn't picked a theme
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  function onMediaChange(e: MediaQueryListEvent) {
    if (localStorage.getItem("theme")) return;
    document.documentElement.dataset.theme = e.matches ? "dark" : "light";
  }
  media.addEventListener("change", onMediaChange);

  return () => {
    observer.disconnect();
    media.removeEventListener("change", onMediaChange);
  };
}

function getSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

// Server placeholder — the pre-paint script sets the real value before hydration
function getServerSnapshot() {
  return false;
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable (private mode) — theme still applies for the session
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 items-center justify-center text-gray-400 transition-colors duration-200 hover:text-gray-800"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
