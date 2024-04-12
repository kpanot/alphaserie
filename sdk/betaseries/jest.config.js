/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  displayName: require('./package.json').name,
  preset: 'ts-jest',
  rootDir: '.',
  roots: ['<rootDir>/src/'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '<rootDir>/dist-test', suiteName: '@sdk/betaseries unit tests' }]
  ],
  moduleNameMapper: {
    '^@sdk/betaseries$': ['<rootDir>/src'],
    '^@sdk/betaseries/(.*)$': ['<rootDir>/src/$1'],
  },
  transform: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/testing/tsconfig.spec.json',
        isolatedModules: true,
        stringifyContentPathRegex: '\\.html$',
      }
    ]
  }
};
