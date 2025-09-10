// src/rules/no-console.ts
import { ESLintUtils, TSESTree } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/yourname/eslint-plugin-yourname/docs/rules/${name}.md`
);

type MessageIds = "unexpectedConsole";

export default createRule<[], MessageIds>({
  name: "no-console",
  meta: {
    type: "problem",
    docs: {
      description: "Disallow use of console.* (custom rule)",
    },
    messages: {
      unexpectedConsole: "Unexpected console.{{method}} usage.",
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      MemberExpression(node: TSESTree.MemberExpression) {
        if (
          node.object.type === "Identifier" &&
          node.object.name === "console"
        ) {
          const prop = node.property;
          const method =
            prop.type === "Identifier"
              ? prop.name
              : context.getSourceCode().getText(prop);
          context.report({
            node,
            messageId: "unexpectedConsole",
            data: { method },
          });
        }
      },
    };
  },
});
