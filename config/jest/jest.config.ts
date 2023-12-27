import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  moduleFileExtensions: [`ts`, `tsx`, `jsx`, `js`, `json`],
  moduleNameMapper: {
    '^@/(.*)$': `<rootDir>/src/$1`,
  },
  rootDir: `../../`,
  roots: [`<rootDir>`],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
};

export default config;
