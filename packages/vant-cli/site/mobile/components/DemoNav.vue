<template>
  <div v-show="title" class="demo-nav">
    <div class="demo-nav__title">{{ title }}</div>
    <svg class="demo-nav__back" viewBox="0 0 1000 1000" @click="onBack">
      <path fill="#969799" fill-rule="evenodd" :d="path" />
    </svg>
  </div>
</template>

<script>
/* eslint-disable max-len */
export default {
  data() {
    return {
      path:
        'M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z',
    };
  },

  computed: {
    title() {
      const { name } = this.$route.meta || {};
      return name ? name.replace(/-/g, '') : '';
    },
  },

  methods: {
    onBack() {
      if (history.length > 1) {
        history.back();
      } else {
        this.$router.replace('/');
      }
    },
  },
};
</script>

<style lang="less">
.demo-nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  background-color: #fff;

  &__title {
    font-weight: 500;
    font-size: 17px;
    text-transform: capitalize;
  }

  &__back {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}
</style>
