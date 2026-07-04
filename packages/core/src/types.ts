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
 hashedSeed: number;
 derivedInitials: string | undefined;
 size: number;
 palette: string[];
 angleDirection: number;
 rounded: boolean;
 font: string;
 noise: boolean;
 glass: boolean;
};

type PaletteGenResponse = {
 palette: string[];
 angleDirection: number;
};

type SVGString = string;

type BuildBgFramentOptions = {
 size: number;
 rounded: boolean;
 gradientId: string;
};

type BuildTextFragmentOptions = {
 size: number;
 text: string;
 fontFamily: string;
};

export type {
 AvatarOptions,
 SvgBuilderOptions,
 SVGString,
 PaletteGenResponse,
 BuildBgFramentOptions,
 BuildTextFragmentOptions
};
