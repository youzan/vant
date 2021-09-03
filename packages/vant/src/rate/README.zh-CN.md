# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Rate } from 'vant';

const app = createApp();
app.use(Rate);
```

## 代码演示

### 基础用法

通过 `v-model` 来绑定当前评分值。

```html
<van-rate v-model="value" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(3);
    return { value };
  },
};
```

### 自定义图标

通过 `icon` 属性设置选中时的图标，`void-icon` 属性设置未选中时的图标。

```html
<van-rate v-model="value" icon="like" void-icon="like-o" />
```

### 自定义样式

通过 `size` 属性设置图标大小，`color` 属性设置选中时的颜色，`void-color` 设置未选中时的颜色。

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

设置 `allow-half` 属性后可以选中半星。

```html
<van-rate v-model="value" allow-half />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(2.5);
    return { value };
  },
};
```

### 自定义数量

通过 `count` 属性设置评分总数。

```html
<van-rate v-model="value" :count="6" />
```

### 禁用状态

通过 `disabled` 属性来禁用评分。

```html
<van-rate v-model="value" disabled />
```

### 只读状态

通过 `readonly` 属性将评分设置为只读状态。

```html
<van-rate v-model="value" readonly />
```

### 只读状态显示小数

设置 `readonly` 和 `allow-half` 属性后，Rate 组件可以展示任意小数结果。

```html
<van-rate v-model="value" readonly allow-half />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(3.3);
    return { value };
  },
};
```

### 监听 change 事件

评分变化时，会触发 `change` 事件。

```html
<van-rate v-model="value" @change="onChange" />
```

```javascript
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const value = ref(3);
    const onChange = (value) => Toast('当前值：' + value);
    return {
      value,
      onChange,
    };
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
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| allow-half | 是否允许半选 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法修改评分 | _boolean_ | `false` |
| disabled | 是否禁用评分 | _boolean_ | `false` |
| touchable | 是否可以通过滑动手势选择评分 | _boolean_ | `true` |

### Events

| 事件名 | 说明                     | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当前分值变化时触发的事件 | 当前分值 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                           | 默认值                    | 描述 |
| ------------------------------ | ------------------------- | ---- |
| --van-rate-icon-size           | _20px_                    | -    |
| --van-rate-icon-gutter         | _var(--van-padding-base)_ | -    |
| --van-rate-icon-void-color     | _var(--van-gray-5)_       | -    |
| --van-rate-icon-full-color     | _var(--van-danger-color)_ | -    |
| --van-rate-icon-disabled-color | _var(--van-gray-5)_       | -    |
