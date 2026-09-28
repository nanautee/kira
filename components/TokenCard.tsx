"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function TokenCard() {
  const [copied, setCopied] = useState(false);
  const ca = SITE.token.ca;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ca);
    } catch {
      /* clipboard blocked */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="border border-ink">
      <div className="flex items-center justify-between border-b border-ink bg-ink px-5 py-3">
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
          {SITE.token.network} · {SITE.token.ticker}
        </span>
        <span className="mono text-[10px] tracking-[0.22em] text-red">
          CONTRACT
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mono flex items-center gap-3">
          <code className="min-w-0 flex-1 truncate text-xs break-all text-ink sm:text-sm">
            {ca}
          </code>
          <button
            type="button"
            onClick={copy}
            className="mono shrink-0 border border-ink px-3 py-2 text-[10px] uppercase tracking-[0.15em] transition-colors hover:bg-red hover:border-red hover:text-white"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-smoke">
          The one thing that can never be faked. Copy it, check it before you
          buy, and run it through the analyzer above the moment the chart
          starts moving faster than you do.
        </p>

        <div className="mono mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-line">
          <span className="text-red">Do not trust a ticker</span>
          <span>Trust the address</span>
        </div>
      </div>
    </div>
  );
}
