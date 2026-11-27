"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// O tema vive na classe .dark do <html>; o script no layout aplica a escolha salva antes da página aparecer.
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
      className={`flex size-11 items-center justify-center rounded-lg text-(--heading) transition-opacity hover:opacity-80 ${className}`}
    >
      {dark ? <Sun className="size-6 text-(--accent-2)" /> : <Moon className="size-6" />}
    </button>
  );
}
