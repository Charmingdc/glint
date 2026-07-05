"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  generateAvatar: () => generateAvatar
});
module.exports = __toCommonJS(index_exports);

// src/generator/hash.ts
var hashSeed = (seed) => {
  if (seed.length === 0) {
    throw new Error("Seed must not be empty.");
  }
  let hash = 5381;
  for (const char of seed) {
    hash = (hash << 5) + char.charCodeAt(0) >>> 0;
  }
  return hash;
};

// src/generator/initials.ts
var getInitials = (value) => {
  if (!value.trim()) {
    throw new Error("Provide a valid value to get the initials of");
  }
  const words = value.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
};

// src/constants/gradients.ts
var GRADIENT_PALETTES = [
  // Ember — charcoal base, burnt sienna mid, warm amber highlight
  ["#2C1A0E", "#C4522A", "#F0A050"],
  // Cobalt Shift — deep navy, vivid royal blue, sky periwinkle
  ["#0D1B3E", "#1A52C4", "#6EA8F0"],
  // Verdigris — dark teal, muted copper-green, sage highlight
  ["#0E2C28", "#2A8C72", "#72C4A0"],
  // Editorial Pink — deep plum, vivid magenta, blush rose
  ["#2C0A1E", "#C42070", "#F07AAC"],
  // Studio Violet — dark indigo, saturated purple, soft lilac
  ["#16103A", "#5C30C4", "#A888F0"],
  // Warm Slate — dark charcoal, warm medium grey, warm off-white
  ["#1E1A14", "#6B5E4A", "#CEC0A8"],
  // Harvest — deep brown, rich ochre, golden straw
  ["#2C1A00", "#B87820", "#F0C860"],
  // Oxidised Copper — dark forest, mid olive, lime-sage lift
  ["#162010", "#4A7830", "#A0CC60"],
  // Flare — near-black warm, deep crimson, vivid coral-orange
  ["#200A00", "#A02010", "#F06030"],
  // Arctic — deep slate-blue, steel, clear ice-blue highlight
  ["#0E1E30", "#2E6080", "#70B8D8"],
  // Pomegranate — deep burgundy, vivid red, bright coral
  ["#280010", "#B0183A", "#F05060"],
  // Midnight Sage — deep forest, fern green, warm spring green
  ["#0E1E14", "#306848", "#70C090"],
  // Terracotta — dark earth, warm clay red, sand highlight
  ["#241008", "#A04828", "#E09860"],
  // Electric Cyan — very dark navy, vivid electric cyan, pale aqua
  ["#060E1E", "#0898C8", "#60D8F0"],
  // Dusty Rose — deep espresso, muted mauve, dusty blush
  ["#1E100E", "#8C4858", "#D89898"],
  // Synth — deep purple-black, hot violet, electric lavender
  ["#100820", "#7818C8", "#C070F0"],
  // Copper — dark mahogany, medium copper, warm peach glow
  ["#201008", "#A05828", "#E0A060"],
  // Meadow — deep olive, mid green, bright yellow-green
  ["#141E08", "#508020", "#A0D040"],
  // Deep Sea — very dark blue, vivid teal, bright sea-green
  ["#061018", "#0A7868", "#40C8A0"],
  // Graphite Rose — dark charcoal, medium rose-grey, warm pink highlight
  ["#1C1214", "#7A4858", "#D09898"]
];

// src/generator/palette.ts
var choosePalette = (hashedSeed) => {
  const hashedSeedLength = String(hashedSeed).length;
  const paletteIndex = hashedSeed % hashedSeedLength;
  const palette = GRADIENT_PALETTES[paletteIndex];
  return palette;
};

