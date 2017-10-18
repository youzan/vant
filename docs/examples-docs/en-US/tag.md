## Tag

### Install
``` javascript
import { Tag } from 'vant';

Vue.component(Tag.name, Tag);
```

### Usage

#### Basic Usage
通过 type 属性控制 Tag 颜色，默认为灰色
:::demo Basic Usage
```html
<van-tag>标签</van-tag>
<van-tag type="danger">标签</van-tag>
<van-tag type="success">标签</van-tag>
<van-tag type="primary">标签</van-tag>
```
:::

#### 空心样式
设置`plain`属性设置为空心样式

:::demo 空心样式
```html
<van-tag plain>标签</van-tag>
<van-tag plain type="danger">标签</van-tag>
<van-tag plain type="primary">标签</van-tag>
<van-tag plain type="success">标签</van-tag>
```
:::

#### 标记样式
通过`mark`设置为标记样式

:::demo 标记样式
```html
<van-tag mark>标签</van-tag>
<van-tag mark type="danger">标签</van-tag>
<van-tag mark type="primary">标签</van-tag>
<van-tag mark type="success">标签</van-tag>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | Type | `String` | `''`| `primary` `success` `danger` |
| plain | 是否为空心样式 | `Boolean` | `false` | |
| mark | 是否为标记样式 | `Boolean` | `false` | |

### Slot

| name | Description |
|-----------|-----------|
| - | 自定义 Tag 显示内容 |
