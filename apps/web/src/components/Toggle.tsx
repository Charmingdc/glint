export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex-1 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${
        checked
          ? "border-white/20 bg-foreground/10 text-foreground"
          : "border-white/6 text-foreground/30 hover:text-foreground/50"
      }`}
    >
      {label}
    </button>
  );
}
