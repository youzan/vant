<template>
  <div class="van-invalid-goods-card">
    <div class="van-invalid-goods__thumb">
      <img :src="item.img_url" />
      <div class="van-invalid-goods-card__flag">失效</div>
    </div>
    <div class="van-invalid-goods-card__content">
      <div class="van-invalid-goods-card__row">
        <h4 class="van-invalid-goods-card__title">{{ item.title }}</h4>
        <span class="van-invalid-goods-card__price">¥{{ item.price }}</span>
      </div>
      <div class="van-invalid-goods-card__row">
        <div class="van-invalid-goods-card__sku">{{ item.sku }}</div>
        <span  class="van-invalid-goods-card__num">x{{ item.num }}</span>
      </div>
      <div class="van-invalid-goods-card__desc">{{ item.unavailable_desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'van-invalid-goods-card',

  props: {
    item: Object
  }
};
</script>

