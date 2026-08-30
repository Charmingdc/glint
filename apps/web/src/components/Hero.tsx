import { useMemo } from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon } from "@hugeicons/core-free-icons";
import { generateAvatar } from "@glintjs/core";
import { fade } from "../lib/motion";
import { useAvatarConfig } from "../lib/avatar-config";

function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function AvatarO({ seed }: { seed: string }) {
  const src = useMemo(
    () =>
      svgToDataUri(
        generateAvatar({ seed: seed || "glint", size: 128, rounded: true }),
      ),
    [seed],
  );

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="inline-block select-none cursor-pointer transition-transform duration-500 ease-out hover:rotate-180"
      style={{
        width: "0.78em",
        height: "0.78em",
        verticalAlign: "-0.08em",
        borderRadius: "50%",
      }}
    />
  );
}

export function Hero() {
  const { config } = useAvatarConfig();
  const seed = config.seed;

  return (
    <main className="w-full max-w-3xl flex flex-col items-center text-center px-8 pt-20 pb-24">
      <motion.a
        href="https://glint-docs.vercel.app"
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card px-3 py-1.5 text-xs font-medium text-foreground/60 transition-colors hover:text-foreground hover:border-white/20"
      >
        <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground/80">
          New
        </span>
        React component now available
      </motion.a>

      <motion.h1
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-6 max-w-2xl text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]"
      >
        Generate unique, deterministic avatars fr<AvatarO seed={seed} />m any
        seed string.
      </motion.h1>

      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-6 max-w-md text-base font-light text-foreground/60"
      >
        Glint is a developer-first toolkit for creating unique, deterministic
        gradient avatars through packages and an HTTP API.
      </motion.p>

      <motion.a
        href="https://glint-docs.vercel.app"
        custom={4}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
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
