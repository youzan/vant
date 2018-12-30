<template>
  <div
    :class="b()"
    class="van-hairline--bottom"
  >
    <div
      :class="b('img-wrap')"
      @click="previewImage"
    >
      <img :src="goodsImg">
    </div>
    <div :class="b('goods-info')">
      <div
        v-text="goods.title"
        class="van-sku__goods-name van-ellipsis"
      />
      <!-- price display area -->
      <slot />
      <icon
        name="close"
        class="van-sku__close-icon"
        @click="skuEventBus.$emit('sku:close')"
      />
    </div>
  </div>
</template>

<script>
import create from '../../utils/create';

export default create({
  name: 'sku-header',

  props: {
    sku: Object,
    goods: Object,
    skuEventBus: Object,
    selectedSku: Object
  },

  computed: {
    goodsImg() {
      const s1Id = this.selectedSku.s1;
      const skuImg = this.getSkuImg(s1Id);
      // 优先使用选中sku的图片
      return skuImg || this.goods.picture;
    }
  },

  methods: {
    getSkuImg(id) {
      if (!id) return;

      // 目前skuImg都挂载在skuTree中s1那类sku上
      const treeItem = this.sku.tree.filter(item => item.k_s === 's1')[0] || {};

      if (!treeItem.v) {
        return;
      }

      const matchedSku = treeItem.v.filter(skuValue => skuValue.id === id)[0];
      if (matchedSku && matchedSku.imgUrl) {
        return matchedSku.imgUrl;
      }
    },

    previewImage() {
      this.skuEventBus.$emit('sku:previewImage', this.goodsImg);
    }
  }
});
</script>
