# Cell 单元格

### 引入

```js
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框

```html
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
```

### 单元格大小

通过`size`属性可以控制单元格的大小

```html
<van-cell title="单元格" value="内容" size="large" />
<van-cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过`icon`属性在标题左侧展示图标

```html
<van-cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置`value`时，内容会靠左对齐

```html
<van-cell value="内容" />
```

### 展示箭头

设置`is-link`属性后会在单元格右侧显示箭头，并且可以通过`arrow-direction`属性控制箭头方向

```html
<van-cell title="单元格" is-link />
<van-cell title="单元格" is-link value="内容" />
<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 页面导航

可以通过`url`属性进行 URL 跳转，或通过`to`属性进行路由跳转

```html
<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
<van-cell title="路由跳转" is-link to="index" />
```

### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题

```html
<van-cell-group title="分组1">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
<van-cell-group title="分组2">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容

```html
<van-cell value="内容" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <span class="custom-title">单元格</span>
    <van-tag type="danger">标签</van-tag>
  </template>
</van-cell>

<van-cell title="单元格" icon="shop-o">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <template #right-icon>
    <van-icon
      name="search"
      style="line-height: inherit;"
    />
  </template>
</van-cell>
```

### 垂直居中

通过`center`属性可以让`Cell`的左右内容都垂直居中

```html
<van-cell center title="单元格" value="内容" label="描述信息" />
```


## API

### CellGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 分组标题 | *string* | `-` |
| border | 是否显示外边框 | *boolean* | `true` |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 左侧标题 | *number \| string* | - |
| value | 右侧内容 | *number \| string* | - |
| label | 标题下方的描述信息 | *string* | - |
| size | 单元格大小，可选值为 `large` | *string* | - |
| icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | *string* | - |
| icon-prefix `v2.5.3` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | *string* | `van-icon` |
| url | 点击后跳转的链接地址 | *string* | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | *string \| object* | - |
| border | 是否显示内边框 | *boolean* | `true` |
| replace | 是否在跳转时替换当前页面历史 | *boolean* | `false` |
| clickable | 是否开启点击反馈 | *boolean* | `false` |
| is-link | 是否展示右侧箭头并开启点击反馈 | *boolean* | `false` |
| required | 是否显示表单必填星号 | *boolean* | `false` |
| center | 是否使内容垂直居中 | *boolean* | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | *string* | `right` |
| title-style | 左侧标题额外样式 | *any* | - |
| title-class | 左侧标题额外类名 | *any* | - |
| value-class | 右侧内容额外类名 | *any* | - |
| label-class | 描述信息额外类名 | *any* | - |

### Cell Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击单元格时触发 | *event: Event* |

### CellGroup Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽 |
| title | 自定义分组标题 |

### Cell Slots

| 名称 | 说明 |
|------|------|
| default | 自定义右侧内容 |
| title | 自定义左侧标题 |
| label | 自定义标题下方描述 |
| icon | 自定义左侧图标 |
| right-icon | 自定义右侧按钮，默认为`arrow` |
