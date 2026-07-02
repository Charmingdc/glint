import { hashSeed } from "./hash";
import { getInitials } from "./initials";

import type { AvatarOptions } from "../types";

const generateAvatar = ({
 seed,
 initials,
 size = 128,
 rounded = false,
 font = "Inter",
 noise = true,
 glass = true
}: AvatarOptions) => {
 if (!seed.trim()) throw new Error("Please provide a non-empty seed.");

 const hash = hashSeed(seed);
 return hash;
};
