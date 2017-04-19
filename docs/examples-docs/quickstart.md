## 快速上手

### 完整引入

```javascript
import Vue from 'vue';
import ZanUI from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(ZanUI);
```

### 按需引入

```javascript
import Vue from 'vue';
import { Button, Cell } from 'vant';
import 'vant/lib/vant-css/button.css';
import 'vant/lib/vant-css/cell.css';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
```
