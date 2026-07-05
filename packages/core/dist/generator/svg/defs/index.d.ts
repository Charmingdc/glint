import type { DefFragmentIds } from "../../../types";
type BuildDefsOptions = {
    baseDefId: string;
    primaryHash: number;
    secondaryHash: number;
    size: number;
    rounded: boolean;
    palette: readonly [string, string, string];
    noise: boolean;
    blur: boolean;
};
type DefsFragmentResponse = {
    ids: DefFragmentIds;
    defSvgString: string;
};
export declare const buildDefs: ({ baseDefId, primaryHash, secondaryHash, size, rounded, palette, noise, blur }: BuildDefsOptions) => DefsFragmentResponse;
export {};
//# sourceMappingURL=index.d.ts.map