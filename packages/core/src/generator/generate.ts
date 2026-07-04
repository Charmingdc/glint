import { hashSeed } from "./hash";
import { getInitials } from "./initials";
import { choosePalette } from "./palette";
import { buildSvg } from "./svg/index";

import type { AvatarOptions, PaletteGenResponse } from "../types";

export const generateAvatar = ({
 seed,
 initialsValue,
 size = 128,
 rounded = false,
 font = "Inter",
 noise = true,
 glass = true
}: AvatarOptions) => {
 if (!seed.trim()) {
  throw new Error("Please provide a non-empty seed.");
  return;
 }

 const primaryHash = hashSeed(seed);
 const secondaryHash = hashSeed(seed + "-secondary");

 const derivedInitials = initialsValue?.trim()
  ? getInitials(initialsValue)
  : undefined;

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
  glass
 });

 return svg;
};

if (import.meta.main) {
 const options: AvatarOptions = {
  seed: "Charming dc",
  initialsValue: "Charmingdc",
  size: 256,
  rounded: true,
  font: "Geist"
 };

 console.log(generateAvatar(options));
}
