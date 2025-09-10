# eslint-plugin-modern

Install:
pnpm add -D eslint-plugin-modern

Usage (.eslintrc.cjs):
module.exports = {
  extends: ['plugin:modern/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'], tsconfigRootDir: __dirname },
  plugins: ['@cspell']
}

Rules included:
- modern/no-console
- plus recommended import rules and cspell integration
