<template>
  <div class="z-card">
    <img :src="thumb" alt="" class="z-card__img">
    <div class="z-card__content" :class="{'is-center': !this.$slots.footer}">
      <div class="z-card__info">
        <slot name="title">
          <h4 v-text="title" class="z-card__title"></h4>
        </slot>
        <slot name="desc">
          <p v-if="desc" v-text="desc" class="z-card__title"></p>
        </slot>
        <slot name="tags"></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-card',
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
