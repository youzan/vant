## Card 图文组件

### 使用指南
``` javascript
import { Card } from 'vant';

Vue.component(Card.name, Card);
```

### 代码演示

#### 基础用法

当没有底部按钮时，右侧内容会居中显示。

:::demo 基础用法
```html
<van-card
  title="商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"
  desc="描述"
  thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
</van-card>
```
:::

#### 高级用法

可以使用具名`slot`重写标题等信息，其中包含`title`、`desc`、`footer`和`tag`四个`slot`。

:::demo 高级用法
```html
<van-card
  thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
  <div class="van-card__row" slot="title">
    <h4 class="van-card__title">商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余</h4>
    <span class="van-card__price">¥ 2.00</span>
  </div>
  <div class="van-card__row" slot="desc">
    <span class="van-card__num">x 2</span>
  </div>
  <div class="van-card__footer" slot="footer">
    <van-button size="mini">按钮一</van-button>
    <van-button size="mini">按钮二</van-button>
  </div>
</van-card>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| thumb | 左侧图片 | `string`  |          |          |
| title | 标题 | `string`  |          |          |
| desc | 描述 | `string`  |          |          |
| centered | 内容是否垂直居中 | `string`  | `false` |          |


### Slot

| name       | 描述      |
|-----------|-----------|
| title | 自定义标题 |
| desc | 自定义描述 |
| tags | 自定义tags |
| thumb | 自定义thumb |
| footer | 自定义footer |
