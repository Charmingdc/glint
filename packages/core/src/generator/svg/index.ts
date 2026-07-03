import { generateBg } from "./background";
import { generateText } from "./text";

import type { SvgBuilderOptions, SVGString } from "../../types";

export const buildSvg = ({
 derivedInitials,
 size,
 // palette,
 //  angleDirection,
 rounded,
 font
 // noise,
 // glass
}: SvgBuilderOptions): SVGString => {
 const svg = `
   <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    ${generateBg({ size, rounded })}
    
    ${derivedInitials ? generateText({ size, text: derivedInitials, fontFamily: font }) : ""}
   </svg>
  `.trim();

 return svg;
};
