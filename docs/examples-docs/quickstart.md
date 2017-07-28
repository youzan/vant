## Vant

一套基于`Vue.js 2.0`的 Mobile 组件库

[查看业务组件库 Captain-UI](/zanui/captain/component/quickstart)

### 安装

```shell
npm i vant -S
```

### 引入组件

#### 完整引入

```javascript
import Vue from 'vue';
import ZanUI from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(ZanUI);
```

#### 按需引入

```javascript
import Vue from 'vue';
import { Button, Cell } from 'vant';
import 'vant/lib/vant-css/button.css';
import 'vant/lib/vant-css/cell.css';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
```

### 自定义主题

`Vant`默认提供一套主题，`CSS`命名采用`BEM`的风格方便使用者覆盖样式。如果你想完全替换主题色或者部分样式，可以使用下面的方法：

#### 下载主题

可以通过Github或npm来下载主题：

```shell
# npm
npm i vant-css -D

# github
git clone git@github.com:youzan/vant.git
cd packages/vant-css
```

#### 修改主题

修改你下载主题对应的样式即可，然后引入你修改后的主题。

