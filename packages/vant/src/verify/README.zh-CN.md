# Verify 滑动验证

### 介绍

用于滑动验证

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Verify } from 'vant';

const app = createApp();
app.use(Verify);
```

## 代码演示

### 默认滑动效果

引入组件直接使用。

```html
<van-verify content="Vant" />
```

### 自定义轨道颜色

通过 `track-color` 属性来设置滑动轨道颜色，默认值为`#1989FA`。

```html
<van-verify trackColor="pink" />
```

### 自定义提示文字

通过`text` 属性来设置提示文字，默认值为`滑动验证`。

```html
<van-verify text="滑动滑块以验证" />
```

### 自定义验证成功主题色

通过 `sucess-color` 属性来设置验证成功之后的主题色，默认值为`#07C160`。

```html
<van-verify success-color="#FAAB0C" />
```

### 自定义验证成功文字颜色

通过 `success-text-color` 属性来设置验证成功后文字颜色，默认值为 `#F7F8FA`。

```html
<van-verify success-text-color="#161618" />
```

### 自定义验证成功提示文字

通过 `success-text-content` 属性来设置成功之后文本提示内容，默认为 `验证成功`。

```html
<van-verify success-text-content="校验成功~" />
```

### 自定义允许失败最大次数

通过 `max-incorrect-times` 允许失败的最大次数，默认为`3`次。

```html
<van-verify :max-incorrect-times="1" />
```

### 自定义允许失败最大次数

通过 `max-incorrect-times` 允许失败的最大次数，默认为`3`次。

```html
<van-verify :max-incorrect-times="1" />
```

### 自定义回调函数

通过设置 `success-func` 和 `fail-func`来定义验证处理成功或失败之后的结果。

```html
<van-verify
  :success-func="()=>{ console.log('验证成功') }"
  :fail-func="()=>{console.log('验证失败')}"
></van-verify>
```

### 开启 / 关闭动画效果

通过设置 `is-animation` 来开启 / 关闭动画效果，默认开启动画效果

```html
<van-verify :is-animation="false"></van-verify>
```

### 自定义滑块图片内容

通过 `default` 和 `successSlot` 插槽定义滑块图案内容，可以往里面插入图标，图片等信息，其中 `default` 插槽是滑块未达终点时的图片内容，`sucessSlot` 是滑动到终点时的滑块图片内容。

```html
<van-verify>
  <template #default>
    <Icon name="arrow" />
  </template>
  <template #successSlot>
    <Icon name="success" />
  </template>
</van-verify>
```

```html
<van-verify>
  <template #default>
    <img src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png" alt="" />
  </template>
  <template #successSlot>
    <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
  </template>
</van-verify>
```

## API

### Props

| 参数                 | 说明              | 类型       | 默认值     |
| -------------------- | ----------------- | ---------- | ---------- |
| track-color          | 轨道颜色          | _string_   | `#1989FA`  |
| text                 | 提示文字          | _string_   | `滑动验证` |
| sucess-color         | 验证成功主题色    | _string_   | `#07C160`  |
| success-text-color   | 验证成功文字颜色  | _string_   | `#F7F8FA`  |
| success-text-content | 验证成功提示文字  | _string_   | `验证成功` |
| max-incorrect-times  | 允许失败最大次数  | _number_   | `3`        |
| success-func         | 验证成功回调函数  | _funciton_ | -          |
| fail-func            | 验证失败回调函数  | _funciton_ | -          |
| is-animation         | 开启/关闭动画效果 | _boolean_  | `true`     |

### Slots

| 名称        | 说明                     |
| ----------- | ------------------------ |
| default     | 滑块未达终点时的图片内容 |
| successSlot | 滑块达终点时的图片内容   |

### 类型定义

组件导出以下类型定义：

```ts
import type {import type { sliderVerifyProps } from 'vant';
```
