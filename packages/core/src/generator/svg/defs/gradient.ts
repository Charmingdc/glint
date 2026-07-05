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

 // Base gradient
 const cx1 = 30 + (primaryHash % 41);
 const cy1 = 30 + (secondaryHash % 41);
 const r1 = 90 + (primaryHash % 31);

 // Four deterministic quadrants
 const quadrants = [
  { x: [5, 45], y: [5, 45] }, // Top Left
  { x: [55, 95], y: [5, 45] }, // Top Right
  { x: [5, 45], y: [55, 95] }, // Bottom Left
  { x: [55, 95], y: [55, 95] } // Bottom Right
 ] as const;

 const q2Index = primaryHash % 4;

 let q3Index = (primaryHash + secondaryHash) % 4;

 if (q3Index === q2Index) {
  q3Index = (q3Index + 1) % 4;
 }

 const q2 = quadrants[q2Index];
 const q3 = quadrants[q3Index];

 const cx2 = q2.x[0] + (primaryHash % (q2.x[1] - q2.x[0] + 1));
 const cy2 = q2.y[0] + (secondaryHash % (q2.y[1] - q2.y[0] + 1));

 const cx3 = q3.x[0] + (secondaryHash % (q3.x[1] - q3.x[0] + 1));
 const cy3 = q3.y[0] + (primaryHash % (q3.y[1] - q3.y[0] + 1));

 const r2 = 25 + (secondaryHash % 21);
 const r3 = 20 + ((primaryHash + secondaryHash) % 21);

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
