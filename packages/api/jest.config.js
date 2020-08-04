module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/**/*.spec.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.test.json'
    }
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/setup/*',
    '!src/models/*',
    '!src/errors/*',
    '!src/routes/**',
    '!src/services/**',
    '!src/middlewares/**',
    '!src/server.ts'
  ],
  coverageThreshold: {
    './src/': {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
