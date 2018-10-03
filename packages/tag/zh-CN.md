## Tag 标记

### 使用指南
``` javascript
import { Tag } from 'vant';

Vue.use(Tag);
```

### 代码演示

#### 基础用法
通过 type 属性控制 Tag 颜色，默认为灰色

```html
<van-tag>标签</van-tag>
<van-tag type="danger">标签</van-tag>
<van-tag type="success">标签</van-tag>
<van-tag type="primary">标签</van-tag>
```

#### 空心样式
设置`plain`属性设置为空心样式

```html
<van-tag plain>标签</van-tag>
<van-tag plain type="danger">标签</van-tag>
<van-tag plain type="primary">标签</van-tag>
<van-tag plain type="success">标签</van-tag>
```

#### 圆角样式
通过`mark`设置为圆角样式

```html
<van-tag mark>标签</van-tag>
<van-tag mark type="danger">标签</van-tag>
<van-tag mark type="primary">标签</van-tag>
<van-tag mark type="success">标签</van-tag>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 类型，可选值为`primary` `success` `danger` | `String` | `''`|
| plain | 是否为空心样式 | `Boolean` | `false` |
| mark | 是否为圆角样式 | `Boolean` | `false` |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义 Tag 显示内容 |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.3 | bugfix | 修复边框颜色错误的问题 |
| 1.0.3 | bugfix | 修复文字在部分安卓手机上未垂直居中的问题 |
