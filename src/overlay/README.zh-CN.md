# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作

### 引入

```js
import Vue from 'vue';
import { Overlay } from 'vant';

Vue.use(Overlay);
```

## 代码演示

### 基础用法

```html
<van-button type="primary" text="显示遮罩层" @click="show = true" />
<van-overlay :show="show" @click="show = false" />
```

```js
export default {
  data() {
    return {
      show: false
    }
  }
},
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容

```html
<van-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</van-overlay>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 是否展示遮罩层 | *boolean* | `false` |
| z-index | z-index 层级 | *number \| string* | `1` |
| duration | 动画时长，单位秒 | *number \| string* | `0.3` |
| class-name | 自定义类名 | *string* | - |
| custom-style `v2.2.5` | 自定义样式 | *object* | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | *event: Event* |

### Slots

| 名称 | 说明 |
|------|------|
| default `v2.0.5` | 默认插槽，用于在遮罩层上方嵌入内容 |
