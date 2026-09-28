export const SITE = {
  name: "KIRA",
  version: "v0.1.0",
  tagline: "Every rugpull has an address.",
  links: {
    twitter: "https://x.com/DeanBlunn",
    github: "https://github.com/nanautee",
  },
  token: {
    ticker: "KIRA",
    ca: "37CyTRN7T8VEhmC9rKp7M2wxfYzSAjtWPuEPo8Xwpump",
    network: "Solana",
  },
} as const;

export type InputField = {
  key: string;
  label: string;
  example: string;
  note: string;
};

export const INPUTS: InputField[] = [
  {
    key: "dev_wallet",
    label: "Dev wallet",
    example: "7xKX…9fQa",
    note: "The address that deployed the token. Public, you already know it.",
  },
  {
    key: "bundler_wallet",
    label: "Bundler wallet",
    example: "Bq4R…e81M",
    note: "The wallet that swept the bundle. Often hidden in plain sight.",
  },
  {
    key: "token_ca",
    label: "Token contract (CA)",
    example: "EXACT…CA",
    note: "The mint address of the coin you were sold.",
  },
];

export type Step = {
  index: string;
  title: string;
  body: string;
  bullets?: string[];
};

export const STEPS: Step[] = [
  {
    index: "01",
    title: "Feed what you already have",
    body: "No wallet connection. No signature. No seed, ever. Three public strings that any newcomer already has, pasted into the analyzer.",
    bullets: ["Dev wallet", "Bundler wallet", "Token contract address"],
  },
  {
    index: "02",
    title: "The analyzer finds the exit",
    body: "Kira rebuilds the transaction graph around the mint, ranks every destination by outflow, and returns the single address that absorbed the largest share of the coin. That address is the ragpuller.",
  },
  {
    index: "03",
    title: "Burner or real? Peel it back",
    body: "Most of the time the returned address is a prop, not the operator. Kira ships the walkthrough: how to recognize mixer transactions, how to follow transfers layer by layer, and how to land on the wallet that actually controls the money.",
    bullets: ["Spot mixer transactions", "Trace layer by layer", "Reach the controlling wallet"],
  },
  {
    index: "04",
    title: "Do something with it",
    body: "Evidence is worthless if it sits in a chat. Kira packages the proof and hands you the moves.",
    bullets: [
      "File a fraud report with the full evidence pack",
      "Submit to the exchange hosting the wallet",
      "Tag it SCUM so the next person knows who took their money",
    ],
  },
];

export type Action = {
  title: string;
  body: string;
};

export const ACTIONS: Action[] = [
  {
    title: "Report the scheme",
    body: "A structured evidence pack: transaction graph, funding path, timestamps, destination addresses. Ready to hand to a platform, a moderator or an authority.",
  },
  {
    title: "Report the wallet",
    body: "The wallet is almost always open on some exchange. One submission, with the trail attached, puts pressure on the account that is holding it.",
  },
  {
    title: "Tag it SCUM",
    body: "No response, no refund, no justice. The last resort and often the loudest one: a public label, so the next person buys somewhere else.",
  },
];

export const PROBLEMS: string[] = [
  "The launch is loud, the dev is anonymous, and the money moves in one block.",
  "By the time the chart bends, the funds are already four hops away.",
  "Proxies and mixers turn one address into a dead end.",
  "Platforms need a report, not a screenshot of a group chat.",
];
