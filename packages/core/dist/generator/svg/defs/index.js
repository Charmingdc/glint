import { generateGradient } from "./gradient";
import { generateFilter } from "./filters";
import { generateClipPath } from "./clippath";
export const buildDefs = ({ baseDefId, primaryHash, secondaryHash, size, rounded, palette, noise, blur }) => {
    const gradientIds = [
        `${baseDefId}-gradient-1`,
        `${baseDefId}-gradient-2`,
        `${baseDefId}-gradient-3`
    ];
    const filterId = `${baseDefId}-filter`;
    const clipPathId = `${baseDefId}-clip-path`;
    const defSvgString = `
  <defs>
     ${generateGradient({
        gradientIds,
        palette,
        primaryHash,
        secondaryHash
    })}
    
    ${noise || blur
        ? generateFilter({
            filterId,
            primaryHash,
            secondaryHash,
            noise,
            blur
        })
        : ""}
    
    ${noise || blur
        ? generateClipPath({
            clipPathId,
            size,
            rounded
        })
        : ""}
  </defs>
 `.trim();
    return {
        ids: {
            gradientIds,
            filterId,
            clipPathId
        },
        defSvgString
    };
};
//# sourceMappingURL=index.js.map