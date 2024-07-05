// libraries;
import path from 'path';

// types;
import { type Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testEnvironment: `jsdom`,
  rootDir: `../..`,
  testMatch: [`<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)`],
  testPathIgnorePatterns: [`\\\\node_modules\\\\`],
  moduleFileExtensions: [`ts`, `tsx`, `js`, `json`],
  moduleNameMapper: {
    '\\.s?css$': `identity-obj-proxy`,
    '\\.(svg)$': path.resolve(__dirname, `jest-svg-mock.tsx`),
    '^@/(.*)$': `<rootDir>/src/$1`,
  },
  setupFilesAfterEnv: [`<rootDir>/config/jest/jest-setup.ts`],
};

export default config;
