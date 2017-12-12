## Button 按钮

### 使用指南
``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`danger`三种类型，默认为`default`

```html
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```

#### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<van-button size="large">大号按钮</van-button>
<van-button size="normal">普通按钮</van-button>
<van-button size="small">小型按钮</van-button>
<van-button size="mini">迷你按钮</van-button>
```

#### 禁用状态
通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<van-button disabled>禁用状态</van-button>
```

#### 加载状态

```html 
<van-button loading />
<van-button loading type="primary" />
```

#### 自定义按钮标签

按钮标签默认为`button`，可以使用`tag`属性来修改按钮标签

```html 
<van-button tag="a" href="https://www.youzan.com" target="_blank">
  按钮
</van-button>
```

#### 页面底部操作按钮

```html 
<van-button type="primary" bottomAction>按钮</van-button>

<van-row>
  <van-col span="12">
    <van-button bottomAction>按钮</van-button>
  </van-col>
  <van-col span="12">
    <van-button type="primary" bottomAction>按钮</van-button>
  </van-col>
</van-row>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | `String` | `default` | `primary` `danger` |
| size | 按钮尺寸 | `String` | `normal` | `large` `small` `mini` |
| tag | 按钮标签 | `String` | `button` | 任意`HTML`标签 |
| nativeType | 按钮类型（原生） | `String` | `''` | - |
| diabled | 是否禁用 | `Boolean` |  `false` | - |
| loading | 是否显示为加载状态 | `Boolean` |  `false` | - |
| block | 是否为块级元素 | `Boolean` |   `false` | - |
| bottomAction | 是否为底部行动按钮 | `Boolean` | `false` | - |
