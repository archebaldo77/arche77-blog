import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { files: [`./src/**/*.{tsx,ts}`] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs[`flat/recommended`],
  {
    rules: {
      'react/react-in-jsx-scope': `off`,
      'react/no-deprecated': `warn`,
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
