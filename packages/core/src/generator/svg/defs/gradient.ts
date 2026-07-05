type GenerateGradientOptions = {
 gradientIds: readonly [string, string, string];
 palette: readonly [string, string, string];
 primaryHash: number;
 secondaryHash: number;
};

export const generateGradient = ({
 gradientIds,
 palette,
 primaryHash,
 secondaryHash
}: GenerateGradientOptions): string => {
 const [gradient1Id, gradient2Id, gradient3Id] = gradientIds;

 const cx1 = 30 + (primaryHash % 41);
 const cy1 = 30 + (secondaryHash % 41);
 const r1 = 90 + (primaryHash % 31);

 // Edge placement zones
 const edgeZones = [
  { x: [5, 25], y: [20, 80] },
  { x: [75, 95], y: [20, 80] },
  { x: [20, 80], y: [5, 25] },
  { x: [20, 80], y: [75, 95] }
 ] as const;

 // Inner placement zones
 const innerZones = [
  { x: [25, 55], y: [25, 55] },
  { x: [45, 75], y: [25, 55] },
  { x: [25, 55], y: [45, 75] },
  { x: [45, 75], y: [45, 75] }
 ] as const;

 const edgeIndex = primaryHash % edgeZones.length;

 let innerIndex = (primaryHash + secondaryHash) % innerZones.length;

 if (innerIndex === edgeIndex) {
  innerIndex = (innerIndex + 1) % innerZones.length;
 }

 const edge = edgeZones[edgeIndex];
 const inner = innerZones[innerIndex];

 const cx2 = edge.x[0] + (primaryHash % (edge.x[1] - edge.x[0] + 1));
 const cy2 = edge.y[0] + (secondaryHash % (edge.y[1] - edge.y[0] + 1));

 const cx3 = inner.x[0] + (secondaryHash % (inner.x[1] - inner.x[0] + 1));
 const cy3 = inner.y[0] + (primaryHash % (inner.y[1] - inner.y[0] + 1));

 const r2 = 25 + (secondaryHash % 21);
 const r3 = 20 + ((primaryHash + secondaryHash) % 31);

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
