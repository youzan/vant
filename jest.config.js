module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/packages/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx,vue}',
    '!**/demo/**',
    '!**/test/**',
    '!**/lang/**',
  ],
};
