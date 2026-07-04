type GenerateClipPathOptions = {
 clipPathId: string;
 size: number;
 rounded: boolean;
};

export const generateClipPath = ({
 clipPathId,
 size,
 rounded
}: GenerateClipPathOptions) => {
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
