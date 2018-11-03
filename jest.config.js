module.exports = {
  setupFiles: ['<rootDir>/test/jest.init.js'],
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/test/jest.transform.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^packages/(.*)$': '<rootDir>/packages/$1'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverageFrom: [
    'packages/**/*.{js,vue}',
    '!**/style/**',
    '!**/demo/**',
    '!**/locale/lang/**',
    '!**/sku/**',
    '!**/waterfall/**',
    '!**/icon/config/**'
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './test/coverage'
};
