import { hashSeed } from "./hash";
import { getInitials } from "./initials";

import { buildSvg } from "./svg/index";

import type { AvatarOptions, SVGString } from "../types";

export const generateAvatar = ({
 seed,
 initialsValue,
 size = 128,
 rounded = false,
 font = "Inter",
 noise = true,
 glass = true
}: AvatarOptions): SVGString => {
 if (!seed.trim()) {
  throw new Error("Please provide a non-empty seed.");
 }

 const hashedSeed = hashSeed(seed);

 const derivedInitials = initialsValue?.trim()
  ? getInitials(initialsValue)
  : undefined;

 const svg: string = buildSvg({
  derivedInitials,
  size,
  rounded,
  font,
  noise,
  glass
 });

 return svg;
};

if (import.meta.main) {
 const options: AvatarOptions = {
  seed: "CBA",
  initialsValue: "Adebayo Muis Ayodeji"
 };

 console.log(generateAvatar(options));
}
