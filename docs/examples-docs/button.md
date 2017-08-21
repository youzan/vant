<style>
.demo-button {
  .van-button {
    user-select: none;

    &--large,
    &--bottom-action {
      margin-bottom: 15px;
    }
  }

  .zan-doc-demo-block {
    padding: 0 15px;
  }

  .zan-doc-demo-block__subtitle {
    padding-left: 0;
  }
}
</style>

## Button 按钮

### 使用指南
``` javascript
import { Button } from 'vant';

Vue.component(Button.name, Button);
```

### 代码演示

#### 按钮类型

支持`default`、`primary`、`danger`三种类型，默认为`default`

:::demo 按钮类型
```html
<van-button type="default">Default</van-button>
<van-button type="primary">Primary</van-button>
<van-button type="danger">Danger</van-button>
```
:::

#### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

:::demo 按钮尺寸
```html 
<van-button size="large">large</van-button>
<van-button size="normal">normal</van-button>
<van-button size="small">small</van-button>
<van-button size="mini">mini</van-button>
```
:::

#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

:::demo 禁用状态
```html
<van-button disabled>diabled</van-button>
```
:::

#### 加载状态

:::demo 加载状态
```html 
<van-button loading />
```
:::

#### 自定义按钮标签

按钮标签默认为`button`，可以使用`tag`属性来修改按钮标签

:::demo 自定义按钮标签
```html 
<van-button tag="a" href="https://www.youzan.com" target="_blank">
  a标签按钮
</van-button>
```
:::

#### 页面底部操作按钮

:::demo 页面底部操作按钮
```html 
<van-button type="primary" bottom-action>立即购买</van-button>

<van-row>
  <van-col span="12">
    <van-button bottom-action>加入购物车</van-button>
  </van-col>
  <van-col span="12">
    <van-button type="primary" bottom-action>立即购买</van-button>
  </van-col>
</van-row>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | `String`  | `default` | `primary` `danger` |
| size | 按钮尺寸 | `String`  | `normal` | `large` `small` `mini` |
| tag | 按钮标签 | `String`  | `button` | 任意`HTML`标签 |
| nativeType | 按钮类型（原生） | `String`  | `''` | |
| diabled | 是否禁用 | `Boolean`  |  `false`  | |
| loading | 是否显示为加载状态 | `Boolean`  |  `false`  | |
| block | 是否为块级元素 | `Boolean`  |   `false`   | |
| bottomAction | 是否为底部行动按钮 | `Boolean` | `false` | |
