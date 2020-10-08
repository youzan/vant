# SwitchCell 开关单元格

### 废弃提示

<b>SwitchCell 组件将在 3.0 版本中废弃</b>，请直接使用 Cell 和 Switch 组件代替，替换写法如下：

```html
<van-cell center title="标题">
  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
```

### 引入

```js
import Vue from 'vue';
import { SwitchCell } from 'vant';

Vue.use(SwitchCell);
```

## 代码演示

### 基础用法

```html
<van-cell-group>
  <van-switch-cell v-model="checked" title="标题" />
</van-cell-group>
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

通过 `disabled` 属性可以将组件设置为禁用状态。

```html
<van-cell-group>
  <van-switch-cell v-model="checked" disabled title="标题" />
</van-cell-group>
```

### 加载状态

通过 `loading` 属性可以将组件设置为加载状态。

```html
<van-cell-group>
  <van-switch-cell v-model="checked" loading title="标题" />
</van-cell-group>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 开关状态 | _any_ | `false` |
| title | 左侧标题 | _string_ | `''` |
| border | 是否展示单元格内边框 | _boolean_ | `true` |
| cell-size | 单元格大小，可选值为 `large` | _string_ | - |
| loading | 是否为加载状态 | _boolean_ | `false` |
| disabled | 是否为禁用状态 | _boolean_ | `false` |
| size | 开关尺寸 | _number \| string_ | `24px` |
| active-color | 开关时的背景色 | _string_ | `#1989fa` |
| inactive-color | 开关时的背景色 | _string_ | `white` |
| active-value | 打开时的值 | _any_ | `true` |
| inactive-value | 关闭时的值 | _any_ | `false` |

### Events

| 事件名 | 说明             | 回调参数              |
| ------ | ---------------- | --------------------- |
| change | 开关状态切换回调 | checked: 是否选中开关 |
