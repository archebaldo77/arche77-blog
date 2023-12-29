import path from 'path';

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  moduleFileExtensions: [`ts`, `tsx`, `jsx`, `js`, `json`],
  moduleNameMapper: {
    '^@/(.*)$': `<rootDir>/src/$1`,
    '\\.(s?css)$': `identity-obj-proxy`,
    '\\.svg': path.resolve(__dirname, `jest-mock-empty-component.tsx`),
  },
  rootDir: `../../`,
  roots: [`<rootDir>`],
  testEnvironment: `jsdom`,
  testMatch: [`/**/__tests__/**/*.[jt]s?(x)`, `**/?(*.)+(spec|test).[tj]s?(x)`],
  testPathIgnorePatterns: [`\\\\node_modules\\\\`],
  setupFilesAfterEnv: [`<rootDir>/config/jest/jest-setup.ts`],
};

export default config;
