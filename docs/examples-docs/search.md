<script>
export default {
  methods: {
    goSearch(value) {
      alert(value)
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

## Search 搜索

### 基础用法

:::demo 基础用法
```html
<zan-search placeholder="商品名称" @search="goSearch" @change="handleChange"></zan-search>
<script>
export default {
  methods: {
    goSearch(value) {
      alert(value)
    }
  }
};
</script>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 必须       |
|-----------|-----------|-----------|-------------|-------------|
| placeholder | `input`的`placeholder`文案 | `string`  |           |     |
