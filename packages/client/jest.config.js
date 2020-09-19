module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.test.json',
      diagnostics: false
    }
  },
  testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/src/test-setup.ts'],
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/**/stories.{ts,tsx}',
    'src/utils/*.ts',
    '!src/utils/redirect.ts'
  ]
};
