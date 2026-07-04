import { writeFile } from "node:fs/promises";
import { generateAvatar } from "../index";
import type { AvatarOptions } from "../types";

const writeSvgFile = async () => {
 const avatarOptions: AvatarOptions = {
  seed: "Muis_",
  initialsValue: "Muis",
  size: 256,
  rounded: true,
  font: "cursive"
 };

 const svgContent = generateAvatar(avatarOptions);

 try {
  await writeFile("avatar.svg", svgContent, "utf8");
  console.log("SVG graphic saved successfully! Svg content:", svgContent);
 } catch (err) {
  console.error("Failed to save SVG:", err);
 }
};

writeSvgFile();
