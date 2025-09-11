"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = exports.rules = void 0;
const no_console_1 = __importDefault(require("./rules/no-console"));
const recommended_1 = __importDefault(require("./configs/recommended"));
exports.rules = {
    'no-console': no_console_1.default
};
exports.configs = {
    recommended: recommended_1.default
};
exports.default = {
    rules: exports.rules,
    configs: exports.configs
};
//# sourceMappingURL=index.js.map