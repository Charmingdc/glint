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
  blur: boolean;
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
  blur,
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
       secondaryHash,
     })}
    
    ${
      noise || blur
        ? generateFilter({
            filterId,
            primaryHash,
            secondaryHash,
            noise,
            blur,
          })
        : ""
    }
    
    ${
      noise || blur
        ? generateClipPath({
            clipPathId,
            size,
            rounded,
          })
        : ""
    }
  </defs>
 `.trim();

  return {
    ids: { gradientId, filterId, clipPathId },
    defSvgString,
  };
};
