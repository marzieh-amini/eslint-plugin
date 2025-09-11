import { Linter } from "eslint";

const recommended: Linter.Config = {
  plugins: {
    modern: {},
    "@cspell": {},
  },
  rules: {
    "modern/no-console": "error",
    "@cspell/spellchecker": [
      "warn",
      {
        checkComments: true,
        checkStrings: true,
        checkIdentifiers: false,
        cspell: {
          language: "en-US",
          ignoreRegExpList: [/[\u0600-\u06FF]/g],
        },
      },
    ],
  },
};

export default recommended;
