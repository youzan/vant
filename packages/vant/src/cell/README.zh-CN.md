# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Cell, CellGroup } from 'vant';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格（从 3.1.0 版本开始支持）。

```html
<van-cell-group inset>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<van-cell title="单元格" value="内容" size="large" />
<van-cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```html
<van-cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

```html
<van-cell value="内容" />
```

### 展示箭头

设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。

```html
<van-cell title="单元格" is-link />
<van-cell title="单元格" is-link value="内容" />
<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```html
<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
<van-cell title="路由跳转" is-link to="index" />
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<van-cell-group title="分组1">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
<van-cell-group title="分组2">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<van-cell value="内容" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <span class="custom-title">单元格</span>
    <van-tag type="danger">标签</van-tag>
  </template>
</van-cell>

<van-cell title="单元格" icon="shop-o">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <template #right-icon>
    <van-icon name="search" class="search-icon" />
  </template>
</van-cell>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```html
<van-cell center title="单元格" value="内容" label="描述信息" />
```

## API

### CellGroup Props

| 参数           | 说明                   | 类型      | 默认值  |
| -------------- | ---------------------- | --------- | ------- |
| title          | 分组标题               | _string_  | `-`     |
| inset `v3.1.0` | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| border         | 是否显示外边框         | _boolean_ | `true`  |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _string_ | - |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，等同于 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `null` |
| is-link | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| title-style | 左侧标题额外样式 | _string \| Array \| object_ | - |
| title-class | 左侧标题额外类名 | _string \| Array \| object_ | - |
| value-class | 右侧内容额外类名 | _string \| Array \| object_ | - |
| label-class | 描述信息额外类名 | _string \| Array \| object_ | - |

### Cell Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单元格时触发 | _event: MouseEvent_ |

### CellGroup Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |

### Cell Slots

| 名称           | 说明                         |
| -------------- | ---------------------------- |
| title          | 自定义左侧标题               |
| value `v3.1.1` | 自定义右侧内容               |
| label          | 自定义标题下方的描述信息     |
| icon           | 自定义左侧图标               |
| right-icon     | 自定义右侧图标               |
| extra          | 自定义单元格最右侧的额外内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { CellArrowDirection } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-cell-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-line-height | _24px_ | - |
| --van-cell-vertical-padding | _10px_ | - |
| --van-cell-horizontal-padding | _var(--van-padding-md)_ | - |
| --van-cell-text-color | _var(--van-text-color)_ | - |
| --van-cell-background-color | _var(--van-white)_ | - |
| --van-cell-border-color | _var(--van-border-color)_ | - |
| --van-cell-active-color | _var(--van-active-color)_ | - |
| --van-cell-required-color | _var(--van-danger-color)_ | - |
| --van-cell-label-color | _var(--van-gray-6)_ | - |
| --van-cell-label-font-size | _var(--van-font-size-sm)_ | - |
| --van-cell-label-line-height | _var(--van-line-height-sm)_ | - |
| --van-cell-label-margin-top | _var(--van-padding-base)_ | - |
| --van-cell-value-color | _var(--van-gray-6)_ | - |
| --van-cell-icon-size | _16px_ | - |
| --van-cell-right-icon-color | _var(--van-gray-6)_ | - |
| --van-cell-large-vertical-padding | _var(--van-padding-sm)_ | - |
| --van-cell-large-title-font-size | _var(--van-font-size-lg)_ | - |
| --van-cell-large-label-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-group-background-color | _var(--van-white)_ | - |
| --van-cell-group-title-color | _var(--van-gray-6)_ | - |
| --van-cell-group-title-padding | _var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs)_ | - |
| --van-cell-group-title-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-group-title-line-height | _16px_ | - |
| --van-cell-group-inset-padding | _0 var(--van-padding-md)_ | - |
| --van-cell-group-inset-border-radius | _var(--van-border-radius-lg)_ | - |
| --van-cell-group-inset-title-padding | _var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs) var(--van-padding-xl)_ | - |
