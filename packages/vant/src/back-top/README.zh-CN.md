# BackTop 回到顶部

### 介绍

返回页面顶部的操作按钮。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { BackTop } from 'vant';

const app = createApp();
app.use(BackTop);
```

## 代码演示

### 基础用法

通过滚动 Demo 页面查看右下角按钮。

```html
<van-cell v-for="item in list" :key="item" :title="item" />

<van-back-top />
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
  },
};
```

### 自定义内容

```html
<van-cell v-for="item in list" :key="item" :title="item" />
<van-back-top>
  <div class="custom" style="">回到顶部</div>
</van-back-top>
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
  },
};
```

```css
.custom {
  width: 200px;
  line-height: 40px;
  text-align: center;
}
```

### 设置监听目标

可以通过设置 `target` 控制监听哪个元素触发 Back Top。

```html
<div class="container">
  <van-cell v-for="item in list" :key="item" :title="item" />
  <van-back-top target=".container" bottom="100" right="30" />
</div>
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
  },
};
```

```css
.container {
  height: 300px;
  overflow: auto;
}
```

## API

### Props

| 参数              | 说明                       | 类型               | 默认值 |
| ----------------- | -------------------------- | ------------------ | ------ |
| target            | 触发滚动的目标对象         | _string_           | -      |
| right             | 距离页面右侧的距离         | _number \| string_ | `30`   |
| bottom            | 距离页面底部的距离         | _number \| string_ | `40`   |
| visibility-height | 滚动高度达到此参数值才显示 | _number_           | `200`  |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义按钮显示内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                      | 默认值            | 描述 |
| ------------------------- | ----------------- | ---- |
| --van-back-top-size       | _40px_            | -    |
| --van-back-top-icon-size  | _20px_            | -    |
| --van-back-top-text-color | _#fff_            | -    |
| --van-back-top-background | _var(--van-blue)_ | -    |
