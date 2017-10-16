<p>
    <a href="https://github.com/youzan/"><img alt="有赞logo" width="36px" src="https://img.yzcdn.cn/public_files/2017/02/09/e84aa8cbbf7852688c86218c1f3bbf17.png" alt="youzan">
    </a>
</p>
<p align="center">
    <img alt="项目logo" src="https://img.yzcdn.cn/upload_files/2017/04/20/FlkVrSlOr-SGK9qQqtilN6-IFZyT.png">
</p>
<p align="center">A Vue.js 2.0 Mobile UI at YouZan</p>

[![Build Status](https://travis-ci.org/youzan/vant.svg?branch=master)](https://travis-ci.org/youzan/vant) [![Coverage Status](https://img.shields.io/codecov/c/github/youzan/vant/dev.svg)](https://codecov.io/github/youzan/vant?branch=dev) [![npm version](https://img.shields.io/npm/v/vant.svg?style=flat)](https://www.npmjs.com/package/vant) [![downloads](https://img.shields.io/npm/dt/vant.svg)](https://www.npmjs.com/package/vant) 
 
## 一、安装

```shell
npm i -S vant
```
 
## 二、使用
 
 
### 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { "libraryName": "vant", "style": true }]
     ]
   }
   ```
   
   接着你可以直接引入 vant 组件，等价于下方的按需引入组件

   ```js
   // 模块化地引入 js 和 css, 通过 babel-plugin-import 插件解析
   import { Button } from 'vant';
   ```

### 按需引入组件

   ```jsx
   import { Button } from 'vant/lib/button';
   import 'vant/lib/vant-css/button.css';
   ```
 
### 导入所有组件
 
```javascript
import Vue from 'vue';
import vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(vant);
```

## 三、贡献代码

修改代码请阅读我们的 [开发指南](./.github/contribute.zh-CN.md)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/youzan/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/youzan/vant/pulls)。

## 四、手机预览

可以手机扫码以下二维码访问手机端demo：

![zanui_vue_mobile_qrcode](https://img.yzcdn.cn/v2/image/youzanyun/zanui/pc/zanui_vue_mobile_preview_03.png)
 
## 五、开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
