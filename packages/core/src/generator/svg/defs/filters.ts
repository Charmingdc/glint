type GenerateFilterOptions = {
 filterId: string;
 primaryHash: number;
 secondaryHash: number;
 noise: boolean;
 glass: boolean;
};

export const generateFilter = ({
 filterId,
 primaryHash,
 secondaryHash,
 noise,
 glass
}: GenerateFilterOptions): string => {
 if (!filterId) {
  throw new Error("Provide a unique identifier");
 }

 const baseFrequencyVal = 0.02 + (secondaryHash % 14) * 0.01;
 const numOctavesVal = 1 + (secondaryHash % 4);
 const stdDeviationVal = 1 + (secondaryHash % 3);

 return `
    <filter
      id="${filterId}"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
    >
      ${
       glass
        ? `
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="${stdDeviationVal}"
          result="blurredGradient"
        />
      `
        : ""
      }

      ${
       noise
        ? `
        <feTurbulence
          seed="${primaryHash}"
          baseFrequency="${baseFrequencyVal}"
          numOctaves="${numOctavesVal}"
          type="fractalNoise"
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
      `
        : ""
      }

      ${
       noise
        ? `
        <feBlend
          in="${glass ? "blurredGradient" : "SourceGraphic"}"
          in2="noiseTexture"
          mode="overlay"
          result="final"
        />
      `
        : glass
          ? `
        <feComposite
          in="blurredGradient"
          in2="SourceGraphic"
          operator="over"
          result="final"
        />
      `
          : ""
      }
    </filter>
  `.trim();
};
