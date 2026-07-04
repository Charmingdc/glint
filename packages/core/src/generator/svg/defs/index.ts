import { generateGradient } from "./gradient";

type BuildDefsOptions = {
 baseDefId: string;
 primaryHash: number;
 secondaryHash: number;
 size: number;
 palette: string[];
 noise: boolean;
 glass: boolean;
};

type DefsFragmentResponse = {
 gradientId: string;
 defSvgString: string;
};

export const buildDefs = ({
 baseDefId,
 primaryHash,
 secondaryHash,
 size,
 palette,
 noise,
 glass
}: BuildDefsOptions): DefsFragmentResponse => {
 const gradientId = `${baseDefId}-gradient`;

 const defSvgString = `
  <defs>
     ${generateGradient({
      defId: gradientId,
      palette,
      primaryHash,
      secondaryHash
     })}
    
    ${noise ? "" : ""}
    ${glass ? "" : ""}
  </defs>
 `.trim();

 return {
  gradientId,
  defSvgString
 };
};
