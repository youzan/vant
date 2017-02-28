## Tag 组件

### 基础用法
```html
<zan-tag>返现</zan-tag>
<zan-tag :plain="true">返现</zan-tag>
```

### 高级用法
```html
<zan-tag type="danger">返现</zan-tag>
<zan-tag type="success">返现</zan-tag>
<zan-tag type="success" :plain="true">返现</zan-tag>
```

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| plain | 是否是空心tag | boolean  | false          | ''          |
| mark | 是否是标记 | boolean  | false          | ''          |
| type | tag类型 | string  | ''          | 'primary', 'success', 'danger' |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义tag显示内容 |
