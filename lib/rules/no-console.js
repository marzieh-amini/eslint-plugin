"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://github.com/marzieh-amini/eslint-plugin-modern/docs/rules/${name}.md`);
exports.default = createRule({
    name: "no-console",
    meta: {
        type: "problem",
        docs: {
            description: "Disallow usage of console statements in production code"
        },
        messages: {
            unexpectedConsole: "Avoid using console.{{method}}. It should be removed or replaced before committing production code."
        },
        schema: []
    },
    defaultOptions: [],
    create(context) {
        return {
            MemberExpression(node) {
                if (node.object.type === "Identifier" && node.object.name === "console") {
                    const prop = node.property;
                    const method = prop.type === "Identifier" ? prop.name : context.getSourceCode().getText(prop);
                    context.report({
                        node,
                        messageId: "unexpectedConsole",
                        data: { method }
                    });
                }
            }
        };
    }
});
//# sourceMappingURL=no-console.js.map