import type { SvgBuilderOptions, SVGString } from "../../types";

export const buildSvg = ({
 derivedInitials,
 size,
 rounded,
 font,
 noise,
 glass
}: SvgBuilderOptions): SVGString => {
 const svg = `
   <svg width="${size}" height="${size}"></svg>
  `;

 return svg;
};
