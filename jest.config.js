

module.exports = {
  roots: ['<rootDir>/src'],
  collectionCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transforme: {
    '.+\\.ts$': 'ts-jest'
  }

};
