## Card 图文组件

### 基础用法

当没有底部按钮时，右侧内容会居中显示。

:::demo 基础用法
```html
<zan-card
  title="商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"
  desc="描述"
  thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
</zan-card>
```
:::

### 高级用法

可以使用具名`slot`重写标题等信息，其中包含`title`、`desc`、`footer`和`tag`四个`slot`。

:::demo 高级用法
```html
<zan-card
  title="商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"
  desc="商品SKU1，商品SKU2"
  thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
  <div class="zan-card__row" slot="title">
    <h4 class="zan-card__title">商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余</h4>
    <span class="zan-card__price">¥ 2.00</span>
  </div>
  <div class="zan-card__row" slot="desc">
    <h4 class="zan-card__desc">商品sku</h4>
    <span class="zan-card__num">x 2</span>
  </div>
  <div class="zan-card__footer" slot="footer">
    <zan-button size="mini">按钮一</zan-button>
    <zan-button size="mini">按钮二</zan-button>
  </div>
</zan-card>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| thumb | 左侧图片 | string  | ''          | ''          |
| title | 标题 | string  | ''          | ''          |
| desc | 描述 | string  | ''          | ''          |


### Slot

| name       | 描述      |
|-----------|-----------|
| title | 自定义标题 |
| desc | 自定义描述 |
| tags | 自定义tags |
| footer | 自定义footer |
