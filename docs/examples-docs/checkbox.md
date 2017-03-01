## Checkbox组件

### 基础用法

```html
<zan-checkbox v-model="checkbox1">复选框1</zan-checkbox>

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

### 禁用状态

```html
<zan-checkbox v-model="checkbox2">复选框2</zan-checkbox>

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

### Checkbox组

```html
<zan-checkbox-group v-model="result">
  <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
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
  },

  watch: {
    result(val) {
      console.log(val);
    }
  }
};
</script>
```

### 禁用Checkbox组

```html
<zan-checkbox-group v-model="result" disabled>
  <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
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

### 与Cell组件一起使用

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

### Checkbox API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | Boolean  | false |   |
| name | 根据这个来判断radio是否选中 | Boolean  | false |   |

### CheckboxGroup API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | Boolean  | false |   |

### CheckboxGroup Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
