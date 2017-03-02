require('packages/zanui-css/src/index.css');

// require all test files (files that ends with .spec.js)
const testsReq = require.context('./specs', true, /\.spec$/);
testsReq.keys().forEach(testsReq);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcReq = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcReq.keys().forEach(srcReq);
