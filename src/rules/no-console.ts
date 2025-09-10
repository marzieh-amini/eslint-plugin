import { ESLintUtils, TSESTree } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/marzieh-amini/eslint-plugin-modern/docs/rules/${name}.md`
);

type MessageIds = "unexpectedConsole";

export default createRule<[], MessageIds>({
  name: "no-console",
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of console statements in production code"
    },
    messages: {
      unexpectedConsole:
        "Avoid using console.{{method}}. It should be removed or replaced before committing production code."
    },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    return {
      MemberExpression(node: TSESTree.MemberExpression) {
        if (node.object.type === "Identifier" && node.object.name === "console") {
          const prop = node.property;
          const method =
            prop.type === "Identifier" ? prop.name : context.getSourceCode().getText(prop);

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
