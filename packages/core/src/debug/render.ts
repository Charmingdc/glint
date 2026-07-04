import { writeFile } from "node:fs/promises";
import { generateAvatar } from "../index";
import type { AvatarOptions } from "../types";

const TEST_CASES = [
 {
  filename: "gradient.svg",
  options: {
   noise: false,
   glass: false
  }
 },
 {
  filename: "gradient-noise.svg",
  options: {
   glass: false
  }
 },
 {
  filename: "gradient-glass.svg",
  options: {
   noise: false
  }
 },
 {
  filename: "gradient-noise-glass.svg",
  options: {}
 }
];
const writeSvgFiles = async () => {
 const baseOptions: AvatarOptions = {
  seed: "seed_lol",
  initialsValue: "Adebayo Muis",
  size: 256,
  rounded: true,
  font: "Inter"
 };

 try {
  await Promise.all(
   TEST_CASES.map(async ({ filename, options }) => {
    const svg = generateAvatar({
     ...baseOptions,
     ...options
    });

    await writeFile(`test_files/${filename}`, svg, "utf8");
   })
  );

  console.log("All SVG test cases generated successfully!");
 } catch (err) {
  console.error("Failed to generate SVGs:", err);
 }
};

writeSvgFiles();
