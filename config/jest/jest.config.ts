import path from 'path';

import type { Config } from 'jest';

const rootDir = path.resolve(__dirname, `../..`);

const config: Config = {
  rootDir,
  clearMocks: true,
  testEnvironment: `jsdom`,
  moduleNameMapper: {
    '\\.s?css$': `identity-obj-proxy`,
    '\\.svg$': `<rootDir>/config/jest/jest-svg-mock.tsx`,
    '^@/(.*)$': `<rootDir>/src/$1`,
  },
  setupFilesAfterEnv: [`<rootDir>/config/jest/jest-setup.ts`],
};

export default config;
