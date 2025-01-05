import path from 'path';

import type { Config } from 'jest';

const rootDir = path.resolve(__dirname, `../..`, `src`);

const config: Config = {
  clearMocks: true,
  rootDir,
  testEnvironment: `jsdom`,
};

export default config;
