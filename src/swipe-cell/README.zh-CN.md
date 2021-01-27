# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 引入

```js
import Vue from 'vue';
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
```

## 代码演示

### 基础用法

`SwipeCell` 组件提供了 `left` 和 `right` 两个插槽，用于定义两侧滑动区域的内容。

```html
<van-swipe-cell>
  <template #left>
    <van-button square type="primary" text="选择" />
  </template>
  <van-cell :border="false" title="单元格" value="内容" />
  <template #right>
    <van-button square type="danger" text="删除" />
    <van-button square type="primary" text="收藏" />
  </template>
</van-swipe-cell>
```

### 自定义内容

`SwipeCell` 可以嵌套任意内容，比如嵌套一个商品卡片。

```html
<van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    class="goods-card"
    thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>

<style>
  .goods-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
</style>
```

### 异步关闭

通过传入 `before-close` 回调函数，可以自定义两侧滑动内容关闭时的行为。

```html
<van-swipe-cell :before-close="beforeClose">
  <template #left>
    <van-button square type="primary" text="选择" />
  </template>
  <van-cell :border="false" title="单元格" value="内容" />
  <template #right>
    <van-button square type="danger" text="删除" />
  </template>
</van-swipe-cell>
```

```js
export default {
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，可以在事件参数中获取到 | _number \| string_ | - |
| left-width | 指定左侧滑动区域宽度，单位为`px` | _number \| string_ | `auto` |
| right-width | 指定右侧滑动区域宽度，单位为`px` | _number \| string_ | `auto` |
| before-close | 关闭前的回调函数 | _Function_ | - |
| disabled | 是否禁用滑动 | _boolean_ | `false` |
| stop-propagation | 是否阻止滑动事件冒泡 | _boolean_ | `false` |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义显示内容 |
| left    | 左侧滑动内容   |
| right   | 右侧滑动内容   |

### Events

| 事件名 | 说明       | 回调参数                                           |
| ------ | ---------- | -------------------------------------------------- |
| click  | 点击时触发 | 关闭时的点击位置 (`left` `right` `cell` `outside`) |
| open   | 打开时触发 | { position: 'left' \| 'right' , name: string }     |
| close  | 关闭时触发 | { position: string , name: string }                |

### beforeClose 参数

beforeClose 的第一个参数为对象，对象中包含以下属性：

| 参数名   | 说明                                               | 类型        |
| -------- | -------------------------------------------------- | ----------- |
| name     | 标识符                                             | _string_    |
| position | 关闭时的点击位置 (`left` `right` `cell` `outside`) | _string_    |
| instance | SwipeCell 实例，用于调用实例方法                   | _SwipeCell_ |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明             | 参数                      | 返回值 |
| ------ | ---------------- | ------------------------- | ------ |
| open   | 打开单元格侧边栏 | position: `left \| right` | -      |
| close  | 收起单元格侧边栏 | -                         | -      |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| @switch-cell-padding-top | `@cell-vertical-padding - 1px` | - |
| @switch-cell-padding-bottom | `@cell-vertical-padding - 1px` | - |
| @switch-cell-large-padding-top | `@cell-large-vertical-padding - 1px` | - |
| @switch-cell-large-padding-bottom | `@cell-large-vertical-padding - 1px` | - |

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
