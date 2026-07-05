import type { VercelRequest, VercelResponse } from "@vercel/node";
import { generateAvatar } from "@glint/core";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { seed, name, size, rounded, font, noise, blur } = req.query;

  if (!seed || typeof seed !== "string" || !seed.trim()) {
    res.status(400).json({ error: "Missing required query parameter: seed" });
    return;
  }

  const svg = generateAvatar({
    seed,
    name: typeof name === "string" ? name : undefined,
    size: typeof size === "string" ? Number(size) : undefined,
    rounded: rounded === "true" ? true : rounded === "false" ? false : undefined,
    font: typeof font === "string" ? font : undefined,
    noise: noise === "true" ? true : noise === "false" ? false : undefined,
    blur: blur === "true" ? true : blur === "false" ? false : undefined,
  });

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  res.send(svg);
}
