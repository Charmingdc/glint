import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon } from "@hugeicons/core-free-icons";
import { fade } from "../lib/motion";

export function Hero() {
  return (
    <main className="w-full max-w-3xl flex flex-col items-start p-8">
      <motion.h1
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="w-full max-w-md text-xl font-semibold text-foreground/80 mt-2"
      >
        Generate unique, deterministic avatars from any seed string.
      </motion.h1>

      <motion.p
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="w-full max-w-md text-base font-light text-foreground/60 mt-5"
      >
        Glint is a developer-first toolkit for creating unique, deterministic
        gradient avatars through packages and an HTTP API.
      </motion.p>

      <motion.a
        href="https://glint-docs.vercel.app"
        custom={3}
        initial="hidden"
        animate="show"
        variants={fade}
        className="inline-flex w-auto items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto mt-6"
      >
        <HugeiconsIcon
          icon={BookOpen01Icon}
          size={16}
          color="currentColor"
          strokeWidth={1.5}
        />
        View Docs
      </motion.a>
    </main>
  );
}
