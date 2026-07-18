import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon } from "@hugeicons/core-free-icons";
import { fade } from "../lib/motion";

export function Hero() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-8 py-24 text-center">
      <motion.h1
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
      >
        Deterministic SVG avatar generator
      </motion.h1>

      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-5 max-w-md text-base text-foreground/50 sm:text-lg"
      >
        Generate unique, deterministic avatars from any seed.
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
          className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
        >
          <HugeiconsIcon
            icon={BookOpen01Icon}
            size={16}
            color="currentColor"
            strokeWidth={1.5}
          />
          View Docs
        </a>
      </motion.div>
    </main>
  );
}
