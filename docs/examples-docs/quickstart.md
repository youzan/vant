## Vant

一套`Vue 2.0`的基础组件。
A collection of essential UI components written with Vue 2.0.

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