// src/generator/svg/background.ts
var generateBg = ({
  size,
  rounded,
  ids
}) => {
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

// src/generator/svg/text.ts
var generateText = ({
  size,
  text,
  fontFamily
}) => {
  const center = size / 2;
  return `
 <text x="${center}" y="${center}" font-weight="bold" font-family="${fontFamily}" font-size="80" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
 `.trim();
};

// src/generator/svg/defs/gradient.ts
var generateGradient = ({
  gradientIds,
  palette,
  primaryHash,
  secondaryHash
}) => {
  const [gradient1Id, gradient2Id, gradient3Id] = gradientIds;
  const cx1 = 30 + primaryHash % 41;
  const cy1 = 30 + secondaryHash % 41;
  const r1 = 90 + primaryHash % 31;
  const edgeZones = [
    { x: [5, 25], y: [20, 80] },
    { x: [75, 95], y: [20, 80] },
    { x: [20, 80], y: [5, 25] },
    { x: [20, 80], y: [75, 95] }
  ];
  const innerZones = [
    { x: [25, 55], y: [25, 55] },
    { x: [45, 75], y: [25, 55] },
    { x: [25, 55], y: [45, 75] },
    { x: [45, 75], y: [45, 75] }
  ];
  const edgeIndex = primaryHash % edgeZones.length;
  let innerIndex = (primaryHash + secondaryHash) % innerZones.length;
  if (innerIndex === edgeIndex) {
    innerIndex = (innerIndex + 1) % innerZones.length;
  }
  const edge = edgeZones[edgeIndex];
  const inner = innerZones[innerIndex];
  const cx2 = edge.x[0] + primaryHash % (edge.x[1] - edge.x[0] + 1);
  const cy2 = edge.y[0] + secondaryHash % (edge.y[1] - edge.y[0] + 1);
  const cx3 = inner.x[0] + secondaryHash % (inner.x[1] - inner.x[0] + 1);
  const cy3 = inner.y[0] + primaryHash % (inner.y[1] - inner.y[0] + 1);
  const r2 = 25 + secondaryHash % 21;
  const r3 = 20 + (primaryHash + secondaryHash) % 31;
  return `
    <radialGradient id="${gradient1Id}" cx="${cx1}%" cy="${cy1}%" r="${r1}%">
      <stop offset="0%" stop-color="${palette[0]}" stop-opacity="1" />
      <stop offset="100%" stop-color="${palette[1]}" stop-opacity="1" />
    </radialGradient>

    <radialGradient id="${gradient2Id}" cx="${cx2}%" cy="${cy2}%" r="${r2}%">
      <stop offset="0%" stop-color="${palette[1]}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="${palette[2]}" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="${gradient3Id}" cx="${cx3}%" cy="${cy3}%" r="${r3}%">
      <stop offset="0%" stop-color="${palette[2]}" stop-opacity="0.85" />
      <stop offset="100%" stop-color="${palette[0]}" stop-opacity="0" />
    </radialGradient>
  `.trim();
};

// src/generator/svg/defs/filters.ts
var generateFilter = ({
  filterId,
  primaryHash,
  secondaryHash,
  noise,
  blur
}) => {
  if (!filterId) {
    throw new Error("Provide a unique identifier");
  }
  const baseFrequencyVal = 0.02 + secondaryHash % 14 * 0.01;
  const numOctavesVal = 1 + secondaryHash % 4;
  const stdDeviationVal = 1 + secondaryHash % 3;
  return `
    <filter
      id="${filterId}"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
    >
      ${blur ? `
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="${stdDeviationVal}"
          result="blurredGradient"
        />
      ` : ""}

      ${noise ? `
        <feTurbulence
          seed="${primaryHash}"
          baseFrequency="${baseFrequencyVal}"
          numOctaves="${numOctavesVal}"
          type="turbulence"
          result="noise"
        />

        <feColorMatrix
          in="noise"
          type="matrix"
          values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 0.15 0"
          result="noiseTexture"
        />
      ` : ""}

      ${noise ? `
        <feBlend
          in="${blur ? "blurredGradient" : "SourceGraphic"}"
          in2="noiseTexture"
          mode="overlay"
          result="final"
        />
      ` : blur ? `
        <feComposite
          in="blurredGradient"
          in2="SourceGraphic"
          operator="over"
          result="final"
        />
      ` : ""}
    </filter>
  `.trim();
};

// src/generator/svg/defs/clippath.ts
var generateClipPath = ({
  clipPathId,
  size,
  rounded
}) => {
  const radius = rounded ? size / 2 : 0;
  return `
  <clipPath id="${clipPathId}">
    <rect
      width="100%"
      height="100%"
      rx="${radius}"
      ry="${radius}"
    />
  </clipPath>`.trim();
};

// src/generator/svg/defs/index.ts
var buildDefs = ({
  baseDefId,
  primaryHash,
  secondaryHash,
  size,
  rounded,
  palette,
  noise,
  blur
}) => {
  const gradientIds = [
    `${baseDefId}-gradient-1`,
    `${baseDefId}-gradient-2`,
    `${baseDefId}-gradient-3`
  ];
  const filterId = `${baseDefId}-filter`;
  const clipPathId = `${baseDefId}-clip-path`;
  const defSvgString = `
  <defs>
     ${generateGradient({
    gradientIds,
    palette,
    primaryHash,
    secondaryHash
  })}
    
    ${noise || blur ? generateFilter({
    filterId,
    primaryHash,
    secondaryHash,
    noise,
    blur
  }) : ""}
    
    ${noise || blur ? generateClipPath({
    clipPathId,
    size,
    rounded
  }) : ""}
  </defs>
 `.trim();
  return {
    ids: {
      gradientIds,
      filterId,
      clipPathId
    },
    defSvgString
  };
};

// src/generator/svg/index.ts
var buildSvg = ({
  primaryHash,
  secondaryHash,
  derivedInitials,
  size,
  palette,
  rounded,
  font,
  noise,
  blur
}) => {
  const { ids, defSvgString } = buildDefs({
    baseDefId: `${primaryHash}-${secondaryHash}`,
    primaryHash,
    secondaryHash,
    size,
    rounded,
    palette,
    noise,
    blur
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

// src/generator/generate.ts
var generateAvatar = ({
  seed,
  name,
  size = 128,
  rounded = false,
  font = "Inter",
  noise = true,
  blur = true
}) => {
  if (!seed.trim()) {
    throw new Error("Please provide a non-empty seed.");
  }
  const primaryHash = hashSeed(seed);
  const secondaryHash = hashSeed(seed + "-secondary");
  const derivedInitials = name?.trim() ? getInitials(name) : void 0;
  const palette = choosePalette(primaryHash);
  const svg = buildSvg({
    primaryHash,
    secondaryHash,
    derivedInitials,
    size,
    palette,
    rounded,
    font,
    noise,
    blur
  });
  return svg;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateAvatar
});
//# sourceMappingURL=index.cjs.map