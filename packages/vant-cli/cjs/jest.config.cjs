const { join } = require('path');
const { existsSync } = require('fs');
const { ROOT } = require('./shared.cjs');

const JEST_SETUP_FILE = join(__dirname, 'jest.setup.cjs');
const JEST_FILE_MOCK_FILE = join(__dirname, 'jest.file-mock.cjs');
const JEST_STYLE_MOCK_FILE = join(__dirname, 'jest.style-mock.cjs');

const DEFAULT_CONFIG = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': JEST_STYLE_MOCK_FILE,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      JEST_FILE_MOCK_FILE,
  },
  setupFilesAfterEnv: [JEST_SETUP_FILE],
  moduleFileExtensions: ['js', 'jsx', 'vue', 'ts', 'tsx'],
  transform: {
    '\\.(js|jsx|ts|tsx|vue)$':
      '<rootDir>/node_modules/@vant/cli/cjs/jest.transformer.cjs',
  },
  transformIgnorePatterns: ['/node_modules/(?!(@vant/cli))/'],
  snapshotSerializers: ['jest-serializer-html'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx,vue}',
    '!**/demo/**',
    '!**/test/**',
  ],
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './test/coverage',
  testEnvironmentOptions: {
    // https://stackoverflow.com/questions/72428323/jest-referenceerror-vue-is-not-defined
    customExportConditions: ['node', 'node-addons'],
  },
};

function readRootConfig() {
  const ROOT_CONFIG_PATH = join(ROOT, 'jest.config.js');

  if (existsSync(ROOT_CONFIG_PATH)) {
    return require(ROOT_CONFIG_PATH);
  }

  return {};
}

module.exports = {
  ...DEFAULT_CONFIG,
  ...readRootConfig(),
};
