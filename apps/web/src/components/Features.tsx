import { motion } from "motion/react";
import { fade } from "../lib/motion";

const features = [
  "Same input produces the same avatar.",
  "Unique gradients derived from your seed.",
  "Customize avatar appearance.",
  "Simple packages for JavaScript projects.",
  "Seamless integration with React.",
  "Generate avatars with a simple HTTP request.",
];

export function Features() {
  return (
    <main className="w-full max-w-3xl flex flex-col items-start p-8">
      <motion.h2
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="w-full max-w-md text-lg font-semibold text-foreground/80 mt-2"
      >
        Key features
      </motion.h2>

      <motion.ul
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="w-full max-w-md flex flex-col items-start gap-2 text-base font-light text-foreground/60 mt-6"
      >
        {features.map((feature) => (
          <li className="w-full py-3 border-t border-foreground/20 last:border-b">
            {" "}
            {feature}{" "}
          </li>
        ))}
      </motion.ul>
    </main>
  );
}
