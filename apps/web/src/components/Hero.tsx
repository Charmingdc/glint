import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon, PlayCircleIcon } from "@hugeicons/core-free-icons";
import { fade } from "../lib/motion";

export function Hero() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <motion.h1
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
      >
        Beautiful avatars,
        <br />
        zero effort.
      </motion.h1>

      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-5 max-w-md text-base text-foreground/50 sm:text-lg"
      >
        Generate consistent, deterministic avatars from any seed. Drop it into
        any project in seconds.
      </motion.p>

      <motion.div
        custom={4}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        <a
          href="/docs"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
        >
          <HugeiconsIcon
            icon={BookOpen01Icon}
            size={16}
            color="currentColor"
            strokeWidth={1.5}
          />
          Docs
        </a>
        <a
          href="/playground"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl  border border-white/10 bg-card px-5 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground hover:border-white/20 sm:w-auto"
        >
          <HugeiconsIcon
            icon={PlayCircleIcon}
            size={16}
            color="currentColor"
            strokeWidth={1.5}
          />
          Visit playground
        </a>
      </motion.div>
    </main>
  );
}
