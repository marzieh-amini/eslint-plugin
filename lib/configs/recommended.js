"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recommended = {
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
exports.default = recommended;
//# sourceMappingURL=recommended.js.map