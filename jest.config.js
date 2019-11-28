module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'vue', 'ts', 'tsx'],
  transform: {
    '\\.(vue)$': 'vue-jest',
    '\\.(js|jsx|ts|tsx)$': '<rootDir>/test/transformer.js',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx,vue}',
    '!**/style/**',
    '!**/demo/**',
    '!**/locale/lang/**',
    '!**/sku/**'
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './test/coverage'
};
