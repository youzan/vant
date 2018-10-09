## Card 卡片

### 使用指南
``` javascript
import { Card } from 'vant';

Vue.use(Card);
```

### 代码演示

#### 基础用法

```html
<van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  :thumb="imageURL"
/>
```

#### 高级用法
可以通过具名`slot`添加定制内容

```html
<van-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  :thumb="imageURL"
>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| thumb | 左侧图片 URL | `String` | - |
| title | 标题 | `String` | - |
| desc | 描述 | `String` | - |
| tag | 标签 | `String` | - |
| num | 商品数量 | `String | Number` | - |
| price | 商品价格 | `String | Number` | - |
| centered | 内容是否垂直居中 | `String` | `false` |
| currency | 货币符号 |  `String` | `¥` |
| thumb-link | 点击左侧图片后的跳转链接 | `String` | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| title | 自定义标题 |
| desc | 自定义描述 |
| tags | 自定义 tags |
| thumb | 自定义 thumb |
| footer | 自定义 footer |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.4 | feature | 新增 thumb-link 属性 |
| 1.3.4 | feature | 新增 tag 属性 |
