import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { generateAvatar } from "@glintjs/core";
import type { AvatarOptions } from "@glintjs/core";
import { ease } from "../lib/motion";
import { Field } from "./Field";
import { Toggle } from "./Toggle";

const FONTS = ["Inter", "Georgia", "monospace", "cursive"];

type Config = Required<
  Pick<
    AvatarOptions,
    "seed" | "name" | "size" | "rounded" | "font" | "noise" | "blur"
  >
>;

const DEFAULT_CONFIG: Config = {
  seed: "Glint",
  name: "",
  size: 64,
  rounded: true,
  font: "Inter",
  noise: true,
  blur: true,
};

function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export function AvatarConfigurator() {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<Config>(DEFAULT_CONFIG);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const avatarSrc = useMemo(() => {
    try {
      const svg = generateAvatar({
        seed: config.seed || "glint",
        name: config.name || undefined,
        size: config.size,
        rounded: config.rounded,
        font: config.font,
        noise: config.noise,
        blur: config.blur,
      });
      return svgToDataUri(svg);
    } catch {
      return svgToDataUri(
        generateAvatar({ seed: "glint", size: 64, rounded: true }),
      );
    }
  }, [config]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function set<K extends keyof Config>(key: K, value: Config[K]) {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }

  const PREVIEW_SIZE = Math.min(Math.max(config.size, 40), 96);
  const borderRadius = config.rounded ? "50%" : "8px";

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center overflow-hidden ring-1 ring-white/10 hover:ring-white/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        style={{ borderRadius }}
        aria-label="Configure avatar"
        aria-expanded={open}
      >
        <img
          src={avatarSrc}
          alt=""
          width={28}
          height={28}
          style={{ display: "block" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease }}
            className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-white/8 bg-card p-4 shadow-xl z-50"
          >
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/6">
              <img
                src={avatarSrc}
                alt="preview"
                width={PREVIEW_SIZE}
                height={PREVIEW_SIZE}
                style={{
                  borderRadius,
                  display: "block",
                  transition: "border-radius 0.15s, width 0.15s, height 0.15s",
                }}
                className="shrink-0"
              />
              <div>
                <p className="text-xs font-medium text-foreground">
                  Live preview
                </p>
                <p className="text-xs text-foreground/40 mt-0.5">
                  Changes apply instantly
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Field label="Seed">
                <input
                  type="text"
                  value={config.seed}
                  onChange={(e) => set("seed", e.target.value)}
                  className="input"
                  placeholder="glint"
                />
              </Field>

              <Field label="Name (initials)">
                <input
                  type="text"
                  value={config.name}
                  onChange={(e) => set("name", e.target.value)}
                  className="input"
                  placeholder="e.g. John Doe"
                />
              </Field>

              <Field label={`Size — ${config.size}px`}>
                <input
                  type="range"
                  min={32}
                  max={256}
                  step={8}
                  value={config.size}
                  onChange={(e) => set("size", Number(e.target.value))}
                  className="w-full accent-foreground"
                />
              </Field>

              <Field label="Font">
                <select
                  value={config.font}
                  onChange={(e) => set("font", e.target.value)}
                  className="input"
                >
                  {FONTS.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="flex gap-3 pt-1">
                <Toggle
                  label="Rounded"
                  checked={config.rounded}
                  onChange={(v) => set("rounded", v)}
                />
                <Toggle
                  label="Noise"
                  checked={config.noise}
                  onChange={(v) => set("noise", v)}
                />
                <Toggle
                  label="Blur"
                  checked={config.blur}
                  onChange={(v) => set("blur", v)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
