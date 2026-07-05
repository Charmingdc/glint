import { generateAvatar } from "@glint/core";

export default function handler(req, res) {
 const svg = generateAvatar({
  seed: String(req.query.seed),
  name: req.query.name ? String(req.query.name) : undefined,
  size: req.query.size ? Number(req.query.size) : undefined,
  rounded: req.query.rounded === "true" ? true : undefined,
  font: req.query.font ? String(req.query.font) : undefined,
  noise: req.query.noise === "true" ? true : undefined,
  blur: req.query.blur === "true" ? true : undefined
 });

 res.setHeader("Content-Type", "image/svg+xml");
 res.send(svg);
}
