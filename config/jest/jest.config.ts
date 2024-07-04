import { type Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testEnvironment: `jsdom`,
  rootDir: `../..`,
  testMatch: [`<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)`],
  testPathIgnorePatterns: [`\\\\node_modules\\\\`],
  moduleFileExtensions: [`ts`, `tsx`, `js`, `json`],
  moduleNameMapper: {
    '^@/(.*)$': `<rootDir>/src/$1`,
  },
};

export default config;
