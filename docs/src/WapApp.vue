<template>
  <div>
    <van-nav-bar
      v-show="title"
      fixed
      class="van-doc-nav-bar"
      :title="title"
      left-arrow
      :left-text="$t('back')"
      @click-left="onBack"
    />
    <router-view />
  </div>
</template>

<script>
import { camelize } from 'packages/utils';

export default {
  computed: {
    title() {
      const name = this.$route.name;
      return name ? camelize(name.split('/').pop()) : '';
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="postcss">
body {
  color: #333;
  line-height: 1;
  background-color: #f8f8f8;
  font-family: Arial, Helvetica, "STHeiti STXihei", "Microsoft YaHei", Tohoma, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.van-doc-nav-bar {
  .van-nav-bar__title {
    text-transform: capitalize;
  }
}

.van-doc-demo-section {
  padding-top: 46px;
}
</style>
