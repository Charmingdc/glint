type GenerateGradientOptions = {
 defId: string;
 size: number;
 palette: string[];
 angleDirection: number;
};

export const generateGradient = ({
 defId,
 size,
 palette,
 angleDirection
}: GenerateGradientOptions): string => {
 if (!defId) {
  throw new Error("Provide a unique identifier");
  return "";
 }

 const halfSize = size / 2;

 return `
   <linearGradient id="${defId}" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(${angleDirection}, 0, 0)">
     <stop offset="5%" stop-color="${palette[0]}"/>
     <stop offset="65%" stop-color="${palette[1]}" />
     <stop offset="100%" stop-color="${palette[2]}"/>
   </linearGradient>
  `.trim();
};
