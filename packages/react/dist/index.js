// src/components/GlintAvatar.tsx
import { generateAvatar } from "@glintjs/core";
import {
  forwardRef,
  memo,
  useMemo
} from "react";
import { jsx } from "react/jsx-runtime";
var SIZE_MAP = {
  sm: 32,
  md: 48,
  lg: 64
};
var GlintAvatar = memo(
  forwardRef(
    ({
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
    }, ref) => {
      const resolvedSize = typeof size === "number" ? Number.isFinite(size) ? Math.max(1, size) : SIZE_MAP.md : SIZE_MAP[size];
      const svg = useMemo(
        () => generateAvatar({
          seed,
          name,
          size: resolvedSize,
          rounded,
          font,
          noise,
          blur
        }),
        [seed, name, resolvedSize, rounded, font, noise, blur]
      );
      return /* @__PURE__ */ jsx(
        "div",
        {
          ...divProps,
          ref,
          className,
          style,
          role: role ?? "img",
          "aria-label": ariaLabel ?? name ?? seed,
          dangerouslySetInnerHTML: { __html: svg }
        }
      );
    }
  )
);
GlintAvatar.displayName = "GlintAvatar";
export {
  GlintAvatar
};
//# sourceMappingURL=index.js.map