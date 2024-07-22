import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { files: ["**/*.{js,cjs}"] },
  {
    languageOptions: { globals: globals.browser, ecmaFeatures: { jsx: false } },
  },
  pluginReactConfig,
];
