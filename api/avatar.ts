import { generateAvatar } from "@glint/core";

export default function handler(req, res) {
 const svg = generateAvatar({
  name: req.query.name ?? "John Doe"
 });

 res.setHeader("Content-Type", "image/svg+xml");
 res.send(svg);
}
