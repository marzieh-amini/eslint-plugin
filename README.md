# 📦 eslint-plugin-modern

A modern **ESLint plugin** for **React + TypeScript** projects 🚀
This plugin provides reusable ESLint rules and configurations to improve code quality and catch common issues.

---

## ✨ Features

* 🔒 Prevent usage of `console.log` in production code
* 📦 Enforce clean and consistent `import` statements
* 📝 Type-checking with **TypeScript**
* 🔤 Built-in **spell-check support**
* ⚡ Easy to integrate into any React + TypeScript project

---

## 📦 Installation

Using **pnpm**:

```sh
pnpm add -D eslint eslint-plugin-modern @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Using **npm**:

```sh
npm install -D eslint eslint-plugin-modern @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

---

## ⚙️ Configuration

Create an `eslint.config.js` file at the root of your project:

```js
// eslint.config.js
import tsParser from "@typescript-eslint/parser";
import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import modern from "eslint-plugin-modern/configs/recommended.js";

export default [
  {
    ignores: ["dist/**", "build/**"],
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTs,
      modern,
    },
    rules: {
      ...modern.rules,
    },
  },
];
```

---

## 🚀 Usage

Run ESLint in your project:

```sh
pnpm eslint . --ext .ts,.tsx
```

Or add a script to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx"
  }
}
```

Then run:

```sh
pnpm lint
```

---

## 📏 Default Rules

| Rule                   | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `modern/no-console`    | Disallow usage of `console.log` with clear error |
| `import/order`         | Enforce a consistent order for import statements |
| `@typescript-eslint/*` | Recommended TypeScript linting rules             |

---

## 🛠 Development & Contribution

Clone the repository:

```sh
git clone https://github.com/yourname/eslint-plugin-modern.git
cd eslint-plugin-modern
pnpm install
```

Build the project:

```sh
pnpm build
```

Lint the source:

```sh
pnpm lint
```

---

## 📦 Release (Maintainers)

Releases are managed with [release-it](https://github.com/release-it/release-it).
To create a new release:

```sh
pnpm release
```

---

## 📄 License

MIT © [Your Name](https://github.com/marzieh-amini)
