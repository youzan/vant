# 组件列表

## 代码演示

### 基础用法

```html
<van-for-components :data-source="[1,2,3,4,5,6,7,8]">
  <template #default="current">
    <div>{{current}}</div>
  </template>
</van-for-components>
```
