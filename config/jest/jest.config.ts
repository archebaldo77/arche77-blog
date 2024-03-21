import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  clearMocks: true,
  moduleFileExtensions: [`tsx`, `ts`, `js`, `json`],
  testEnvironment: `jsdom`,
  runner: `jest-runner`,
  rootDir: `../..`,
  testMatch: [`<rootDir>src/**/*(*.)@(spec|test).[jt]s?(x)`],
  moduleNameMapper: {
    '\\.s?css$': `identity-obj-proxy`,
    '\\.svg': path.resolve(__dirname, `jest-mock-component.tsx`),
    '^@/(.*)$': `<rootDir>src/$1`,
  },
  setupFilesAfterEnv: [`<rootDir>/config/jest/jest-setup.ts`],
  globals: {
    __IS_DEV__: false,
  },
};

export default config;
