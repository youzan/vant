## 快速上手

### 完整引入

```js
import Vue from 'vue';
import ZanUI from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/index.css';

Vue.use(ZanUI);
```

### 按需引入

```js
import Vue from 'vue';
import { Button, Cell } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/button.css';
import '@youzan/zanui-vue/lib/zanui-css/cell.css';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
```
