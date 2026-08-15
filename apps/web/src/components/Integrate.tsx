import { motion } from "motion/react";
import { fade } from "../lib/motion";

export function Integrate() {
  return (
    <main className="w-full max-w-3xl flex flex-col items-start p-8">
      <motion.h3
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="w-full max-w-md text-xs uppercase font-semibold text-foreground/80 mt-2"
      >
        Integrate
      </motion.h3>

      <motion.div
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="w-full max-w-md flex flex-col items-start gap-2 text-base font-light text-foreground/60 mt-4"
      >
        <div>
          <strong className="mr-1">npm</strong> i @gllintjs/core
        </div>
        <div>
          <strong className="mr-1">npm</strong> i @gllintjs/react
        </div>
        <div>
          <strong className="uppercase mr-1">GET</strong> /api/avatar
        </div>
      </motion.div>
    </main>
  );
}
