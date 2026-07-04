import { generateGradient } from "./gradient";

type BuildDefsOptions = {
 baseDefId: string;
 size: number;
 palette: string[];
 angleDirection: number;
 noise: boolean;
 glass: boolean;
};

type DefsFragmentResponse = {
 gradientId: string;
 defSvgString: string;
};

export const buildDefs = ({
 baseDefId,
 size,
 palette,
 angleDirection,
 noise,
 glass
}: BuildDefsOptions): DefsFragmentResponse => {
 const gradientId = `${baseDefId}-gradient`;

 const defSvgString = `
 <defs>
    ${generateGradient({
     defId: gradientId,
     size,
     palette,
     angleDirection
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
