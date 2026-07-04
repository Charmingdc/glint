import { hashSeed } from "./hash";
import { getInitials } from "./initials";
import { choosePalette } from "./palette";
import { buildSvg } from "./svg/index";

import type { AvatarOptions } from "../types";

export const generateAvatar = ({
  seed,
  name,
  size = 128,
  rounded = false,
  font = "Inter",
  noise = true,
  blur = true,
}: AvatarOptions) => {
  if (!seed.trim()) {
    throw new Error("Please provide a non-empty seed.");
  }

  const primaryHash = hashSeed(seed);
  const secondaryHash = hashSeed(seed + "-secondary");

  const derivedInitials = name?.trim() ? getInitials(name) : undefined;

  const palette = choosePalette(primaryHash);

  const svg: string = buildSvg({
    primaryHash,
    secondaryHash,
    derivedInitials,
    size,
    palette,
    rounded,
    font,
    noise,
    blur,
  });

  return svg;
};
