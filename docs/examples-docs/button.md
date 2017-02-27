## Button组件

### 按钮功能

只接受primary, default, danger三种类型，默认default。

```html
<div class="z-button-group">
  <div class="z-button-1">
    <z-button>default</z-button>
  </div>
  <div class="z-button-1">
    <z-button type="primary">primary</z-button>
  </div>
  <div class="z-button-1">
    <z-button type="danger">danger</z-button>
  </div>
</div>
```

### 禁用状态

```html
<div class="z-button-group">
  <div class="z-button-1">
    <z-button disabled>diabled</z-button>
  </div>
</div>
```

### 按钮尺寸

只接受large, normal, small, mini四种尺寸，默认normal。

```html 
<div class="z-button-group">
  <div class="z-button-1">
    <z-button size="large">large</z-button>
  </div>
</div>
<div class="z-button-group" :style="{ width: '50%' }">
  <div class="z-button-3">
    <z-button type="primary">normal</z-button>
  </div>
  <div class="z-button-3">
    <z-button size="small">small</z-button>
  </div>
  <div class="z-button-3">
    <z-button size="mini">mini</z-button>
  </div>
</div>

```

### 自定义按钮标签

按钮默认是button标签，可以使用tag属性修改为一个a标签。

```html 
<div class="z-button-group">
  <div class="z-button-1">
    <z-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</z-button>
  </div>
</div>
```

### button group

一组按钮。

```html 
<div class="z-button-group">
  <z-button type="primary" size="small">确认付款</z-button>
  <z-button size="small">确认收货</z-button>
  <z-button size="small">取消订单</z-button>
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

