import { generateBg } from "./background";
import { generateText } from "./text";
import { buildDefs } from "./defs/index";

import type { SvgBuilderOptions, SVGString } from "../../types";

export const buildSvg = ({
 hashedSeed,
 derivedInitials,
 size,
 palette,
 angleDirection,
 rounded,
 font,
 noise,
 glass
}: SvgBuilderOptions): SVGString => {
 const { gradientId, defSvgString } = buildDefs({
  baseDefId: `def-${hashedSeed}`,
  size,
  palette,
  angleDirection,
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
