type AvatarOptions = {
    seed: string;
    name?: string | undefined;
    size?: number | undefined;
    rounded?: boolean | undefined;
    font?: string | undefined;
    noise?: boolean | undefined;
    blur?: boolean | undefined;
};
type SvgBuilderOptions = {
    primaryHash: number;
    secondaryHash: number;
    derivedInitials: string | undefined;
    size: number;
    palette: readonly [string, string, string];
    rounded: boolean;
    font: string;
    noise: boolean;
    blur: boolean;
};
type PaletteGenResponse = readonly [string, string, string];
type SVGString = string;
type BuildTextFragmentOptions = {
    size: number;
    text: string;
    fontFamily: string;
};
type DefFragmentIds = {
    gradientIds: readonly [string, string, string];
    filterId: string;
    clipPathId: string;
};
type BuildBgFramentOptions = {
    size: number;
    rounded: boolean;
    ids: DefFragmentIds;
};
export type { AvatarOptions, SvgBuilderOptions, SVGString, PaletteGenResponse, BuildBgFramentOptions, BuildTextFragmentOptions, DefFragmentIds };
//# sourceMappingURL=types.d.ts.map