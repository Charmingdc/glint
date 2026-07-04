import { generateGradient } from "./gradient";
import { generateFilter } from "./filters";
import { generateClipPath } from "./clippath";

import type { DefFragmentIds } from "../../../types";

type BuildDefsOptions = {
 baseDefId: string;
 primaryHash: number;
 secondaryHash: number;
 size: number;
 rounded: boolean;
 palette: string[];
 noise: boolean;
 glass: boolean;
};

type DefsFragmentResponse = {
 ids: DefFragmentIds;
 defSvgString: string;
};

export const buildDefs = ({
 baseDefId,
 primaryHash,
 secondaryHash,
 size,
 rounded,
 palette,
 noise,
 glass
}: BuildDefsOptions): DefsFragmentResponse => {
 const gradientId = `${baseDefId}-gradient`;
 const filterId = `${baseDefId}-filter`;
 const clipPathId = `${baseDefId}-clip-path`;

 const defSvgString = `
  <defs>
     ${generateGradient({
      gradientId,
      palette,
      primaryHash,
      secondaryHash
     })}
    
    ${
     noise || glass
      ? generateFilter({
         filterId,
         primaryHash,
         secondaryHash,
         noise,
         glass
        })
      : ""
    }
    
    ${
     noise || glass
      ? generateClipPath({
         clipPathId,
         size,
         rounded
        })
      : ""
    }
  </defs>
 `.trim();

 return {
  ids: { gradientId, filterId, clipPathId },
  defSvgString
 };
};
