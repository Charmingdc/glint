import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, StarIcon, NpmIcon } from "@hugeicons/core-free-icons";
import { fade } from "../lib/motion";
import { AvatarConfigurator } from "./AvatarConfigurator";

const GITHUB_URL = "https://github.com/Charmingdc/glint";
const GITHUB_API = "https://api.github.com/repos/Charmingdc/glint";
const NPM_URL = "https://www.npmjs.com/package/@glintjs/core";

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
    <header className="w-full flex items-center justify-between px-8.5 py-5 border-b border-white/6">
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

      <div className="flex items-center gap-2">
        <motion.a
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          href={NPM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-card px-3 py-2 text-xs font-medium text-foreground/60 transition-colors hover:text-foreground hover:border-white/20"
        >
          <HugeiconsIcon icon={NpmIcon} size={16} color="currentColor" /> Npm
        </motion.a>

        <motion.a
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-card px-3 py-2 text-xs font-medium text-foreground/60 transition-colors hover:text-foreground hover:border-white/20"
        >
          <HugeiconsIcon icon={Github01Icon} size={16} color="currentColor" />
          <span className="hidden md:inline">Open source</span>

          {stars !== null && (
            <div className="flex items-center gap-2">
              <span className="w-px h-3 bg-white/10" />
              <HugeiconsIcon
                icon={StarIcon}
                size={11}
                color="currentColor"
                strokeWidth={1.5}
              />

              {formatStars(stars)}
            </div>
          )}
        </motion.a>
      </div>
    </header>
  );
}
