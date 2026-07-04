import type { BuildTextFragmentOptions } from "../../types";

type SVGTextString = string;

export const generateText = ({
 size,
 text,
 fontFamily
}: BuildTextFragmentOptions): SVGTextString => {
 const center = size / 2;

 return `
 <text x="${center}" y="${center}" font-weight="bold" font-family="${fontFamily}" font-size="80" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
 `.trim();
};
