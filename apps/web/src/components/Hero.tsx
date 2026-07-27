import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon } from "@hugeicons/core-free-icons";
import { fade } from "../lib/motion";

export function Hero() {
  return (
    <main className="w-full flex flex-col items-center justify-center pt-38 px-8 text-center">
      <motion.h1
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="max-w-2xl w-[80%] md:w-full text-[2.4rem] text-center font-semibold tracking-tight md:text-6xl"
      >
        Deterministic avatar generator
      </motion.h1>

      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-6 w-[80%] md:w-full max-w-md text-base text-foreground/50 sm:text-lg"
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
          href="https://glint-docs.vercel.app"
          className="inline-flex w-auto items-center justify-center gap-2 rounded-3xl bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
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
