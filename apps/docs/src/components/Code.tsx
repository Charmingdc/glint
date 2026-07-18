export function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-white/[0.07] bg-[#111] p-4 text-sm leading-relaxed text-foreground/80">
      <code>{children.trim()}</code>
    </pre>
  );
}

export function InlineCode({ children }: { children: string }) {
  return (
    <code className="rounded-md bg-white/[0.07] px-1.5 py-0.5 font-mono text-[0.8rem] text-foreground/80">
      {children}
    </code>
  );
}
