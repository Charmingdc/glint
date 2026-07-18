import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon } from "@hugeicons/core-free-icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <a
            href="https://glint-dev.vercel.app"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            glint
          </a>
          <span className="text-xs text-foreground/30 hidden sm:block">
            docs
          </span>
        </div>
        <a
          href="https://github.com/Charmingdc/glint"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-foreground/50 transition-colors hover:text-foreground"
        >
          <HugeiconsIcon
            icon={Github01Icon}
            size={14}
            color="currentColor"
            strokeWidth={1.5}
          />
          GitHub
        </a>
      </div>
    </header>
  );
}
