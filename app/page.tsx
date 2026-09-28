import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Scanner from "@/components/Scanner";
import TokenCard from "@/components/TokenCard";
import { ACTIONS, INPUTS, PROBLEMS, SITE, STEPS } from "@/lib/site";

export default function Page() {
  return (
    <main id="top">
      <Nav />

      {/* HERO */}
      <section className="grid-lines relative border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
          <Reveal>
            <div className="mono flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.22em]">
              <span className="border border-red px-2 py-1 text-red">
                Idea stage
              </span>
              <span className="text-smoke">Token launched today</span>
              <span className="text-line">/</span>
              <span className="text-smoke">Analyzer not public yet</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-[clamp(2.5rem,9vw,6.5rem)] leading-[0.92] font-bold tracking-[-0.045em] uppercase">
              Every rugpull
              <br />
              has an{" "}
              <span className="stroke-red">address</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-smoke sm:text-lg">
              You already hold more evidence than you think. The dev wallet, the
              bundler wallet, the contract address of the coin you were sold.
              Kira takes exactly those three and returns the one thing you
              actually need: the address that took the money.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#how"
                className="mono bg-red px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-red-deep"
              >
                See how it works
              </a>
              <a
                href={SITE.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="mono border border-ink px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-paper"
              >
                Tooling on GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-16">
              <Scanner />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-red">
              01 — The problem
            </div>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal delay={80}>
              <h2 className="text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
                The launch is loud. The dev is anonymous. The money leaves in
                one block.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <ul className="space-y-4">
                {PROBLEMS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-l-2 border-red pl-4 text-sm leading-relaxed text-smoke sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INPUTS */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-red">
              02 — The input
            </div>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.08] font-bold tracking-[-0.03em]">
              Everything Kira needs is public information you already have.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {INPUTS.map((field, i) => (
              <Reveal key={field.key} delay={i * 80}>
                <div className="h-full bg-paper p-6 sm:p-8">
                  <div className="mono text-[10px] uppercase tracking-[0.2em] text-red">
                    {field.key}
                  </div>
                  <div className="mt-4 text-xl font-bold tracking-[-0.02em]">
                    {field.label}
                  </div>
                  <div className="mono mt-4 break-all border border-line px-3 py-2 text-[11px] text-smoke">
                    {field.example}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-smoke">
                    {field.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-red">
              03 — How it works
            </div>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
              One site. Four steps. No excuses left.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-px bg-line">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 60}>
                <div className="group bg-paper py-10 sm:py-14">
                  <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-12">
                    <div className="mono text-5xl leading-none font-bold tracking-[-0.04em] text-line transition-colors group-hover:text-red sm:text-6xl">
                      {step.index}
                    </div>
                    <div className="max-w-2xl">
                      <h3 className="text-2xl font-bold tracking-[-0.025em] sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-smoke">
                        {step.body}
                      </p>
                      {step.bullets && (
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {step.bullets.map((b) => (
                            <li
                              key={b}
                              className="mono border border-ink px-3 py-1.5 text-[10px] uppercase tracking-[0.15em]"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-red">
              04 — Then act
            </div>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
              The address is only useful if you do something with it.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {ACTIONS.map((action, i) => (
              <Reveal key={action.title} delay={i * 80}>
                <div className="group h-full bg-paper p-6 transition-colors hover:bg-red hover:text-white sm:p-8">
                  <div className="mono text-[10px] uppercase tracking-[0.2em] text-red transition-colors group-hover:text-white/70">
                    Option {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-[-0.02em]">
                    {action.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke transition-colors group-hover:text-white/85">
                    {action.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPOSE */}
      <section id="expose" className="bg-red text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              05 — The label
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-8 text-[clamp(3rem,13vw,10rem)] leading-[0.85] font-bold tracking-[-0.05em]">
              SCUM
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 grid gap-10 border-t border-white/25 pt-10 lg:grid-cols-2">
              <p className="text-xl leading-snug font-medium tracking-[-0.02em] sm:text-2xl">
                Some of them will never answer a report. Fine. Tag the wallet
                publicly and let the next person decide.
              </p>
              <p className="text-base leading-relaxed text-white/75">
                Bad people should be exposed, because exposure is the only
                pressure that always works. Every labelled address is one less
                person who thinks the crowd cannot see them. The goal is not
                revenge. The goal is fewer rugs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STAGE */}
      <section id="stage" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-red">
              06 — Where we are
            </div>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal delay={80}>
              <h2 className="text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
                The project is at the idea stage. The token is not the product.
                It is the fuel.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-smoke">
                The coin launched today exists to fund and to prove demand for
                the thing this page describes. Every part of the analyzer, the
                unwrapping guides and the report builder gets built in the open,
                in public, for anyone to use.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="space-y-px bg-line">
                {[
                  ["Now", "Idea stage, site online"],
                  ["Next", "Transaction graph engine"],
                  ["Then", "Proxy and mixer unwrapping"],
                  ["Open", "Every tool, public repo"],
                ].map(([when, what]) => (
                  <div
                    key={when}
                    className="flex items-baseline justify-between gap-6 bg-paper px-5 py-4"
                  >
                    <span className="mono w-14 shrink-0 text-[10px] uppercase tracking-[0.2em] text-red">
                      {when}
                    </span>
                    <span className="text-right text-sm font-medium sm:text-base">
                      {what}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COIN */}
      <section id="coin" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-red">
              07 — The coin
            </div>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.08] font-bold tracking-[-0.03em]">
              The project is at the idea stage. If the coin runs, the build goes
              fast.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-smoke">
              Kira is a plan with a funding source, not a finished product. The
              coin launched today is what turns the transaction graph engine,
              the proxy unwrapping guides and the report builder from a roadmap
              into a working site — and every holder pushes the same thing
              forward.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 max-w-2xl">
              <TokenCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* LINKS */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-red">
              08 — Follow the build
            </div>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.08] font-bold tracking-[-0.03em]">
              The tools for this service are developed in public.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            <Reveal delay={80}>
              <a
                href={SITE.links.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="mono flex h-full flex-col justify-between gap-10 bg-paper p-8 transition-colors hover:bg-ink hover:text-paper"
              >
                <span className="text-[10px] uppercase tracking-[0.22em] text-red">
                  Twitter
                </span>
                <span className="flex items-end justify-between text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                  @DeanBlunn
                  <span className="text-red">→</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={160}>
              <a
                href={SITE.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="mono flex h-full flex-col justify-between gap-10 bg-paper p-8 transition-colors hover:bg-ink hover:text-paper"
              >
                <span className="text-[10px] uppercase tracking-[0.22em] text-red">
                  GitHub
                </span>
                <span className="flex items-end justify-between text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                  nanautee
                  <span className="text-red">→</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mono text-3xl font-bold tracking-[-0.03em]">
                {SITE.name}
                <span className="text-red">.</span>
              </div>
              <div className="mono mt-3 text-[10px] uppercase tracking-[0.2em] text-paper/50">
                Idea stage · not financial advice · {SITE.version}
              </div>
            </div>
            <div className="flex gap-6">
              <a
                href={SITE.links.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="mono text-[11px] uppercase tracking-[0.18em] text-paper/60 transition-colors hover:text-red"
              >
                Twitter
              </a>
              <a
                href={SITE.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="mono text-[11px] uppercase tracking-[0.18em] text-paper/60 transition-colors hover:text-red"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
