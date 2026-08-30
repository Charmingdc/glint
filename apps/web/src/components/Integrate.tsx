import { useState } from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { fade } from "../lib/motion";

const COMMANDS = [
  { tag: "core", command: "npm i @glintjs/core" },
  { tag: "react", command: "npm i @glintjs/react" },
  { tag: "api", command: "GET /api/avatar" },
];

function CommandRow({
  tag,
  command,
  index,
}: {
  tag: string;
  command: string;
  index: number;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard is unavailable (e.g. insecure context); ignore.
    }
  }

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="show"
      variants={fade}
      className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-card px-4 py-3 transition-colors hover:border-white/20"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="shrink-0 rounded-md bg-foreground/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground/70">
          {tag}
        </span>
        <code className="truncate font-mono text-sm text-foreground/80">
          {command}
        </code>
      </div>
      <button
        onClick={copy}
        aria-label={copied ? "Copied" : `Copy ${command}`}
        className="shrink-0 text-foreground/40 transition-colors hover:text-foreground"
      >
        <HugeiconsIcon
          icon={copied ? Tick02Icon : Copy01Icon}
          size={16}
          color="currentColor"
          strokeWidth={1.5}
        />
      </button>
    </motion.div>
  );
}

export function Integrate() {
  return (
    <main className="w-full max-w-3xl flex flex-col items-center text-center px-8 py-16">
      <motion.h2
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
      >
        Integrate
      </motion.h2>

      <motion.p
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-3 max-w-md text-base font-light text-foreground/60"
      >
        Drop Glint into any project in seconds.
      </motion.p>

      <div className="mt-8 flex w-full max-w-md flex-col gap-3">
        {COMMANDS.map((c, i) => (
          <CommandRow
            key={c.command}
            tag={c.tag}
            command={c.command}
            index={i + 3}
          />
        ))}
      </div>
    </main>
  );
}
