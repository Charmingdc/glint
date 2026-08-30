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
    <main className="w-full max-w-3xl flex flex-col items-center text-center px-8 py-16">
      <motion.h2
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
      >
        Key features
      </motion.h2>

      <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature}
            custom={i + 2}
            initial="hidden"
            animate="show"
            variants={fade}
            className="rounded-xl border border-white/10 bg-card p-5 text-left transition-colors hover:border-white/20"
          >
            <span className="text-xs font-medium tabular-nums text-foreground/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
              {feature}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
