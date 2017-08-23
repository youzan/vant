<template>
  <div :class="['van-card', { 'van-card--center': centered }]">
    <div class="van-card__thumb">
      <slot name="thumb">
        <img :src="thumb" class="van-card__img" />
      </slot>
    </div>
    <div class="van-card__content">
      <slot name="title">
        <h4 v-text="title" class="van-card__title"></h4>
      </slot>
      <slot name="desc">
        <p v-if="desc" v-text="desc" class="van-card__desc"></p>
      </slot>
      <slot name="tags"></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'van-card',

  props: {
    thumb: String,
    title: String,
    desc: String,
    centered: Boolean
  }
};
</script>
