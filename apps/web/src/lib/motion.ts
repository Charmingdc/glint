import type { Variants } from "motion/react";

export const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease },
  }),
};
