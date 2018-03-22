## Icon 图标

### 使用指南
``` javascript
import { Icon } from 'vant';

Vue.use(Icon);
```

### 代码演示

#### 基础用法
设置`name`属性为对应的图标名称即可，所有可用的图标名称见右侧列表

```html
<van-icon name="success" />
```

#### 使用本地字体文件
Icon 组件默认引用 `yzcdn.cn` 域名下的字体文件，如果想要使用本地字体文件，请引入下面的 css 文件

```js
import 'vant/lib/vant-css/icon-local.css';
```


### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 图标名称 | `String` | `''` | - |
| info | 图标右上角文字提示 | `String` | `''` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击图标时触发 | - |
