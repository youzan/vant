# Rate 评分

### 引入

```js
import Vue from 'vue';
import { Rate } from 'vant';

Vue.use(Rate);
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
      value: 3
    };
  }
}
```

### 自定义图标

```html
<van-rate
  v-model="value"
  icon="like"
  void-icon="like-o"
/>
```

### 自定义样式

```html
<van-rate
  v-model="value"
  :size="25"
  color="#ee0a24"
  void-icon="star"
  void-color="#eee"
/>
```

### 半星

```html
<van-rate
  v-model="value"
  allow-half
  void-icon="star"
  void-color="#eee"
/>
```

```js
export default {
  data() {
    return {
      value: 2.5
    };
  }
}
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
      Toast('当前值：'+ value);
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前分值 | *number* | - |
| count | 图标总数 | *number \| string* | `5` |
| size | 图标大小，默认单位为`px` | *number \| string* | `20px` |
| gutter | 图标间距，默认单位为`px` | *number \| string* | `4px` |
| color | 选中时的颜色 | *string* | `#ffd21e` |
| void-color | 未选中时的颜色 | *string* | `#c8c9cc` |
| disabled-color | 禁用时的颜色 | *string* | `#bdbdbd` |
| icon | 选中时的[图标名称](#/zh-CN/icon)或图片链接 | *string* | `star` |
| void-icon | 未选中时的[图标名称](#/zh-CN/icon)或图片链接 | *string* | `star-o` |
| icon-prefix `v2.5.3` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | *string* | `van-icon` |
| allow-half | 是否允许半选 | *boolean* | `false` |
| readonly | 是否为只读状态 | *boolean* | `false` |
| disabled | 是否禁用评分 | *boolean* | `false` |
| touchable `v2.2.0` | 是否可以通过滑动手势选择评分 | *boolean* | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当前分值变化时触发的事件 | 当前分值 |
