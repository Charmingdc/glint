import type { BuildTextFragmentOptions } from "../../types";

type SVGTextString = string;

export const generateText = ({
  size,
  text,
  fontFamily,
}: BuildTextFragmentOptions): SVGTextString => {
  const center = size / 2;
  const fontSize = Math.round(size * 0.4);

  return `<text x="${center}" y="${center}" font-weight="bold" font-family="${fontFamily}" font-size="${fontSize}" fill="white" text-anchor="middle" dominant-baseline="central">${text}</text>`;
};
