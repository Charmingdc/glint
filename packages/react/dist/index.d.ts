import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { AvatarOptions } from '@glintjs/core';

type AvatarSize = "sm" | "md" | "lg" | number;
interface GlintAvatarProps extends Omit<ComponentPropsWithoutRef<"div">, keyof AvatarOptions> {
    seed: AvatarOptions["seed"];
    name?: AvatarOptions["name"];
    size?: AvatarSize;
    rounded?: AvatarOptions["rounded"];
    font?: AvatarOptions["font"];
    noise?: AvatarOptions["noise"];
    blur?: AvatarOptions["blur"];
}
declare const GlintAvatar: react.NamedExoticComponent<GlintAvatarProps & react.RefAttributes<HTMLDivElement>>;

export { GlintAvatar, type GlintAvatarProps };
