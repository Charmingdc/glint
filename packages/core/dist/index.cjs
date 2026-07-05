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
  // Solar Flare — warm orange base, cobalt blue edge, acid lime accent
  ["#FF7A2F", "#3B82F6", "#BFFF00"],
  // Neon Orchid — vivid violet base, electric cyan edge, hot pink accent
  ["#A855F7", "#22D3EE", "#FF3CAC"],
  // Tropic — coral base, teal edge, golden yellow accent
  ["#FF5F6D", "#2ECECE", "#FFD93D"],
  // Arctic Prism — sky blue base, mint edge, warm peach accent
  ["#38BDF8", "#34D399", "#FDBA74"],
  // Studio Rose — dusty rose base, electric indigo edge, amber accent
  ["#FB7185", "#6366F1", "#FCD34D"],
  // Jungle Fever — vivid green base, hot magenta edge, electric blue accent
  ["#22C55E", "#EC4899", "#60A5FA"],
  // Citrus Burst — bright lemon base, vivid coral edge, deep violet accent
  ["#FACC15", "#F97316", "#A855F7"],
  // Ultrawave — electric blue base, vivid green edge, warm orange accent
  ["#3B82F6", "#10B981", "#FB923C"],
  // Candy Pop — bubblegum pink base, lime green edge, sky blue accent
  ["#F472B6", "#84CC16", "#38BDF8"],
  // Dusk Signal — warm amber base, deep violet edge, cyan accent
  ["#FBBF24", "#7C3AED", "#06B6D4"],
  // Coral Reef — salmon base, turquoise edge, violet accent
  ["#FF6B6B", "#4ECDC4", "#C084FC"],
  // Lunar Mint — soft mint base, vivid purple edge, golden accent
  ["#6EE7B7", "#8B5CF6", "#FDE68A"],
  // Wildfire — vivid red-orange base, electric blue edge, lime accent
  ["#FF4500", "#2563EB", "#A3E635"],
  // Peach Volt — peachy base, electric violet edge, cyan-green accent
  ["#FDBA74", "#7C3AED", "#2DD4BF"],
  // Neo Jade — vivid teal base, fuchsia edge, sunny yellow accent
  ["#14B8A6", "#E879F9", "#FDE047"],
  // Helios — golden yellow base, rose pink edge, electric blue accent
  ["#FCD34D", "#F43F5E", "#3B82F6"],
  // Aurora Drift — green base, blue-violet edge, warm coral accent
  ["#4ADE80", "#818CF8", "#FB7185"],
  // Volt — electric lime base, vivid purple edge, hot coral accent
  ["#D9F99D", "#A855F7", "#FF5E5B"],
  // Flamingo Coast — hot pink base, aqua edge, amber accent
  ["#FF5EAB", "#22D3EE", "#FBBF24"],
  // Cobalt Bloom — deep blue base, vivid green edge, pink accent
  ["#60A5FA", "#34D399", "#F472B6"],
  // Sunset Chrome — tangerine base, vivid violet edge, mint accent
  ["#FF9A3C", "#7C3AED", "#6EE7B7"],
  // Galactic Rose — rose base, electric teal edge, golden accent
  ["#FB7185", "#0D9488", "#FCD34D"],
  // Cyberpunk — vivid cyan base, hot magenta edge, lime accent
  ["#22D3EE", "#FF3CAC", "#BFFF00"],
  // Papaya Haze — warm peach base, sky blue edge, green accent
  ["#FDBA74", "#38BDF8", "#4ADE80"],
  // Prism Pop — periwinkle blue base, coral edge, lime accent
  ["#818CF8", "#FF6B6B", "#A3E635"],
  // Velvet Lime — vivid purple base, lime edge, peach accent
  ["#C084FC", "#84CC16", "#FDBA74"],
  // Deep Sea Bloom — vivid blue base, coral-pink edge, aqua accent
  ["#3B82F6", "#F472B6", "#2DD4BF"],
  // Saffron Wave — saffron base, electric violet edge, sky accent
  ["#F59E0B", "#8B5CF6", "#38BDF8"],
  // Neon Garden — vivid green base, hot pink edge, electric blue accent
  ["#22C55E", "#FF3CAC", "#818CF8"],
  // Golden Hour — warm gold base, vivid teal edge, fuchsia accent
  ["#FBBF24", "#14B8A6", "#E879F9"]
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
  const fontSize = Math.round(size * 0.4);
  return `<text x="${center}" y="${center}" font-weight="bold" font-family="${fontFamily}" font-size="${fontSize}" fill="white" text-anchor="middle" dominant-baseline="central">${text}</text>`;
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