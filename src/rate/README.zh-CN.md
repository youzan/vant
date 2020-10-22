# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

```js
import { createApp } from 'vue';
import { Rate } from 'vant';

const app = createApp();
app.use(Rate);
```

## 代码演示

### 基础用法

```html
<van-rate v-model="value" />
```

```js
export default {
  data() {
    return {
      value: 3,
    };
  },
};
```

### 自定义图标

```html
<van-rate v-model="value" icon="like" void-icon="like-o" />
```

### 自定义样式

```html
<van-rate
  v-model="value"
  :size="25"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
/>
```

### 半星

```html
<van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
```

```js
export default {
  data() {
    return {
      value: 2.5,
    };
  },
};
```

### 自定义数量

```html
<van-rate v-model="value" :count="6" />
```

### 禁用状态

```html
<van-rate v-model="value" disabled />
```

### 只读状态

```html
<van-rate v-model="value" readonly />
```

### 监听 change 事件

```html
<van-rate v-model="value" @change="onChange" />
```

```javascript
export default {
  method: {
    onChange(value) {
      Toast('当前值：' + value);
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前分值 | _number_ | - |
| count | 图标总数 | _number \| string_ | `5` |
| size | 图标大小，默认单位为`px` | _number \| string_ | `20px` |
| gutter | 图标间距，默认单位为`px` | _number \| string_ | `4px` |
| color | 选中时的颜色 | _string_ | `#ee0a24` |
| void-color | 未选中时的颜色 | _string_ | `#c8c9cc` |
| disabled-color | 禁用时的颜色 | _string_ | `#c8c9cc` |
| icon | 选中时的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `star` |
| void-icon | 未选中时的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `star-o` |
| icon-prefix `v2.5.3` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| allow-half | 是否允许半选 | _boolean_ | `false` |
| readonly | 是否为只读状态  | _boolean_ | `false` |
| disabled | 是否禁用评分 | _boolean_ | `false` |
| touchable | 是否可以通过滑动手势选择评分 | _boolean_ | `true` |

### Events

| 事件名 | 说明                     | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当前分值变化时触发的事件 | 当前分值 |
