# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Loading } from 'vant';

const app = createApp();
app.use(Loading);
```

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner`。

```html
<van-loading />

<van-loading type="spinner" />
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```html
<van-loading color="#1989fa" />

<van-loading type="spinner" color="#1989fa" />
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认单位为 `px`。

```html
<van-loading size="24" />

<van-loading type="spinner" size="24px" />
```

### 加载文案

可以使用默认插槽在图标的右侧插入加载文案。

```html
<van-loading size="24px">加载中...</van-loading>
```

### 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```html
<van-loading size="24px" vertical>加载中...</van-loading>
```

### 自定义文案颜色

通过 `color` 或者 `text-color` 属性设置加载文案的颜色。

```html
<!-- 可修改文案和加载图标的颜色 -->
<van-loading color="#0094ff" />

<!-- 只修改文案颜色 -->
<van-loading text-color="#0094ff" />
```

### 自定义图标

通过 `icon` 插槽可以自定义加载图标。

```html
<van-loading vertical>
  <template #icon>
    <van-icon name="star-o" size="30" />
  </template>
  加载中...
</van-loading>
```

## API

### Props

| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| color      | 颜色                          | _string_           | `#c9c9c9`  |
| type       | 类型，可选值为 `spinner`      | _string_           | `circular` |
| size       | 加载图标大小，默认单位为 `px` | _number \| string_ | `30px`     |
| text-size  | 文字大小，默认单位为 `px`     | _number \| string_ | `14px`     |
| text-color | 文字颜色                      | _string_           | `#c9c9c9`  |
| vertical   | 是否垂直排列图标和文字内容    | _boolean_          | `false`    |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 加载文案       |
| icon    | 自定义加载图标 |

### 类型定义

组件导出以下类型定义：

```ts
import type { LoadingType, LoadingProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                           | 默认值                    | 描述 |
| ------------------------------ | ------------------------- | ---- |
| --van-loading-text-color       | _var(--van-text-color-2)_ | -    |
| --van-loading-text-font-size   | _var(--van-font-size-md)_ | -    |
| --van-loading-spinner-color    | _var(--van-gray-5)_       | -    |
| --van-loading-spinner-size     | _30px_                    | -    |
| --van-loading-spinner-duration | _0.8s_                    | -    |
