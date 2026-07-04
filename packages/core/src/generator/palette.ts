import { GRADIENT_PALETTES } from "../constants/gradients";

import type { PaletteGenResponse } from "../types";

export const choosePalette = (hashedSeed: number): PaletteGenResponse => {
 const hashedSeedLength = String(hashedSeed).length;

 const paletteIndex: number = hashedSeed % hashedSeedLength;
 const angleDirection: number = Math.floor(
  (hashedSeed / hashedSeedLength ** 2) % 360
 );

 const palette = GRADIENT_PALETTES[paletteIndex];

 return palette;
};
