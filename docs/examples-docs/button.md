<style>
@component-namespace demo {
  @b button {
    .zan-row {
      padding: 0 20px;
    }
    .zan-col {
      margin-bottom: 10px;
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

在组件上加上`disabled`属性即可，此时按钮不可点击。

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

只接受`large`, `normal`, `small`, `mini`四种尺寸，默认`normal`。`large`按钮默认100%宽度。

:::demo 按钮尺寸
```html 
<zan-row>
  <zan-col span="24">
    <zan-button size="large">large</zan-button>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="24">
    <zan-button size="normal">normal</zan-button>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="24">
    <zan-button size="small">small</zan-button>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="24">
    <zan-button size="mini">mini</zan-button>
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

`loading`状态的按钮。

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

### 页面底部操作按钮
一般用于fixed在底部的区域或是popup弹层的底部，一般只使用`primary`和`normal`两种状态。

:::demo 
```html 
<zan-row>
  <zan-col span="24">
    <zan-button type="primary" bottom-action>立即购买</zan-button>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="12">
    <zan-button bottom-action>加入购物车</zan-button>
  </zan-col>
  <zan-col span="12">
    <zan-button type="primary" bottom-action>立即购买</zan-button>
  </zan-col>
</zan-row>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | `string`  | `default`          | `primary`, `danger`   |
| size | 按钮尺寸 | `string`  | `normal`          | `large`, `small`, `mini`  |
| tag | 按钮标签 | `string`  | `button`          | `a`, `span`, ...  |
| diabled | 按钮是否禁用 | `boolean`  |  false  |      |
| block | 按钮是否显示为块级元素 | `boolean`  |   false   |      |
| bottomAction | 按钮是否显示为底部行动按钮，一般显示在页面底部，有特殊样式 | `boolean`  |   false   |      |

