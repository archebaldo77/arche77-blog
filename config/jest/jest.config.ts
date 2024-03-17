import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  moduleFileExtensions: [`tsx`, `ts`, `js`, `json`],
  testEnvironment: `jsdom`,
  runner: `jest-runner`,
  rootDir: `../..`,
  testMatch: [`<rootDir>src/**/*(*.)@(spec|test).[jt]s?(x)`],
  moduleNameMapper: {
    '\\.s?css$': `identity-obj-proxy`,
    '^@/(.*)$': `<rootDir>src/$1`,
  },
  setupFilesAfterEnv: [`<rootDir>/config/jest/jest-setup.ts`],
};

export default config;
