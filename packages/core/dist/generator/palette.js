import { GRADIENT_PALETTES } from "../constants/gradients";
export const choosePalette = (hashedSeed) => {
    const hashedSeedLength = String(hashedSeed).length;
    const paletteIndex = hashedSeed % hashedSeedLength;
    const palette = GRADIENT_PALETTES[paletteIndex];
    return palette;
};
//# sourceMappingURL=palette.js.map