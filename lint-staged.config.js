// @ts-check

/** @type {import("lint-staged").Config} */
export default {
  "*": "prettier --write --ignore-unknown",
  "*.{ts,tsx,cts,mts}": "lint-staged-tsc"
};
