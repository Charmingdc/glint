type AvatarOptions = {
 seed: string;
 initialsValue?: string | undefined;
 size?: number | undefined;
 rounded?: boolean | undefined;
 font?: string | undefined;
 noise?: boolean | undefined;
 glass?: boolean | undefined;
};

type SvgBuilderOptions = {
 primaryHash: number;
 secondaryHash: number;
 derivedInitials: string | undefined;
 size: number;
 palette: string[];
 rounded: boolean;
 font: string;
 noise: boolean;
 glass: boolean;
};

type PaletteGenResponse = {
 palette: string[];
};

type SVGString = string;

type BuildTextFragmentOptions = {
 size: number;
 text: string;
 fontFamily: string;
};

type DefFragmentIds = {
 gradientId: string;
 filterId: string | undefined;
 clipPathId: string | uundefined;
};

type BuildBgFramentOptions = {
 size: number;
 rounded: boolean;
 ids: DefFragmentIds;
};

export type {
 AvatarOptions,
 SvgBuilderOptions,
 SVGString,
 PaletteGenResponse,
 BuildBgFramentOptions,
 BuildTextFragmentOptions,
 DefFragmentIds
};
