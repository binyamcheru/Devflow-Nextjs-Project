import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

//  assign to a named variable
const eslintConfig = [
  // Extend Next.js + Prettier configs
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  {
    languageOptions: {
      globals: {
        React: "writable", // avoids no-undef in JSX
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "out/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
