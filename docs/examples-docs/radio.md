<style>
@component-namespace demo {
  @b radio {
    .van-radios {
      padding: 0 20px;

      .van-radio {
        margin: 10px 0;
      }
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

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Radio`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Radio`组件了：

```js
import Vue from 'vue';
import { Radio, RadioGroup } from 'vant';
import 'vant/lib/vant-css/radio.css';

Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Radio`组件，这样只能在你注册的组件中使用`Radio`：

```js
import { Radio, RadioGroup } from 'vant';

export default {
  components: {
    'van-radio': Radio,
    'van-radio-group': RadioGroup
  }
};
```
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
