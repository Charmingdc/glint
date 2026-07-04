import type { BuildBgFramentOptions } from "../../types";

type SVGBgString = string;

export const generateBg = ({
 size,
 rounded,
 ids
}: BuildBgFramentOptions): SVGBgString => {
 const { gradientId, filterId, clipPathId } = ids;
 const radius = rounded ? size / 2 : 0;

 if (filterId) {
  return `
    <g clip-path="url(#${clipPathId})">
      <rect width="100%" height="100%" rx="${radius}" ry="${radius}" fill="url(#${gradientId})" filter="url(#${filterId})" />
    </g>
  `.trim();
 }

 return `
 <rect width="100%" height="100%" rx="${radius}" ry="${radius}" fill="url(#${gradientId})" />
 `.trim();
};
