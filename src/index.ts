import noConsole from './rules/no-console';
import recommended from './configs/recommended';

export const rules = {
  'no-console': noConsole
};

export const configs = {
  recommended
};

export default {
  rules,
  configs
} as const;
