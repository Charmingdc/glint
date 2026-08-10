import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, SidebarLeft01Icon } from "@hugeicons/core-free-icons";

export function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header className="w-screen sticky top-0 z-30 border-b border-white/[0.07] bg-background/90 backdrop-blur-md">
      <div className="w-full mx-auto flex h-14 items-center justify-between px-6 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            aria-label="Toggle sidebar"
            className="flex items-center justify-center rounded-md p-1.5 text-foreground/50 hover:text-foreground transition-colors"
          >
            <HugeiconsIcon
              icon={SidebarLeft01Icon}
              size={18}
              color="currentColor"
              strokeWidth={1.5}
            />
          </button>
          <a
            href="https://glint-dev.vercel.app"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            glint
          </a>
          <span className="hidden sm:block text-xs text-foreground/30">
            docs
          </span>
        </div>
        <a
          href="https://github.com/Charmingdc/glint"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 inline-flex items-center gap-1.5 text-xs text-foreground/50 transition-colors hover:text-foreground"
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
