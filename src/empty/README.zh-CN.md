# Empty 空状态

### 介绍

空状态时的占位提示，2.6 版本开始支持此组件

### 引入

```js
import Vue from 'vue';
import { Empty } from 'vant';

Vue.use(Empty);
```

## 代码演示

### 基础用法

```html
<van-empty description="描述文字" />
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用

```html
<!-- 通用错误 -->
<van-empty image="error" description="描述文字" />
<!-- 网络错误 -->
<van-empty image="network" description="描述文字" />
<!-- 搜索提示 -->
<van-empty image="search" description="描述文字" />
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL

```html
<van-empty
  class="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
  description="描述文字"
/>

<style>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>
```

### 底部内容

通过默认插槽可以在 Empty 组件的下方插入内容

```html
<van-empty description="描述文字">
  <van-button round type="danger" class="bottom-button">
    按钮
  </van-button>
</van-empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `error` `network` `search`，支持传入图片 URL | _string_ | `default` |
| description | 图片下方的描述文字 | _string_ | - |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| default     | 自定义底部内容 |
| image       | 自定义图标     |
| description | 自定义描述文字 |
