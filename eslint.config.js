import { FlatConfig } from "eslint";

/** @type {FlatConfig[]} */
const config = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
    },
    rules: {
      "react/prop-types": "off",
      "react/display-name": "off",
    },
  },
];

export default config;