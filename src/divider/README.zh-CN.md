# Divider 分割线

### 引入

``` javascript
import { Divider } from 'vant';

Vue.use(Divider);
```

## 代码演示

### 基础用法

```html
<van-divider />
```

### 展示文字

```html
<van-divider>文字</van-divider>
```

### 内容位置

```html
<van-divider content-position="left">文字</van-divider>
<van-divider content-position="right">文字</van-divider>
```

### 虚线

```html
<van-divider dashed>文字</van-divider>
```

### 自定义样式

```html
<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 15px' }">
  文字
</van-divider>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| dashed | 是否使用虚线 | `Boolean` | `false` | - |
| hairline | 是否使用 0.5px 线 | `Boolean` | `true` | - |
| content-position | 内容位置，可选值为`left` `right` | `String` | `center` | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 内容 |
