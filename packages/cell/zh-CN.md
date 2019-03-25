## Cell 单元格

### 使用指南
``` javascript
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);
```

### 代码演示

#### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框。

```html
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
```

#### 单元格大小

通过`size`属性可以控制单元格的大小

```html
<van-cell title="单元格" value="内容" size="large" />
<van-cell title="单元格" value="内容" size="large" label="描述信息" />
```

#### 展示图标

通过`icon`属性在标题左侧展示图标

```html
<van-cell title="单元格" icon="location-o" />
```

#### 只设置 value

只设置`value`时会向左对齐

```html
<van-cell value="内容" />
```

#### 展示箭头

传入`is-link`属性则会在右侧显示箭头，并且可以通过传入`arrow-direction`属性控制箭头方向

```html
<van-cell title="单元格" is-link />
<van-cell title="单元格" is-link value="内容" />
<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

#### 页面跳转

可以通过`url`属性进行页面跳转，或通过`to`属性进行 vue-router 跳转

```html
<van-cell title="单元格" is-link url="//youzan.github.io/vant/mobile.html" />
<van-cell title="单元格" is-link to="index" />
```

#### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题

```html
<van-cell-group title="分组1">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
<van-cell-group title="分组2">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
```

#### 高级用法

如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容

```html
<van-cell value="内容" icon="shop-o" is-link>
  <template slot="title">
    <span class="custom-text">单元格</span>
    <van-tag type="danger">标签</van-tag>
  </template>
</van-cell>
<van-cell title="单元格" icon="location-o" is-link />
<van-cell title="单元格">
  <van-icon slot="right-icon" name="search" class="custom-icon" />
</van-cell>
```

### CellGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 分组标题 | `String` | `-` | 1.6.9 |
| border | 是否显示外边框 | `Boolean` | `true` | - |

### Cell API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | `String` | - | - |
| title | 左侧标题 | `String | Number` | - | - |
| value | 右侧内容 | `String | Number` | - | - |
| label | 标题下方的描述信息 | `String` | - | - |
| size | 单元格大小，可选值为 `large` | `String` | - | 1.4.4 |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| border | 是否显示内边框 | `Boolean` | `true` | - |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | - |
| clickable | 是否开启点击反馈 | `Boolean` | `false` | - |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` | - |
| required | 是否显示表单必填星号 | `Boolean` | `false` | - |
| center | 是否使内容垂直居中 | `Boolean` | `false` | 1.0.3 |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | `String` | - | 1.1.10 |
| title-class | 左侧标题额外类名 | `any` | - | 1.4.8 |
| value-class | 右侧内容额外类名 | `any` | - | 1.4.8 |
| label-class | 描述信息额外类名 | `any` | - | 1.4.8 |

### Cell Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击单元格时触发 | - |

### Cell Slot

| 名称 | 说明 |
|------|------|
| - | 自定义`value`显示内容 |
| title | 自定义标题显示内容 |
| label | 自定义标题下方描述显示内容 |
| icon | 自定义左侧图标 |
| right-icon | 自定义右侧按钮，默认为`arrow` |
