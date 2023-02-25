# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

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
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(true);
    return { checked };
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
<van-switch v-model="checked" size="22px" />
```

### 自定义颜色

`active-color` 属性表示打开时的背景色，`inactive-color` 表示关闭时的背景色。

```html
<van-switch v-model="checked" active-color="#ee0a24" inactive-color="#dcdee0" />
```

### 自定义按钮

通过 `node` 插槽自定义按钮的内容。

```html
<van-switch v-model="checked">
  <template #node>
    <div class="icon-wrapper">
      <van-icon :name="checked ? 'success' : 'cross'" />
    </div>
  </template>
</van-switch>

<style>
  .icon-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 18px;
  }

  .icon-wrapper .van-icon-success {
    line-height: 32px;
    color: var(--van-blue);
  }

  .icon-wrapper .van-icon-cross {
    line-height: 32px;
    color: var(--van-gray-5);
  }
</style>
```

### 异步控制

需要异步控制开关时，可以使用 `modelValue` 属性和 `update:model-value` 事件代替 `v-model`，并在事件回调函数中手动处理开关状态。

```html
<van-switch :model-value="checked" @update:model-value="onUpdateValue" />
```

```js
import { ref } from 'vue';
import { showConfirmDialog } from 'vant';

export default {
  setup() {
    const checked = ref(true);
    const onUpdateValue = (newValue) => {
      showConfirmDialog({
        title: '提醒',
        message: '是否切换开关？',
      }).then(() => {
        checked.value = newValue;
      });
    };

    return {
      checked,
      onUpdateValue,
    };
  },
};
```

### 搭配单元格使用

```html
<van-cell center title="标题">
  <template #right-icon>
    <van-switch v-model="checked" />
  </template>
</van-cell>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 开关选中状态 | _any_ | `false` |
| loading | 是否为加载状态 | _boolean_ | `false` |
| disabled | 是否为禁用状态 | _boolean_ | `false` |
| size | 开关按钮的尺寸，默认单位为 `px` | _number \| string_ | `26px` |
| active-color | 打开时的背景色 | _string_ | `#1989fa` |
| inactive-color | 关闭时的背景色 | _string_ | `rgba(120, 120, 128, 0.16)` |
| active-value | 打开时对应的值 | _any_ | `true` |
| inactive-value | 关闭时对应的值 | _any_ | `false` |

### Events

| 事件名 | 说明               | 回调参数            |
| ------ | ------------------ | ------------------- |
| change | 开关状态切换时触发 | _value: any_        |
| click  | 点击时触发         | _event: MouseEvent_ |

### Slots

| 名称       | 说明                 | 参数 |
| ---------- | -------------------- | ---- |
| node       | 自定义按钮的内容     | -    |
| background | 自定义开关的背景内容 | -    |

### 类型定义

组件导出以下类型定义：

```ts
import type { SwitchProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                          | 默认值                            | 描述 |
| ----------------------------- | --------------------------------- | ---- |
| --van-switch-size             | _26px_                            | -    |
| --van-switch-width            | _calc(1.8em + 4px)_               | -    |
| --van-switch-height           | _calc(1em + 4px)_                 | -    |
| --van-switch-node-size        | _1em_                             | -    |
| --van-switch-node-background  | _var(--van-white)_                | -    |
| --van-switch-node-shadow      | _0 3px 1px 0 rgba(0, 0, 0, 0.05)_ | -    |
| --van-switch-background       | _rgba(120, 120, 128, 0.16)_       | -    |
| --van-switch-on-background    | _var(--van-primary-color)_        | -    |
| --van-switch-duration         | _var(--van-duration-base)_        | -    |
| --van-switch-disabled-opacity | _var(--van-disabled-opacity)_     | -    |
