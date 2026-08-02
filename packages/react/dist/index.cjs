"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  GlintAvatar: () => GlintAvatar
});
module.exports = __toCommonJS(index_exports);

// src/components/GlintAvatar.tsx
var import_core = require("@glintjs/core");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var SIZE_MAP = {
  sm: 32,
  md: 48,
  lg: 64
};
var GlintAvatar = (0, import_react.memo)(
  (0, import_react.forwardRef)(
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
      const svg = (0, import_react.useMemo)(
        () => (0, import_core.generateAvatar)({
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GlintAvatar
});
//# sourceMappingURL=index.cjs.map