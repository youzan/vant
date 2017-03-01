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

:::demo 样例代码
```html
<z-search 
    placeholder="商品名称"
    :on-search="goSearch"
>
</z-search>
```

```javascript
export default {
  methods: {
    goSearch(value) {
      alert(value)
    }
  }
};
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 必须       |
|-----------|-----------|-----------|-------------|-------------|
| placeholder | input的placeholder文案 | string  |           | required    |
| on-search | 点击回车后出发搜索回调 | function  | function() {}  |   |