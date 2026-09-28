"use client";

import { useEffect, useRef, useState } from "react";
import { INPUTS } from "@/lib/site";

type Line = { text: string; tone?: "in" | "dim" | "out" | "hit" };

const SCRIPT: Line[] = [
  { text: "kira scan --input", tone: "dim" },
  ...INPUTS.map(
    (f) => ({ text: `  ${f.key.padEnd(15)} ${f.example}`, tone: "in" as const }),
  ),
  { text: "resolving mint metadata ...", tone: "dim" },
  { text: "rebuilding transaction graph ... 1.4M edges", tone: "dim" },
  { text: "ranking destinations by outflow ...", tone: "dim" },
  { text: "mixer hops detected: 3", tone: "dim" },
  { text: "› RAGPULLER  Bn7x…Kp3Z", tone: "hit" },
  { text: "  absorbed      71.4% of supply moved", tone: "out" },
  { text: "  layer         probable proxy wallet", tone: "out" },
  { text: "  next          unwrap trail + 3 actions →", tone: "out" },
];

const TONE: Record<string, string> = {
  in: "text-ink",
  dim: "text-smoke",
  out: "text-ink",
  hit: "text-red font-bold",
};

export default function Scanner() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !played.current) {
          played.current = true;
          let i = 0;
          const tick = () => {
            i += 1;
            setCount(i);
            if (i < SCRIPT.length) {
              window.setTimeout(tick, i === 1 ? 380 : 460);
            } else {
              window.setTimeout(() => {
                i = 0;
                setCount(0);
                window.setTimeout(tick, 3200);
              }, 4200);
            }
          };
          window.setTimeout(tick, 500);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scan relative overflow-hidden border border-ink bg-paper"
    >
      <div className="flex items-center justify-between border-b border-ink bg-ink px-4 py-2">
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
          analyzer — session
        </span>
        <span className="mono text-[10px] tracking-[0.22em] text-red">
          LIVE
        </span>
      </div>

      <div className="min-h-[300px] p-4 sm:min-h-[320px] sm:p-5">
        {SCRIPT.slice(0, count).map((line, i) => (
          <div
            key={`${line.text}-${i}`}
            className={`mono text-[11px] leading-[1.9] sm:text-xs ${
              TONE[line.tone ?? "in"]
            }`}
          >
            {line.text}
            {i === count - 1 && <span className="caret">▌</span>}
          </div>
        ))}
        {count === 0 && (
          <div className="mono text-[11px] leading-[1.9] text-smoke sm:text-xs">
            $ <span className="caret">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}
