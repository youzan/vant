# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

```js
import { createApp } from 'vue';
import { Switch } from 'vant';

const app = createApp();
app.use(Switch);
```

## 代码演示

### 基础用法

通过 `v-model` 绑定开关的选中状态，`true` 表示开，`false` 表示关。

```html
<van-switch v-model="checked" />
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```html
<van-switch v-model="checked" disabled />
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```html
<van-switch v-model="checked" loading />
```

### 自定义大小

通过 `size` 属性自定义开关的大小。

```html
<van-switch v-model="checked" size="24px" />
```

### 自定义颜色

`active-color` 属性表示打开时的背景色，`inactive-color` 表示关闭时的背景色。

```html
<van-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />
```

### 异步控制

需要异步控制开关时，可以使用 `modelValue` 属性和 `update:model-value` 事件代替 `v-model`，并在事件回调函数中手动处理开关状态。

```html
<van-switch :model-value="checked" @update:model-value="onUpdateValue" />
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    onUpdateValue(checked) {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？',
      }).then(() => {
        this.checked = checked;
      });
    },
  },
};
```

### 搭配单元格使用

```html
<van-cell center title="标题">
  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
```

## API

### Props

| 参数           | 说明                     | 类型               | 默认值    |
| -------------- | ------------------------ | ------------------ | --------- |
| v-model        | 开关选中状态             | _any_              | `false`   |
| loading        | 是否为加载状态           | _boolean_          | `false`   |
| disabled       | 是否为禁用状态           | _boolean_          | `false`   |
| size           | 开关尺寸，默认单位为`px` | _number \| string_ | `30px`    |
| active-color   | 打开时的背景色           | _string_           | `#1989fa` |
| inactive-color | 关闭时的背景色           | _string_           | `white`   |
| active-value   | 打开时对应的值           | _any_              | `true`    |
| inactive-value | 关闭时对应的值           | _any_              | `false`   |

### Events

| 事件名 | 说明               | 回调参数       |
| ------ | ------------------ | -------------- |
| change | 开关状态切换时触发 | _value: any_   |
| click  | 点击时触发         | _event: Event_ |
