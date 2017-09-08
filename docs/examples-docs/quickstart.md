## Vant

基于`Vue 2.0`的 Mobile 组件库

### 安装

```shell
npm i vant -S
```

### 引入组件

#### 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

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

#### 按需引入组件

   ```jsx
   import { Button } from 'vant/lib/button';
   import 'vant/lib/vant-css/button.css';
   ```
 
#### 导入所有组件
 
```javascript
import Vue from 'vue';
import vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(vant);
```

### 自定义主题

`Vant`提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者部分样式，可以使用下面的方法：

#### 下载主题

可以通过 Github 或 npm 来下载主题：

```bash
# npm
npm i vant-css -D

# github
git clone git@github.com:youzan/vant.git
cd packages/vant-css
```

#### 修改主题

修改你下载主题对应的样式即可，然后引入你修改后的主题。

### vue-cli模板

可以使用`vue-cli`来初始化`vant`的通用模板：

```shell
vue init youzan/vue-cli-template-vant projectName
```
