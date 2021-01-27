# Card 卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息。

### 引入

```js
import Vue from 'vue';
import { Card } from 'vant';

Vue.use(Card);
```

## 代码演示

### 基础用法

```html
<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/>
```

### 营销信息

通过 `origin-price` 设置商品原价，通过 `tag` 设置商品左上角标签。

```html
<van-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  origin-price="10.00"
/>
```

### 自定义内容

`Card` 组件提供了多个插槽，可以灵活地自定义内容。

```html
<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| thumb | 左侧图片 URL | _string_ | - |
| title | 标题 | _string_ | - |
| desc | 描述 | _string_ | - |
| tag | 图片角标 | _string_ | - |
| num | 商品数量 | _number \| string_ | - |
| price | 商品价格 | _number \| string_ | - |
| origin-price | 商品划线原价 | _number \| string_ | - |
| centered | 内容是否垂直居中 | _boolean_ | `false` |
| currency | 货币符号 | _string_ | `¥` |
| thumb-link | 点击左侧图片后跳转的链接地址 | _string_ | - |
| lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | _boolean_ | `false` |

### Events

| 事件名      | 说明                 | 回调参数       |
| ----------- | -------------------- | -------------- |
| click       | 点击时触发           | _event: Event_ |
| click-thumb | 点击自定义图片时触发 | _event: Event_ |

### Slots

| 名称         | 说明                   |
| ------------ | ---------------------- |
| title        | 自定义标题             |
| desc         | 自定义描述             |
| num          | 自定义数量             |
| price        | 自定义价格             |
| origin-price | 自定义商品原价         |
| price-top    | 自定义价格上方区域     |
| bottom       | 自定义价格下方区域     |
| thumb        | 自定义图片             |
| tag          | 自定义图片角标         |
| tags         | 自定义描述下方标签区域 |
| footer       | 自定义右下角内容       |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                          | 默认值                       | 描述 |
| ----------------------------- | ---------------------------- | ---- |
| @card-padding                 | `@padding-xs @padding-md`    | -    |
| @card-font-size               | `@font-size-sm`              | -    |
| @card-text-color              | `@text-color`                | -    |
| @card-background-color        | `@background-color-light`    | -    |
| @card-thumb-size              | `88px`                       | -    |
| @card-thumb-border-radius     | `@border-radius-lg`          | -    |
| @card-title-line-height       | `16px`                       | -    |
| @card-desc-color              | `@gray-7`                    | -    |
| @card-desc-line-height        | `@line-height-md`            | -    |
| @card-price-color             | `@gray-8`                    | -    |
| @card-origin-price-color      | `@gray-6`                    | -    |
| @card-num-color               | `@gray-6`                    | -    |
| @card-origin-price-font-size  | `@font-size-xs`              | -    |
| @card-price-font-size         | `@font-size-sm`              | -    |
| @card-price-integer-font-size | `@font-size-lg`              | -    |
| @card-price-font-family       | `@price-integer-font-family` | -    |
