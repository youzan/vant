<template>
  <div :class="['van-card', { 'van-card--center': centered }]">
    <div class="van-card__thumb">
      <slot name="thumb">
        <img :src="thumb" class="van-card__img" />
      </slot>
    </div>
    <div class="van-card__content">
      <slot name="title">
        <div class="van-card__row" v-if="title || price !== undefined">
          <div v-if="title" class="van-card__title">{{ title }}</div>
          <div v-if="price !== undefined" class="van-card__price">¥ {{ price }}</div>
        </div>
      </slot>
      <slot name="desc">
        <div class="van-card__row" v-if="desc || num !== undefined">
          <div v-if="desc" class="van-card__desc">{{ desc }}</div>
          <div v-if="num !== undefined" class="van-card__num">x {{ num }}</div>
        </div>
      </slot>
      <slot name="tags"></slot>
    </div>
    <div class="van-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'van-card',

  props: {
    thumb: String,
    title: String,
    desc: String,
    num: [Number, String],
    centered: Boolean,
    price: [Number, String]
  }
};
</script>
