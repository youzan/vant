module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx,vue}',
    '!**/demo/**',
    '!**/test/**',
    '!**/lang/**',
  ],
  moduleNameMapper: {
    '^@demo(.*)$': '<rootDir>/docs/site$1',
  },
};
