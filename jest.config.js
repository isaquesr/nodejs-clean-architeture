

module.exports = {
  roots: ['<rootDir>/src'],
  collectionCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**',
    '!**/test/**'
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transforme: {
    '.+\\.ts$': 'ts-jest'
  }

};
