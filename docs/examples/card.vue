<template>
  <div class="page-card">
    <h1 class="page-title">Card</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <zan-card
      title="商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"
      desc="描述"
      thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
    </zan-card>

    <h2 class="page-sub-title">高级用法</h2>
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
  </div>
</template>

<style>
.page-sub-title {
  padding: 15px;
}
</style>
