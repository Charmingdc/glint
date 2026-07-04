export const hashSeed = (seed: string): number => {
  if (seed.length === 0) {
    throw new Error("Seed must not be empty.");
  }

  let hash = 5381;

  for (const char of seed) {
    hash = ((hash << 5) + char.charCodeAt(0)) >>> 0;
  }

  return hash;
};
