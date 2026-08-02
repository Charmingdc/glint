import { generateAvatar, type AvatarOptions } from "@glintjs/core";
import {
  forwardRef,
  memo,
  useMemo,
  type ComponentPropsWithoutRef,
} from "react";

type AvatarSize = "sm" | "md" | "lg" | number;

export interface GlintAvatarProps extends Omit<
  ComponentPropsWithoutRef<"div">,
  keyof AvatarOptions
> {
  seed: AvatarOptions["seed"];
  name?: AvatarOptions["name"];
  size?: AvatarSize;
  rounded?: AvatarOptions["rounded"];
  font?: AvatarOptions["font"];
  noise?: AvatarOptions["noise"];
  blur?: AvatarOptions["blur"];
}

const SIZE_MAP = {
  sm: 32,
  md: 48,
  lg: 64,
} satisfies Record<Exclude<AvatarSize, number>, number>;

export const GlintAvatar = memo(
  forwardRef<HTMLDivElement, GlintAvatarProps>(
    (
      {
        seed,
        name,
        size = "md",
        rounded,
        font,
        noise,
        blur,
        className,
        style,
        role,
        "aria-label": ariaLabel,
        ...divProps
      },
      ref,
    ) => {
      const resolvedSize =
        typeof size === "number"
          ? Number.isFinite(size)
            ? Math.max(1, size)
            : SIZE_MAP.md
          : SIZE_MAP[size];

      const svg = useMemo(
        () =>
          generateAvatar({
            seed,
            name,
            size: resolvedSize,
            rounded,
            font,
            noise,
            blur,
          }),
        [seed, name, resolvedSize, rounded, font, noise, blur],
      );

      return (
        <div
          {...divProps}
          ref={ref}
          className={className}
          style={style}
          role={role ?? "img"}
          aria-label={ariaLabel ?? name ?? seed}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      );
    },
  ),
);

GlintAvatar.displayName = "GlintAvatar";
