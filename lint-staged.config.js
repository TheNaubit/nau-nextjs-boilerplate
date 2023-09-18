module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "nr typecheck",

  // This will lint and format TypeScript and                                             //JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `nlx eslint --fix ${filenames.join(" ")}`,
    `nlx prettier --write ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `nlx prettier --write ${filenames.join(" ")}`,
}
