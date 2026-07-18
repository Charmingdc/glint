import type { SectionId } from "../App";

const NAV: { label: string; id: SectionId }[] = [
  { label: "Introduction", id: "introduction" },
  { label: "Installation", id: "installation" },
  { label: "Usage", id: "usage" },
  { label: "API Reference", id: "api" },
  { label: "Initials", id: "initials" },
  { label: "HTTP API", id: "http-api" },
  { label: "TypeScript", id: "typescript" },
];

export function Sidebar({
  active,
  onSelect,
}: {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}) {
  return (
    <aside className="hidden w-52 shrink-0 py-10 pr-6 md:block">
      <nav className="sticky top-20 flex flex-col gap-0.5">
        <p className="mb-2 px-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
          Getting started
        </p>
        {NAV.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
              active === id
                ? "bg-white/[0.07] text-foreground"
                : "text-foreground/50 hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
