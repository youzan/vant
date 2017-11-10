<template>
  <div class="van-sku-header van-hairline--bottom">
    <div class="van-sku-header__img-wrap">
      <img class="van-sku__goods-img" :src="goodsImg">
    </div>
    <div class="van-sku-header__goods-info">
      <div class="van-sku__goods-name">{{ goods.title }}</div>
      <div class="van-sku__goods-price"><span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ price }}</span></div>
      <span class="van-sku__close-icon" @click="onCloseClicked"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'van-sku-header',

  props: {
    skuEventBus: Object,
    sku: Object,
    selectedSku: Object,
    selectedSkuComb: Object,
    goods: Object
  },

  computed: {
    skuTree() {
      return this.sku.tree;
    },
    goodsImg() {
      const s1Id = this.selectedSku.s1;
      const skuImg = this.getSkuImg(s1Id);
      // 优先使用选中sku的图片
      return skuImg || this.goods.picture;
    },
    price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      }
      // sku.price是一个格式化好的价格区间
      return this.sku.price;
    }
  },

  methods: {
    onCloseClicked() {
      this.skuEventBus.$emit('sku:close');
    },
    getSkuImg(id) {
      if (!id) return;

      // 目前skuImg都挂载在skuTree中s1那类sku上
      const treeItem = this.skuTree.filter(treeItem => treeItem.k_s === 's1')[0] || {};

      if (!treeItem.v) {
        return;
      }

      const matchedSku = treeItem.v.filter(skuValue => skuValue.id === id)[0];
      if (matchedSku && matchedSku.imgUrl) {
        return matchedSku.imgUrl;
      }
    }
  }
};
</script>
