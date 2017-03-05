## Button组件

### 按钮功能

只接受primary, default, danger三种类型，默认default。

```html
<div class="zan-button-group">
  <div class="zan-button-1">
    <zan-button>default</zan-button>
  </div>
  <div class="zan-button-1">
    <zan-button type="primary">primary</zan-button>
  </div>
  <div class="zan-button-1">
    <zan-button type="danger">danger</zan-button>
  </div>
</div>
```

### 禁用状态

```html
<div class="zan-button-group">
  <div class="zan-button-1">
    <zan-button disabled>diabled</zan-button>
  </div>
</div>
```

### 按钮尺寸

只接受large, normal, small, mini四种尺寸，默认normal。

```html 
<div class="zan-button-group">
  <div class="zan-button-1">
    <zan-button size="large">large</zan-button>
  </div>
</div>
<div class="zan-button-group" :style="{ width: '50%' }">
  <div class="zan-button-3">
    <zan-button type="primary">normal</zan-button>
  </div>
  <div class="zan-button-3">
    <zan-button size="small">small</zan-button>
  </div>
  <div class="zan-button-3">
    <zan-button size="mini">mini</zan-button>
  </div>
</div>

```

### 自定义按钮标签

按钮默认是button标签，可以使用tag属性修改为一个a标签。

```html 
<div class="zan-button-group">
  <div class="zan-button-1">
    <zan-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</zan-button>
  </div>
</div>
```

### loading按钮

表示loading状态

```html 
<div class="zan-button-group">
  <div class="zan-button-1">
    <zan-button type="primary" loading>111</zan-button>
  </div>
  <div class="zan-button-1">
    <zan-button loading>222</zan-button>
  </div>
</div>
```

### button group

一组按钮。

```html 
<div class="zan-button-group">
  <zan-button type="primary" size="small">确认付款</zan-button>
  <zan-button size="small">确认收货</zan-button>
  <zan-button size="small">取消订单</zan-button>
</div>
```

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | string  | 'default'          | 'primary', 'danger'   |
| size | 按钮尺寸 | string  | 'normal'          | 'large', 'small', 'mini'  |
| tag | 按钮标签 | string  | 'button'          | 'a', 'span', ...  |
| diabled | 按钮是否禁用 | Boolean  |           |      |
| block | 按钮是否显示为块级元素 | Boolean  |           |      |

