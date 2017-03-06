<style>
@component-namespace demo {
  @b panel {
    .zan-panel-sum {
      background: #fff;
      text-align: right;
      font-size: 14px;
      color: #333;
      line-height: 30px;
      padding-right: 15px;

      span {
        color: red;
      }
    }

    .zan-panel-buttons {
      text-align: right;

      .zan-button {
        margin-left: 5px;
      }
    }

    .panel-content {
      padding: 20px;
    }
  }
}
</style>

## Panel 面板

面板只是一个容器，里面可以放入自定义的内容。

### 基础用法

:::demo
```html
<zan-panel title="标题" desc="标题描述" status="状态">
  <div class="panel-content">
    panel内容
  </div>
</zan-panel>
```
:::

### 高级用法

使用具名`slot`自定义内容。

:::demo
```html
<zan-panel title="标题" desc="标题描述" status="状态">
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
  <div class="zan-panel-sum">
    合计：<span>¥ 1999.90</span>
  </div>
  <div class="zan-panel-buttons" slot="footer">
    <zan-button size="small">按钮一</zan-button>
    <zan-button size="small" type="danger">按钮二</zan-button>
  </div>
</zan-panel>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | string  | ''          | ''          |
| desc | 描述 | string  | ''          | ''          |
| status | 状态 | string  | ''          | ''          |


### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义内容 |
| header | 自定义header |
| footer | 自定义footer |
