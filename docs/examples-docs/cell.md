<script>
export default {
  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>

## Cell 单元格

### 代码演示

#### 基础用法

你可以将`van-cell-group`组件看成一个容器即可。

:::demo 基础用法
```html
<van-cell-group>
  <van-cell title="单元格1" value="单元格1内容"></van-cell>
  <van-cell title="单元格2" value="单元格2内容"></van-cell>
</van-cell-group>
```
:::

#### 只设置value

只设置`value`时会向左对齐。

:::demo 只设置value
```html
<van-cell-group>
  <van-cell value="单元格1内容"></van-cell>
  <van-cell value="单元格2内容"></van-cell>
</van-cell-group>
```
:::

#### 标题带描述信息

传入`label`属性，属性值为描述信息的值。

:::demo 标题带描述信息
```html
<van-cell-group>
  <van-cell title="单元格1" label="描述信息" value="查看专栏" is-link url="javascript:void(0)" @click="handleClick"></van-cell>
  <van-cell title="单元格2" label="描述信息" value="查看专栏" is-link></van-cell>
</van-cell-group>
```
:::

#### 带图标

传入`icon`属性。

:::demo 带图标
```html
<van-cell-group>
  <van-cell title="起码运动馆" icon="home"></van-cell>
  <van-cell title="线下门店" icon="location"></van-cell>
</van-cell-group>
```
:::

#### 可点击的链接

传入`url`属性，传入`isLink`属性则会在右侧显示箭头。

:::demo 可点击的链接
```html
<van-cell-group>
  <van-cell title="起码运动馆" value="进入店铺" icon="home" url="http://youzan.com" is-link></van-cell>
  <van-cell title="线下门店" icon="location" url="http://youzan.com" is-link></van-cell>
</van-cell-group>
```
:::

#### 高级用法

如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容。包含三个`slot`，默认`slot`、`icon`、`title`和`right-icon`的`slot`。

:::demo 高级用法
```html
<van-cell-group>
  <van-cell value="进入店铺" icon="home" url="http://youzan.com" is-link>
    <template slot="title">
      <span class="van-cell-text">起码运动馆</span>
      <van-tag type="danger">官方</van-tag>
    </template>
  </van-cell>
  <van-cell title="线下门店" icon="location" url="http://youzan.com" is-link></van-cell>
  <van-cell title="其他">
    <template slot="right-icon">
      <van-icon name="passed" class="van-cell__right-icon" style="font-size: 16px;"></van-icon>
    </template>
  </van-cell>
</van-cell-group>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | `string`  |           |           |
| title | 左侧标题 | `string`  |           |           |
| value | 右侧内容 | `string`  |           |           |
| isLink | 是否为链接，链接会在右侧出现箭头 | `boolean`  |           |           |
| url | 跳转链接 | `string`  |           |           |
| label | 描述信息，显示在标题下方 | `string`  |           |           |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |
