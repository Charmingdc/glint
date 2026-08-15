import { motion } from "motion/react";
import { fade } from "../lib/motion";

export function Footer() {
  return (
    <footer className="w-screen border-t border-white/6 px-6 py-6">
      <motion.p
        custom={5}
        initial="hidden"
        animate="show"
        variants={fade}
        className="text-center text-xs text- foreground/30"
      >
        glint - open source, MIT license
      </motion.p>
    </footer>
  );
}
