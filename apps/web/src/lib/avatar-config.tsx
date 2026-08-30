import { createContext, useContext, useState, type ReactNode } from "react";
import type { AvatarOptions } from "@glintjs/core";

export type Config = Required<
  Pick<
    AvatarOptions,
    "seed" | "name" | "size" | "rounded" | "font" | "noise" | "blur"
  >
>;

export const DEFAULT_CONFIG: Config = {
  seed: "glint",
  name: "",
  size: 64,
  rounded: true,
  font: "Inter",
  noise: true,
  blur: true,
};

type AvatarConfigContextValue = {
  config: Config;
  set: <K extends keyof Config>(key: K, value: Config[K]) => void;
};

const AvatarConfigContext = createContext<AvatarConfigContextValue | null>(null);

export function AvatarConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<Config>(DEFAULT_CONFIG);

  function set<K extends keyof Config>(key: K, value: Config[K]) {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <AvatarConfigContext.Provider value={{ config, set }}>
      {children}
    </AvatarConfigContext.Provider>
  );
}

export function useAvatarConfig() {
  const ctx = useContext(AvatarConfigContext);
  if (!ctx) {
    throw new Error("useAvatarConfig must be used within AvatarConfigProvider");
  }
  return ctx;
}
