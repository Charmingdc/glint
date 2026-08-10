import type { SectionId } from "../App";

const NAV: { group: string; items: { label: string; id: SectionId }[] }[] = [
  {
    group: "Getting Started",
    items: [
      { label: "Introduction", id: "introduction" },
      { label: "Installation", id: "installation" },
      { label: "Quick Start", id: "quick-start" },
    ],
  },
  {
    group: "Core SDK",
    items: [
      { label: "Overview", id: "core-overview" },
      { label: "API Reference", id: "core-api" },
      { label: "Avatar Options", id: "core-options" },
      { label: "SVG Output", id: "core-svg" },
      { label: "PNG Output", id: "core-png" },
    ],
  },
  {
    group: "React SDK",
    items: [
      { label: "Overview", id: "react-overview" },
      { label: "Installation", id: "react-installation" },
      { label: "GlintAvatar", id: "react-component" },
      { label: "API Reference", id: "react-api" },
    ],
  },
  {
    group: "HTTP API",
    items: [
      { label: "Overview", id: "http-overview" },
      { label: "Avatar Endpoint", id: "http-endpoint" },
      { label: "Parameters", id: "http-parameters" },
      { label: "Response Formats", id: "http-response" },
    ],
  },
  {
    group: "Guides",
    items: [
      { label: "Using Initials", id: "guide-initials" },
      { label: "Blur and Noise", id: "guide-blur-noise" },
      { label: "Shapes", id: "guide-shapes" },
      { label: "Deterministic Seeds", id: "guide-seeds" },
    ],
  },
];

function SidebarNav({
  active,
  onSelect,
}: {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}) {
  return (
    <nav className="flex flex-col gap-5 px-4 py-6">
      {NAV.map(({ group, items }) => (
        <div key={group}>
          <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-widest text-foreground/30">
            {group}
          </p>
          <div className="flex flex-col gap-0.5">
            {items.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => onSelect(id)}
                className={`w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                  active === id
                    ? "bg-white/[0.07] text-foreground font-medium"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function Sidebar({
  active,
  onSelect,
  open,
}: {
  active: SectionId;
  onSelect: (id: SectionId) => void;
  open: boolean;
}) {
  if (!open) return null;

  return (
    <>
      <aside className="fixed top-14 left-0 bottom-0 z-20 w-64 border-r border-white/[0.07] bg-background overflow-y-auto">
        <SidebarNav active={active} onSelect={onSelect} />
      </aside>
      <div className="hidden md:block w-64 shrink-0" />
    </>
  );
}
