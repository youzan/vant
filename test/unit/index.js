require('packages/vant-css/src/index.css');

// require all test files (files that ends with .spec.js)
const testsReq = require.context('./specs', true, /\.spec$/);
testsReq.keys().forEach(testsReq);
