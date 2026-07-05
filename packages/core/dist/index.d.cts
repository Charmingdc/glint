type AvatarOptions = {
    seed: string;
    name?: string | undefined;
    size?: number | undefined;
    rounded?: boolean | undefined;
    font?: string | undefined;
    noise?: boolean | undefined;
    blur?: boolean | undefined;
};

declare const generateAvatar: ({ seed, name, size, rounded, font, noise, blur, }: AvatarOptions) => string;

export { type AvatarOptions, generateAvatar };
