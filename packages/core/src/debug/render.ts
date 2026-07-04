import { writeFile } from "node:fs/promises";
import { generateAvatar } from "../index";
import type { AvatarOptions } from "../types";

const writeSvgFile = async () => {
 const avatarOptions: AvatarOptions = {
  seed: "Charming",
  initialsValue: "Adebayo Muis",
  size: 256,
  rounded: true
  //  font: "cursive"
 };

 const svgContent = generateAvatar(avatarOptions);

 try {
  await writeFile("avatar.svg", svgContent, "utf8");
  console.log("SVG graphic saved successfully!");
 } catch (err) {
  console.error("Failed to save SVG:", err);
 }
};

writeSvgFile();
