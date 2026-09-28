"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "#problem", label: "Problem" },
  { href: "#how", label: "How it works" },
  { href: "#expose", label: "Expose" },
  { href: "#stage", label: "Stage" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="mono text-lg font-bold tracking-[-0.02em]">
            {SITE.name}
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-red">
            {SITE.version}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono text-[11px] uppercase tracking-[0.18em] text-smoke transition-colors hover:text-red"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE.links.twitter}
            target="_blank"
            rel="noreferrer noopener"
            className="mono border border-ink px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-paper"
          >
            Follow
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="mono flex h-8 w-8 items-center justify-center border border-line text-[11px] md:hidden"
        >
          {open ? "X" : "≡"}
        </button>
      </div>

      {open && (
        <div className="border-t border-line md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mono block border-b border-line px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-smoke"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE.links.twitter}
            target="_blank"
            rel="noreferrer noopener"
            className="mono block px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-red"
          >
            Twitter →
          </a>
        </div>
      )}
    </header>
  );
}
