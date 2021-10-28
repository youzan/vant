/**
 * @babel/preset-typescript 不支持编译 Vue 文件中的 ts 代码
 * 通过手动添加 @babel/plugin-transform-typescript 的方式来解决这个问题
 * see: https://github.com/babel/babel-loader/pull/738
 */

const { readFileSync } = require('fs');
const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare(() => ({
  overrides: [
    {
      test: (filePath) => {
        if (/\.vue$/.test(filePath)) {
          const template = readFileSync(filePath, { encoding: 'utf8' });
          return (
            template.includes('lang="ts"') || template.includes("lang='ts'")
          );
        }

        return false;
      },
      plugins: [require('@babel/plugin-transform-typescript')],
    },
  ],
}));
