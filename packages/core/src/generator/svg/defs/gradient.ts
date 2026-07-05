type GenerateGradientOptions = {
 gradientIds: readonly [string, string, string];
 palette: string[];
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

 const cx1 = 5 + (primaryHash % 91);
 const cy1 = 5 + (secondaryHash % 91);
 const r1 = 35 + (primaryHash % 41);

 const cx2 = 5 + ((primaryHash + secondaryHash) % 91);
 const cy2 = 5 + ((primaryHash * 7) % 91);
 const r2 = 30 + (secondaryHash % 46);

 const cx3 = 5 + ((secondaryHash * 13) % 91);
 const cy3 = 5 + ((primaryHash * 17) % 91);
 const r3 = 25 + ((primaryHash + secondaryHash) % 51);

 return `
    <radialGradient id="${gradient1Id}" cx="${cx1}%" cy="${cy1}%" r="${r1}%">
      <stop offset="0%" stop-color="${palette[0]}" />
      <stop offset="100%" stop-color="${palette[1]}" />
    </radialGradient>

    <radialGradient id="${gradient2Id}" cx="${cx2}%" cy="${cy2}%" r="${r2}%">
      <stop offset="0%" stop-color="${palette[1]}" />
      <stop offset="100%" stop-color="${palette[2]}" />
    </radialGradient>

    <radialGradient id="${gradient3Id}" cx="${cx3}%" cy="${cy3}%" r="${r3}%">
      <stop offset="0%" stop-color="${palette[2]}" />
      <stop offset="100%" stop-color="${palette[0]}" />
    </radialGradient>
  `.trim();
};
