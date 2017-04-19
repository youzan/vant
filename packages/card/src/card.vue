<template>
  <div class="van-card">
    <img :src="thumb" alt="" class="van-card__img">
    <div class="van-card__content" :class="{'van-card__content--center': !this.$slots.footer}">
      <div class="van-card__info">
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
  </div>
</template>

<script>
export default {
  name: 'van-card',
  props: {
    thumb: {
      type: String,
      required: true
    },
    title: String,
    desc: String
  }
};
</script>
