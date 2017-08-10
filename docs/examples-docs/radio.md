<style>
.demo-radio {
  .van-radios {
    padding: 0 20px;

    .van-radio {
      margin: 10px 0;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1'
    };
  }
};
</script>

## Radio 单选框

### 代码演示

#### 基础用法

通过`v-model`绑定值即可。当`Radio`选中时，绑定的值即为`Radio`中`name`属性设置的值。

:::demo 基础用法
```html
<div class="van-radios">
  <van-radio name="1" v-model="radio1">单选框1</van-radio>
  <van-radio name="2" v-model="radio1">单选框2</van-radio>
</div>

<script>
export default {
  data() {
    return {
      radio1: '1'
    }
  }
};
</script>
```
:::

#### 禁用状态

设置`disabled`属性即可，此时`Radio`不能点击。

:::demo 禁用状态
```html
<div class="van-radios">
  <van-radio name="1" v-model="radio2" disabled>未选中禁用</van-radio>
  <van-radio name="2" v-model="radio2" disabled>选中且禁用</van-radio>
</div>

<script>
export default {
  data() {
    return {
      radio2: '2'
    }
  }
};
</script>
```
:::

#### radio组

需要与`van-radio-group`一起使用，在`van-radio-group`通过`v-model`来绑定当前选中的值。例如下面的`radio3`：

:::demo radio组
```html
<div class="van-radios">
  <van-radio-group v-model="radio3">
    <van-radio name="1">单选框1</van-radio>
    <van-radio name="2">单选框2</van-radio>
  </van-radio-group>
</div>
  
<script>
export default {
  data() {
    return {
      radio3: '1'
    }
  }
};
</script>
```
:::

#### 与Cell组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

:::demo 与Cell组件一起使用
```html
<van-radio-group v-model="radio4">
  <van-cell-group>
    <van-cell><van-radio name="1">单选框1</van-radio></van-cell>
    <van-cell><van-radio name="2">单选框2</van-radio></van-cell>
  </van-cell-group>
</van-radio-group>

<script>
export default {
  data() {
    return {
      radio4: '1'
    }
  }
};
</script>
```
:::

### Radio API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | `boolean`  | `false` |   |
| name | 根据这个来判断radio是否选中 | `boolean`  | `false` |   |

### RadioGroup API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | `boolean`  | `false` |   |

### RadioGroup Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
