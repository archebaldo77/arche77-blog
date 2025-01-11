import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import eslintConfigPrettier from 'eslint-config-prettier';
import storybook from 'eslint-plugin-storybook';

export default [
  { files: [`./src/**/*.{tsx,ts}`] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs[`flat/recommended`],
  ...storybook.configs[`flat/recommended`],
  {
    rules: {
      'react/react-in-jsx-scope': `off`,
      'react/no-deprecated': `warn`,
      'react/display-name': `off`,
    },
  },
  {
    ignores: [`./src/**/*.test.{ts,tsx}`],
    rules: {
      'i18next/no-literal-string': `off`,
    },
  },
  eslintConfigPrettier,
];
