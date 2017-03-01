<template>
  <div class="page-panel">
    <h1 class="page-title">Panel</h1>

    <h2 class="page-sub-title">基础用法</h2>
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
    </zan-panel>

    <h2 class="page-sub-title">高级用法</h2>
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
  </div>  
</template>

<style>
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
</style>
