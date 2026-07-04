import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, StarIcon } from "@hugeicons/core-free-icons";
import { fade } from "../lib/motion";
import { AvatarConfigurator } from "./AvatarConfigurator";

const GITHUB_URL = "https://github.com/Charmingdc/glint";
const GITHUB_API = "https://api.github.com/repos/Charmingdc/glint";

function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function Navbar() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(GITHUB_API)
      .then((r) => r.json())
      .then((data: { stargazers_count?: number }) => {
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/6">
      <motion.div
        custom={0}
        initial="hidden"
        animate="show"
        variants={fade}
        className="flex items-center gap-2"
      >
        <AvatarConfigurator />
        <span className="text-sm font-semibold tracking-tight">glint</span>
      </motion.div>

      <motion.a
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-card px-3 py-1 text-xs font-medium text-foreground/60 transition-colors hover:text-foreground hover:border-white/20"
      >
        <HugeiconsIcon
          icon={Github01Icon}
          size={13}
          color="currentColor"
          strokeWidth={1.5}
        />
        Open source
        {stars !== null && (
          <>
            <span className="w-px h-3 bg-white/10" />
            <HugeiconsIcon
              icon={StarIcon}
              size={11}
              color="currentColor"
              strokeWidth={1.5}
            />
            {formatStars(stars)}
          </>
        )}
      </motion.a>
    </header>
  );
}
