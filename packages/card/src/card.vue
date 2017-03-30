<template>
  <div class="zan-card">
    <img :src="thumb" alt="" class="zan-card__img">
    <div class="zan-card__content" :class="{'zan-card__content--center': !this.$slots.footer}">
      <div class="zan-card__info">
        <slot name="title">
          <h4 v-text="title" class="zan-card__title"></h4>
        </slot>
        <slot name="desc">
          <p v-if="desc" v-text="desc" class="zan-card__desc"></p>
        </slot>
        <slot name="tags"></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zan-card',
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
