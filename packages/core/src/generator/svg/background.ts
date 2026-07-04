import type { BuildBgFramentOptions } from "../../types";

type SVGBgString = string;

export const generateBg = ({
 size,
 rounded,
 gradientId
}: BuildBgFramentOptions): SVGBgString => {
 const radius = rounded ? size / 2 : 0;

 return `<rect width="100%" height="100%" rx="${radius}" ry="${radius}" fill="url(#${gradientId})"/>`.trim();
};
