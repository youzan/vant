<style>
@component-namespace demo {
  @b checkbox {
    .zan-checkbox-wrapper {
      padding: 0 20px;

      .zan-checkbox {
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
      checkbox1: true,
      checkbox2: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  },

  watch: {
    result(val) {
      console.log(val);
    }
  }
};
</script>

## Checkbox组件

### 基础用法

:::demo 基础用法
```html
<div class="zan-checkbox-wrapper">
  <zan-checkbox v-model="checkbox1">复选框1</zan-checkbox>
</div>

<script>
export default {
  data() {
    return {
      checkbox1: true
    };
  }
}; 
</script>
```
:::

### 禁用状态

:::demo 禁用状态
```html
<div class="zan-checkbox-wrapper">
  <zan-checkbox v-model="checkbox2">复选框2</zan-checkbox>
</div>

<script>
export default {
  data() {
    return {
      checkbox2: true
    };
  }
}; 
</script>
```
:::

### Checkbox组

:::demo Checkbox组
```html
<div class="zan-checkbox-wrapper">
  <zan-checkbox-group v-model="result">
    <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
  </zan-checkbox-group>
</div>

<script>
export default {
  data() {
    return {
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  },

  watch: {
    result(val) {
      console.log(val);
    }
  }
};
</script>
```
:::

### 禁用Checkbox组

:::demo 禁用Checkbox组
```html
<div class="zan-checkbox-wrapper">
  <zan-checkbox-group v-model="result" disabled>
    <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
  </zan-checkbox-group>
</div>

<script>
export default {
  data() {
    return {
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  }
};
</script>
```
:::

### 与Cell组件一起使用

:::demo 与Cell组件一起使用
```html
<zan-checkbox-group v-model="result">
  <zan-cell-group>
    <zan-cell v-for="item in list">
      <zan-checkbox :name="item">复选框{{item}}</zan-checkbox>
    </zan-cell>
  </zan-cell-group>
</zan-checkbox-group>

<script>
export default {
  data() {
    return {
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  }
};
</script>
```
:::

### Checkbox API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | `boolean`  | `false` |   |
| name | 根据这个来判断radio是否选中 | `boolean`  | `false` |   |

### CheckboxGroup API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | `boolean`  | `false` |   |

### CheckboxGroup Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
