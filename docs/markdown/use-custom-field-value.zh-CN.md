# useCustomFieldValue

### 介绍

用于自定义 Form 组件中的表单项。

## 代码演示

### 基本用法

如果需要自定义表单项，可以在 Field 组件的 `input` 插槽中插入你的自定义组件，并在自定义组件内部调用 `useCustomFieldValue` 方法。

#### 自定义组件

首先，在你的自定义组件中，调用 `useCustomFieldValue` 方法，并传入一个回调函数，这个函数返回值为表单项的值。

```js
// MyComponent.vue
import { useCustomFieldValue } from '@vant/use';

export default {
  setup() {
    // 此处传入的值会替代 Field 组件内部的 value
    useCustomFieldValue(() => 'Some value');
  },
};
```

#### 表单

接着，在 Form 组件中嵌入你的自定义组件，当提交表单时，即可获取到自定义表单项的值。

```html
<van-form>
  <!-- 这是一个自定义表单项 -->
  <!-- 当表单提交时，会包括 useCustomFieldValue 中传入的值 -->
  <van-field name="my-field" label="自定义表单项">
    <template #input>
      <my-component />
    </template>
  </van-field>
</van-form>
```

## API

### 类型定义

```ts
function useCustomFieldValue(customValue: () => unknown): void;
```

### 参数

| 参数        | 说明               | 类型            | 默认值 |
| ----------- | ------------------ | --------------- | ------ |
| customValue | 获取表单项值的函数 | _() => unknown_ | -      |
