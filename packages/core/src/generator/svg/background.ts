import type { BuildBgFramentOptions } from "../../types";

type SVGBgString = string;

export const generateBg = ({
 size,
 rounded,
 ids
}: BuildBgFramentOptions): SVGBgString => {
 const {
  gradientIds: [gradient1Id, gradient2Id, gradient3Id],
  filterId,
  clipPathId
 } = ids;

 const radius = rounded ? size / 2 : 0;

 const rects = `
  <rect
    width="100%"
    height="100%"
    rx="${radius}"
    ry="${radius}"
    fill="url(#${gradient1Id})"
  />

  <rect
    width="100%"
    height="100%"
    rx="${radius}"
    ry="${radius}"
    fill="url(#${gradient2Id})"
    opacity="0.7"
  />

  <rect
    width="100%"
    height="100%"
    rx="${radius}"
    ry="${radius}"
    fill="url(#${gradient3Id})"
    opacity="0.5"
  />
`.trim();

 if (filterId) {
  return `
      <g clip-path="url(#${clipPathId})" filter="url(#${filterId})">
        ${rects}
      </g>
    `.trim();
 }

 return rects;
};
