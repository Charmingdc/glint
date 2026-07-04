type GenerateGradientOptions = {
 gradientId: string;
 palette: string[];
 primaryHash: number;
 secondaryHash: number;
};

export const generateGradient = ({
 gradientId,
 palette,
 primaryHash,
 secondaryHash
}: GenerateGradientOptions): string => {
 if (!gradientId) {
  throw new Error("Provide a unique identifier");
 }

 const xAxis = 5 + (primaryHash % (95 - 5 + 1));
 const yAxis = 5 + (secondaryHash % (95 - 5 + 1));
 const radius = 15 + (primaryHash % (85 - 15 + 1));

 return `
   <radialGradient id="${gradientId}" cx="${xAxis}%" cy="${yAxis}%" r="${radius}%">
      <stop offset="0%" stop-color="${palette[0]}"/>
      <stop offset="100%" stop-color="${palette[1]}" />
   </radialGradient>
  `.trim();
};
