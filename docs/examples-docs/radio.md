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

:::demo
```html
<z-radio v-model="radio"></z-radio>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | Boolean  | false |   |
