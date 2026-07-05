import { hashSeed } from "./hash";
import { getInitials } from "./initials";
import { choosePalette } from "./palette";
import { buildSvg } from "./svg/index";
export const generateAvatar = ({ seed, name, size = 128, rounded = false, font = "Inter", noise = true, blur = true, }) => {
    if (!seed.trim()) {
        throw new Error("Please provide a non-empty seed.");
    }
    const primaryHash = hashSeed(seed);
    const secondaryHash = hashSeed(seed + "-secondary");
    const derivedInitials = name?.trim() ? getInitials(name) : undefined;
    const palette = choosePalette(primaryHash);
    const svg = buildSvg({
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
//# sourceMappingURL=generate.js.map