<style>
@component-namespace demo {
  @b button {
    .zan-row {
      padding: 0 20px;
    }
    .zan-col {
      margin-bottom: 10px;
    }
    .button-group {
      font-size: 0;
      padding: 0 20px;
    }
  }
}
</style>

## Button 按钮

### 按钮功能

只接受`primary`, `default`, `danger`三种类型，默认`default`。

:::demo 按钮功能
```html
<zan-row>
  <zan-col span="24">
    <zan-button block>default</zan-button>
  </zan-col>
  <zan-col span="24">
    <zan-button type="primary" block>primary</zan-button>
  </zan-col>
  <zan-col span="24">
    <zan-button type="danger" block>danger</zan-button>
  </zan-col>
</zan-row>
```
:::

### 禁用状态

:::demo 禁用状态
```html
<zan-row>
  <zan-col span="24">
    <zan-button disabled block>diabled</zan-button>
  </zan-col>
</zan-row>
```
:::

### 按钮尺寸

只接受`large`, `normal`, `small`, `mini`四种尺寸，默认`normal`。

:::demo 按钮尺寸
```html 
<zan-row>
  <zan-col span="24">
    <zan-button size="large">large</zan-button>
  </zan-col>
</zan-row>
<zan-row gutter="10">
  <zan-col span="8">
    <zan-button type="primary" block>normal</zan-button>
  </zan-col>
  <zan-col span="8">
    <zan-button size="small" block>small</zan-button>
  </zan-col>
  <zan-col span="8">
    <zan-button size="mini" block>mini</zan-button>
  </zan-col>
</zan-row>
```
:::

### 自定义按钮标签

按钮默认是`button`标签，可以使用`tag`属性修改为一个`a`标签。

:::demo 自定义按钮标签
```html 
<zan-row>
  <zan-col span="24">
    <zan-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</zan-button>
  </zan-col>
</zan-row>
```
:::

### loading按钮

:::demo loading按钮
```html 
<zan-row>
  <zan-col span="24">
    <zan-button type="primary" loading block>loading</zan-button>
  </zan-col>
  <zan-col span="24">
    <zan-button loading block></zan-button>
  </zan-col>
</zan-row>
```
:::

### button group

:::demo button group
```html 
<div class="button-group">
  <zan-button type="primary" size="small">确认付款</zan-button>
  <zan-button size="small">确认收货</zan-button>
  <zan-button size="small">取消订单</zan-button>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | `string`  | `default`          | `primary`, `danger`   |
| size | 按钮尺寸 | `string`  | `normal`          | `large`, `small`, `mini`  |
| tag | 按钮标签 | `string`  | `button`          | `a`, `span`, ...  |
| diabled | 按钮是否禁用 | `boolean`  |           |      |
| block | 按钮是否显示为块级元素 | `boolean`  |           |      |

