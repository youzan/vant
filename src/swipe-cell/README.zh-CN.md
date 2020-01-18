# SwipeCell 滑动单元格

### 引入

```js
import Vue from 'vue';
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
```

## 代码演示

### 基础用法

`SwipeCell`组件提供了`left`和`right`两个插槽，用于定义两侧滑动区域的内容

```html
<van-swipe-cell>
  <template slot="left">
    <van-button square type="primary" text="选择" />
  </template>

  <van-cell :border="false" title="单元格" value="内容" />

  <template slot="right">
    <van-button square type="danger" text="删除" />
    <van-button square type="primary" text="收藏"/>
  </template>
</van-swipe-cell>
```

### 异步关闭

通过传入`before-close`回调函数，可以自定义两侧滑动内容关闭时的行为

```html
<van-swipe-cell :before-close="beforeClose">
  <template slot="left">
    <van-button square type="primary" text="选择" />
  </template>

  <van-cell :border="false" title="单元格" value="内容" />

  <template slot="right">
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
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name `v2.0.4` | 标识符，可以在事件参数中获取到 | *string \| number* | - |
| before-close `v2.3.0` | 关闭前的回调函数 | *Function* | - |
| disabled | 是否禁用滑动 | *boolean* | `false` |
| left-width | 指定左侧滑动区域宽度 | *number* | `auto` |
| right-width | 指定右侧滑动区域宽度 | *number* | `auto` |
| stop-propagation `v2.1.0` | 是否阻止滑动事件冒泡 | *boolean* | `false` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | 关闭时的点击位置 (`left` `right` `cell` `outside`) |
| open | 打开时触发 | { position: 'left' \| 'right' , name: string } |
| close | 关闭时触发 | { position: string , name: string } |

### beforeClose 参数

beforeClose 的第一个参数为对象，对象中包含以下属性：

| 参数名 | 说明 | 类型 |
|------|------|------|
| name | 标识符 | *string* |
| position | 关闭时的点击位置 (`left` `right` `cell` `outside`) | *string* |
| instance | SwipeCell 实例，用于调用实例方法 | *SwipeCell* |

### 方法

通过 [ref](https://cn.vuejs.org/v2/api/#ref) 可以获取到 SwipeCell 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| open | 打开单元格侧边栏 | position: `left | right` | - |
| close | 收起单元格侧边栏 | - | - |

## 常见问题

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。
