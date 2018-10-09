## Button 按钮

### 使用指南
``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`warning`、`danger`四种类型，默认为`default`

```html
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```

#### 朴素按钮

```html
<van-button plain type="primary">朴素按钮</van-button>
<van-button plain type="danger">朴素按钮</van-button>
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
<van-button loading type="danger" />
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

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 按钮类型，可选值为 `primary` `warning` `danger` | `String` | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |
| text | 按钮文字 | `String` | - |
| tag | 按钮 HTML 标签 | `String` | `button` |
| native-type | 按钮类型（原生） | `String` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` |
| disabled | 是否禁用按钮 | `Boolean` | `false` |
| loading | 是否显示为加载状态 | `Boolean` | `false` |
| block | 是否为块级元素 | `Boolean` | `false` |
| round | 是否为圆形按钮 | `Boolean` | `false` |
| square | 是否为方形按钮 | `Boolean` | `false` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | - |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.4 | feature | 新增 round 属性 |
| 1.3.1 | bugfix | 修复加载图标颜色错误的问题
| 1.2.0 | feature | 新增 square 属性
| 1.1.15 | feature | 新增 warning 类型
| 1.1.15 | bugfix | 修复浏览器文字缩放时样式错误的问题
| 1.1.13 | feature | 新增 plain 属性
| 1.0.5 | bugfix | 修复 loading 状态下无法水平对齐的问题
| 1.0.4 | bugfix | 修复加载状态下可点击的问题
