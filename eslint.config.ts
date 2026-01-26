import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig([
  // -----------------------------------------------------
  // Global ignores
  // -----------------------------------------------------
  globalIgnores([
    "dist",
    "node_modules",
    "*.generated.*"
  ]),

  // -----------------------------------------------------
  // Base JS rules
  // -----------------------------------------------------
  js.configs.recommended,

  // -----------------------------------------------------
  // TypeScript + React (APPLICATION CODE)
  // -----------------------------------------------------
  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname
      },
      globals: globals.browser
    },

    plugins: {
      import: importPlugin
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.eslint.json"
        }
      }
    },

    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],

    rules: {
      // -------------------------------------------------
      // Type safety
      // -------------------------------------------------
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" }
      ],

      // -------------------------------------------------
      // React correctness
      // -------------------------------------------------
      "react-hooks/set-state-in-effect": "error",
      "react-hooks/exhaustive-deps": "warn",

      // -------------------------------------------------
      // Imports (STRICT)
      // -------------------------------------------------
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "type"
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],

      // -------------------------------------------------
      // Code quality
      // -------------------------------------------------
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error"
    }
  },

  // -----------------------------------------------------
  // Tooling / config files (lighter rules)
  // -----------------------------------------------------
  {
    files: ["*.config.ts", "eslint.config.ts"],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname
      }
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "import/order": "off"
    }
  }
]);
