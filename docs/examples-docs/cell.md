<style>
.official-img {
  width: 31px;
  vertical-align: middle;
  border: 0;
}
</style>

<script>
export default {
  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>

## Cell 组件

### 基础用法

:::demo 基础用法
```html
<zan-cell-group>
  <zan-cell title="单元格1" value="单元格1内容"></zan-cell>
  <zan-cell title="单元格2" value="单元格2内容"></zan-cell>
</zan-cell-group>
```
:::

### 带*号，标明必填

传入`required`属性

:::demo  带*号，标明必填
```html
<zan-cell-group>
  <zan-cell title="单元格1" required></zan-cell>
</zan-cell-group>
```
:::

### 标题带描述信息

传入`label`属性，属性值为描述信息的值。

:::demo 标题带描述信息
```html
<zan-cell-group>
  <zan-cell title="单元格1" label="描述信息" is-link url="javascript:void(0)" @click="handleClick"></zan-cell>
  <zan-cell title="单元格2" label="描述信息"></zan-cell>
</zan-cell-group>
```
:::

### 带图标

传入`icon`属性。

:::demo 带图标
```html
<zan-cell-group>
  <zan-cell title="起码运动馆" icon="home"></zan-cell>
  <zan-cell title="线下门店" icon="location"></zan-cell>
</zan-cell-group>
```
:::

### 可点击的链接

传入`url`属性，传入`isLink`属性则会在右侧显示箭头。

:::demo 可点击的链接
```html
<zan-cell-group>
  <zan-cell title="起码运动馆" value="进入店铺" icon="home" url="http://youzan.com" is-link></zan-cell>
  <zan-cell title="线下门店" icon="location" url="http://youzan.com" is-link></zan-cell>
</zan-cell-group>
```
:::

### 高级用法

如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容。包含三个`slot`，默认`slot`，`icon`和`title`的`slot`。

:::demo 高级用法
```html
<zan-cell-group>
  <zan-cell value="进入店铺" icon="home" url="http://youzan.com" is-link>
    <template slot="title">
      <span class="zan-cell-text">起码运动馆</span>
      <img src="//su.yzcdn.cn/v2/image/account/icon_guan_160421.png" class="official-img">
    </template>
  </zan-cell>
  <zan-cell title="线下门店" icon="location" url="http://youzan.com" is-link></zan-cell>
</zan-cell-group>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | string  | ''          | ''          |
| title | 左侧标题 | string  | ''          | ''          |
| value | 右侧内容 | string  | ''          | ''          |
| isLink | 是否为链接，链接会在右侧出现箭头 | boolean  | ''          | ''          |
| url | 跳转链接 | string  | ''          | ''          |
| label | 描述信息，显示在标题下方 | string  | ''          | ''          |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义icon |
| title | 自定义title |
