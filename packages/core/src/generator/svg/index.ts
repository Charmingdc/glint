import { generateBg } from "./background";
import { generateText } from "./text";
import { buildDefs } from "./defs/index";

import type { SvgBuilderOptions, SVGString } from "../../types";

export const buildSvg = ({
 primaryHash,
 secondaryHash,
 derivedInitials,
 size,
 palette,
 rounded,
 font,
 noise,
 glass
}: SvgBuilderOptions): SVGString => {
 const { gradientId, defSvgString } = buildDefs({
  baseDefId: `${primaryHash}-${secondaryHash}`,
  primaryHash,
  secondaryHash,
  size,
  palette,
  noise,
  glass
 });

 const svg = `
   <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    ${defSvgString}
    
    ${generateBg({ size, rounded, gradientId })}
    
    ${derivedInitials ? generateText({ size, text: derivedInitials, fontFamily: font }) : ""}
   </svg>
  `.trim();

 return svg;
};
