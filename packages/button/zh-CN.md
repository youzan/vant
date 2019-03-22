## Button 按钮

### 使用指南
``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

### 代码演示

#### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```

#### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<van-button plain type="primary">朴素按钮</van-button>
<van-button plain type="danger">朴素按钮</van-button>
```

#### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现

```html
<van-button plain hairline type="primary">细边框按钮</van-button>
<van-button plain hairline type="danger">细边框按钮</van-button>
```

#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<van-button disabled type="primary">禁用状态</van-button>
<van-button disabled type="danger">禁用状态</van-button>
```

#### 加载状态

```html 
<van-button loading type="primary" />
<van-button loading type="danger" loading-text="加载中..." />
```

#### 按钮形状

```html 
<van-button square type="primary">方形按钮</van-button>
<van-button round type="danger">圆形按钮</van-button>
```

#### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<van-button size="large">大号按钮</van-button>
<van-button size="normal">普通按钮</van-button>
<van-button size="small">小型按钮</van-button>
<van-button size="mini">迷你按钮</van-button>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `primary` `info` `warning` `danger` | `String` | `default` | 1.6.6 |
| size | 尺寸，可选值为 `large` `small` `mini` | `String` | `normal` | - |
| text | 文字 | `String` | - | - |
| tag | HTML 标签 | `String` | `button` | - |
| native-type | 原生 type 属性 | `String` | - | - |
| block | 是否为块级元素 | `Boolean` | `false` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` | 1.1.13 |
| square | 是否为方形按钮 | `Boolean` | `false` | 1.2.0 |
| round | 是否为圆形按钮 | `Boolean` | `false` | 1.3.4 |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - |
| hairline | 是否使用 0.5px 边框 | `Boolean` | `false` | 1.6.11 |
| loading | 是否显示为加载状态 | `Boolean` | `false` | - |
| loading-text | 加载状态提示文字 | `String` | - | 1.6.3 |
| loading-size | 加载图标大小 | `String` | `20px` | 1.6.7 |
| url | 跳转链接 | `String` | - | 1.6.5 |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | 1.6.5 |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | 1.6.5 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event |
| touchstart | 原生 touchstart 事件 | event: TouchEvent |
