<script>
export default {
  data() {
    return {
      radio: '1'
    };
  }
};
</script>

## Radio组件

### 基础用法

```html
<z-radio name="1" v-model="radio1">单选框1</z-radio>
<z-radio name="2" v-model="radio1">单选框2</z-radio>

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

### 禁用状态

```html
<z-radio name="1" v-model="radio2" disabled>未选中禁用</z-radio>
<z-radio name="2" v-model="radio2" disabled>选中且禁用</z-radio>

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

### radio组

```html
<z-radio-group v-model="radio3">
  <z-radio name="1">单选框1</z-radio>
  <z-radio name="2">单选框2</z-radio>
</z-radio-group>

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

### 与Cell组件一起使用

```html
<z-radio-group v-model="radio4">
  <z-cell-group>
    <z-cell><z-radio name="1">单选框1</z-radio></z-cell>
    <z-cell><z-radio name="2">单选框2</z-radio></z-cell>
  </z-cell-group>
</z-radio-group>

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

### Radio API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | Boolean  | false |   |
| name | 根据这个来判断radio是否选中 | Boolean  | false |   |

### RadioGroup API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | Boolean  | false |   |
