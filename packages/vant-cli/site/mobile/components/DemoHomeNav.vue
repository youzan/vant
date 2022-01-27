<template>
  <div class="demo-home-nav">
    <div class="demo-home-nav__title">{{ group.title }}</div>
    <div class="demo-home-nav__group">
      <router-link
        class="demo-home-nav__block"
        v-for="navItem in group.items"
        :key="navItem.path"
        :to="`${base}/${navItem.path}`"
      >
        {{ navItem.title }}
        <arrow-right class="demo-home-nav__icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ArrowRight from './ArrowRight.vue';

export default {
  components: {
    ArrowRight,
  },

  props: {
    lang: String,
    group: Object,
  },

  data() {
    return {
      active: [],
    };
  },

  computed: {
    base() {
      return this.lang ? `/${this.lang}` : '';
    },
  },
};
</script>

<style lang="less">
.demo-home-nav {
  &__title {
    margin: 24px 0 8px 16px;
    color: var(--van-doc-text-color-4);
    font-size: 14px;
  }

  &__block {
    position: relative;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: var(--van-doc-text-color-3);
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    background-color: var(--van-doc-background-3);
    border-radius: 99px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 16px;
    height: 16px;
    margin-top: -8px;
  }
}
</style>
