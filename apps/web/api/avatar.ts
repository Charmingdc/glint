import type { VercelRequest, VercelResponse } from "@vercel/node";
import { generateAvatar } from "@glint/core";
import sharp from "sharp";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { seed, name, size, rounded, font, noise, blur, png } = req.query;

  if (!seed || typeof seed !== "string" || !seed.trim()) {
    res.status(400).json({ error: "Missing required query parameter: seed" });
    return;
  }

  const resolvedSize = typeof size === "string" ? Number(size) : 128;

  const svg = generateAvatar({
    seed,
    name: typeof name === "string" ? name : undefined,
    size: resolvedSize,
    rounded:
      rounded === "true" ? true : rounded === "false" ? false : undefined,
    font: typeof font === "string" ? font : undefined,
    noise: noise === "true" ? true : noise === "false" ? false : undefined,
    blur: blur === "true" ? true : blur === "false" ? false : undefined,
  });

  const asPng = png === "true";

  if (asPng) {
    const pngBuffer = await sharp(Buffer.from(svg))
      .resize(resolvedSize, resolvedSize)
      .png()
      .toBuffer();

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.send(pngBuffer);
    return;
  }

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  res.send(svg);
}
