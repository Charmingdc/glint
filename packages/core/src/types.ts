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
 derivedInitials: string | undefined;
 size: number;
 rounded: boolean;
 font: string;
 noise: boolean;
 glass: boolean;
};

type SVGString = string;

export type { AvatarOptions, SvgBuilderOptions, SVGString };
