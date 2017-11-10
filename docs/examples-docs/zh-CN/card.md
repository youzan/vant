<script>
export default {
  data() {
    return {
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    }
  }
}
</script>

## Card 卡片

### 使用指南
``` javascript
import { Card } from 'vant';

Vue.component(Card.name, Card);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-card
  title="商品名称"
  desc="商品描述"
  num="2"
  price="2.00"
  :thumb="imageURL"
/>
```
:::

#### 高级用法
可以通过具名`slot`添加定制内容

:::demo 高级用法
```html
<van-card
  title="商品名称"
  desc="商品描述"  
  num="2"
  price="2.00"
  :thumb="imageURL"
>
  <div slot="footer">
    <van-button size="mini">按钮一</van-button>
    <van-button size="mini">按钮二</van-button>
  </div>
</van-card>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| thumb | 左侧图片 | `String` | - | - |
| title | 标题 | `String` | - | - |
| desc | 描述 | `String` | - | - |
| num | 商品数量 | `String | Number` | - | - |
| price | 商品价格 | `String | Number` | - | - |
| centered | 内容是否垂直居中 | `String` | `false` | - |

### Slot

| name | 描述 |
|-----------|-----------|
| title | 自定义标题 |
| desc | 自定义描述 |
| tags | 自定义 tags |
| thumb | 自定义 thumb |
| footer | 自定义 footer |
