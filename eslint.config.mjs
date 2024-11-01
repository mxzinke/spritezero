import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2018,
        sourceType: "commonjs",
    },

    rules: {
        "dot-notation": 2,
        eqeqeq: [2, "smart"],
        indent: [0, 4],
        "keyword-spacing": 2,
        "linebreak-style": [2, "unix"],
        "no-caller": 2,
        "no-catch-shadow": 2,
        "no-div-regex": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-label-var": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-process-env": 2,
        "no-proto": 2,
        "no-return-assign": 0,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow": 0,
        "no-shadow-restricted-names": 2,
        "no-throw-literal": 2,
        "no-unneeded-ternary": 2,
        "no-unused-expressions": 2,
        "no-unexpected-multiline": 2,
        "no-unused-vars": 1,
        "no-void": 2,
        "no-warning-comments": 1,
        "no-with": 2,
        "no-use-before-define": [0, "nofunc"],
        semi: [2, "always"],
        "semi-spacing": 2,
        "space-unary-ops": 2,
        "wrap-regex": 0,
        quotes: [2, "single"],
    },
}];