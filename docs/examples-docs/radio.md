<style>
@component-namespace demo {
  @b radio {
    .zan-radios {
      padding: 0 20px;

      .zan-radio {
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

## Radio组件

### 基础用法

:::demo 基础用法
```html
<div class="zan-radios">
  <zan-radio name="1" v-model="radio1">单选框1</zan-radio>
  <zan-radio name="2" v-model="radio1">单选框2</zan-radio>
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

### 禁用状态

:::demo 禁用状态
```html
<div class="zan-radios">
  <zan-radio name="1" v-model="radio2" disabled>未选中禁用</zan-radio>
  <zan-radio name="2" v-model="radio2" disabled>选中且禁用</zan-radio>
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

### radio组

:::demo radio组
```html
<div class="zan-radios">
  <zan-radio-group v-model="radio3">
    <zan-radio name="1">单选框1</zan-radio>
    <zan-radio name="2">单选框2</zan-radio>
  </zan-radio-group>
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

### 与Cell组件一起使用

:::demo 与Cell组件一起使用
```html
<zan-radio-group v-model="radio4">
  <zan-cell-group>
    <zan-cell><zan-radio name="1">单选框1</zan-radio></zan-cell>
    <zan-cell><zan-radio name="2">单选框2</zan-radio></zan-cell>
  </zan-cell-group>
</zan-radio-group>

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
