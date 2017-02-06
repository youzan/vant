<script>
export default {
  data() {
    return {
      author: 'pangxie'
    };
  }
};
</script>

## sample组件

### 基础用法

author设置为test

:::demo 样例代码
```html
<sample :author="author"></sample>
```
:::


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| className | 自定义额外类名 | string  | ''          | ''          |
