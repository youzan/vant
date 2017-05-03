<style>
@component-namespace demo {
  @b button {
    .van-button {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      user-select: none;
    }
    .van-row {
      padding: 0 15px;
      margin-bottom: 20px;
    }
    .van-col-24 {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

## Button 按钮

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Button`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Button`组件了：

```js
import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/vant-css/button.css';

Vue.component(Button.name, Button);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Button`组件，这样只能在你注册的组件中使用`Button`：

```js
import { Button } from 'vant';
import 'vant/lib/vant-css/button.css';

export default {
  components: {
    'van-button': Button
  }
};
```

### 代码演示

#### 按钮功能

只接受`primary`, `default`, `danger`三种类型，默认`default`。

:::demo 按钮功能
```html
<van-row>
  <van-col span="24">
    <van-button block>default</van-button>
  </van-col>
  <van-col span="24">
    <van-button type="primary" block>primary</van-button>
  </van-col>
  <van-col span="24">
    <van-button type="danger" block>danger</van-button>
  </van-col>
</van-row>
```
:::

#### 禁用状态

在组件上加上`disabled`属性即可，此时按钮不可点击。

:::demo 禁用状态
```html
<van-row>
  <van-col span="24">
    <van-button disabled block>diabled</van-button>
  </van-col>
</van-row>
```
:::

#### 按钮尺寸

只接受`large`, `normal`, `small`, `mini`四种尺寸，默认`normal`。`large`按钮默认100%宽度。

:::demo 按钮尺寸
```html 
<van-row>
  <van-col span="24">
    <van-button size="large">large</van-button>
  </van-col>
  <van-col span="24">
    <van-button size="normal">normal</van-button>
  </van-col>
  <van-col span="24">
    <van-button size="small">small</van-button>
  </van-col>
  <van-col span="24">
    <van-button size="mini">mini</van-button>
  </van-col>
</van-row>
```
:::

#### 自定义按钮标签

按钮默认是`button`标签，可以使用`tag`属性修改为一个`a`标签。

:::demo 自定义按钮标签
```html 
<van-row>
  <van-col span="24">
    <van-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</van-button>
  </van-col>
</van-row>
```
:::

#### loading按钮

`loading`状态的按钮。

:::demo loading按钮
```html 
<van-row>
  <van-col span="24">
    <van-button type="primary" loading block>loading</van-button>
  </van-col>
  <van-col span="24">
    <van-button loading block></van-button>
  </van-col>
</van-row>
```
:::

#### 页面底部操作按钮

一般用于`fixed`在底部的区域或是`popup`弹层的底部，一般只使用`primary`和`normal`两种状态。

:::demo 页面底部操作按钮
```html 
<van-row>
  <van-col span="24">
    <van-button type="primary" bottom-action>立即购买</van-button>
  </van-col>
</van-row>
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
| type | 按钮类型 | `string`  | `default`          | `primary`, `danger`   |
| size | 按钮尺寸 | `string`  | `normal`          | `large`, `small`, `mini`  |
| tag | 按钮标签 | `string`  | `button`          | 任何有意义的`html`标签, 如`a`, `span`等  |
| diabled | 按钮是否禁用 | `boolean`  |  `false`  |      |
| block | 按钮是否显示为块级元素 | `boolean`  |   `false`   |      |
| bottomAction | 按钮是否显示为底部行动按钮，一般显示在页面底部，有特殊样式 | `boolean`  |   `false`   |      |

