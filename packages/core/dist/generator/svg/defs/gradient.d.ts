type GenerateGradientOptions = {
    gradientIds: readonly [string, string, string];
    palette: readonly [string, string, string];
    primaryHash: number;
    secondaryHash: number;
};
export declare const generateGradient: ({ gradientIds, palette, primaryHash, secondaryHash }: GenerateGradientOptions) => string;
export {};
//# sourceMappingURL=gradient.d.ts.map