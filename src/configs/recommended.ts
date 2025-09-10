import { Linter } from "eslint";

const recommended: Linter.Config = {
  plugins: {
     modern: {} 
  },
  rules: {
    "clean/no-console": "error"
  }
};

export default recommended;
