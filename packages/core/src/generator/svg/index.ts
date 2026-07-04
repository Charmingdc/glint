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
  blur,
}: SvgBuilderOptions): SVGString => {
  const { ids, defSvgString } = buildDefs({
    baseDefId: `${primaryHash}-${secondaryHash}`,
    primaryHash,
    secondaryHash,
    size,
    rounded,
    palette,
    noise,
    blur,
  });

  const svg = `
   <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    ${defSvgString}
    
    ${generateBg({ size, rounded, ids })}
    
    ${derivedInitials ? generateText({ size, text: derivedInitials, fontFamily: font }) : ""}
   </svg>
  `.trim();

  return svg;
};
