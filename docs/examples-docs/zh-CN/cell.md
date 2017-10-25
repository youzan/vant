<script>
export default {
  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>

<style>
.demo-cell {
  .van-cell-text {
    margin-right: 5px;
  }
  .van-cell__right-icon {
    font-size: 16px;
  }
  .van-cell-text,
  .van-tag--danger {
    vertical-align: middle;
  }
}
</style>

## Cell 单元格

### 使用指南
``` javascript
import { Cell, CellGroup } from 'vant';

Vue.component(Cell.name, Cell);
Vue.component(CellGroup.name, CellGroup);
```

### 代码演示

#### 基础用法

将`van-cell-group`组件看成一个容器即可

:::demo 基础用法
```html
<van-cell-group>
  <van-cell title="单元格1" value="单元格1内容"></van-cell>
  <van-cell title="单元格2" value="单元格2内容" label="描述信息"></van-cell>
</van-cell-group>
```
:::

#### 只设置value
只设置`value`时会向左对齐

:::demo 只设置value
```html
<van-cell-group>
  <van-cell value="单元格内容"></van-cell>
</van-cell-group>
```
:::

#### 展示图标
通过`icon`属性在标题左侧展示图标
:::demo 展示图标
```html
<van-cell-group>
  <van-cell title="单元格" icon="location"></van-cell>
</van-cell-group>
```
:::

#### 展示箭头
传入`isLink`属性则会在右侧显示箭头

:::demo 展示箭头
```html
<van-cell-group>
  <van-cell title="单元格1" is-link></van-cell>
  <van-cell title="单元格2" is-link value="内容"></van-cell>
</van-cell-group>
```
:::

#### 高级用法
如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容

:::demo 高级用法
```html
<van-cell-group>
  <van-cell value="进入店铺" icon="shop" is-link>
    <template slot="title">
      <span class="van-cell-text">起码运动馆</span>
      <van-tag type="danger">官方</van-tag>
    </template>
  </van-cell>
  <van-cell title="线下门店" icon="location" is-link></van-cell>
  <van-cell title="其他">
    <template slot="right-icon">
      <van-icon name="search" class="van-cell__right-icon"></van-icon>
    </template>
  </van-cell>
</van-cell-group>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | `String` | - | - |
| title | 左侧标题 | `String` | - | - |
| value | 右侧内容 | `String` | - | - |
| label | 标题下方的描述信息 | `String` | - | - |
| url | 跳转链接 | `String` | - | - |
| isLink | 是否展示右侧箭头 | `Boolean` | `false` | - |
| required | 是否显示表单必填符号 | `Boolean` | `false` | - |

### Slot

| name | 描述 |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |
