<script>
export default {
  methods: {
    goSearch(value) {
      alert(value)
    }
  }
};
</script>

## Search 组件

### 基础用法

:::demo 基础用法
```html
<zan-search placeholder="商品名称" @search="goSearch"></zan-search>
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
| placeholder | input的placeholder文案 | string  |           |     |