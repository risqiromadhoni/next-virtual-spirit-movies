module.exports = {
  "**/*.(ts|tsx)": () => "pnpm tsc --noEmit",
  "src/*.(ts|tsx)": filenames => `pnpm run lint:fix ${filenames.join(" ")}`,
  "**/*.(ts|tsx|js)": filenames => [
    `pnpm eslint ${filenames.join(" ")} --fix`,
    `pnpm run format:write ${filenames.join(" ")}`,
  ],
  "**/*.(json)": filenames => `pnpm run format:write ${filenames.join(" ")}`,
};
