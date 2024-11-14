import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import typescriptPlugin from "@typescript-eslint/eslint-plugin"; // Plugin TypeScript
import tsParser from "@typescript-eslint/parser"; // Parser TypeScript

export default [
  // Configurações para TypeScript
  {
    extends: [prettierPlugin],
    files: ["*.ts", "*.tsx"], // Aplica às extensões de TypeScript
    languageOptions: {
      parser: tsParser, // Parser para TypeScript
      globals: {
        ...globals.node, // Node.js environment
      },
      parserOptions: {
        project: "./tsconfig.json", // Garante que o TypeScript siga as configurações do projeto
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin, // Plugin para linting de TypeScript
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Aviso para variáveis não usadas em TypeScript
      "no-console": ["warn", { allow: ["warn", "error"] }], // Permite apenas console.warn e console.error
      "prettier/prettier": ["error", {
        singleQuote: false,
        semi: true,
        trailingComma: "es5",
        endOfLine: "auto",
        tabWidth: 2
      }], // Aplica as regras do Prettier
    },
  },

  // Configuração geral do Node.js se utilizado com JavaScript:
  /*
  {
    files: ["*.js", "*.mjs"], // Aplica às extensões de JavaScript
    languageOptions: {
      globals: {
        ...globals.node, // Node.js environment
      },
    },
    plugins: {
      prettier: prettierPlugin, // Plugin do Prettier para formatação
    },
    rules: {
      "no-unused-vars": "warn", // Aviso para variáveis não usadas em JavaScript
      "no-console": ["warn", { allow: ["warn", "error"] }], // Permite apenas console.warn e console.error
      "prettier/prettier": ["error", {
        singleQuote: false,
        semi: true,
        trailingComma: "es5",
        endOfLine: "lf",
        tabWidth: 2
      }], // Aplica as regras do Prettier
    },
  },
  */

  // Configurações comuns ao JavaScript e TypeScript
  pluginJs.configs.recommended, // Configurações recomendadas do ESLint para JS
  prettierConfig, // Configurações do Prettier para evitar conflitos de formatação
];
