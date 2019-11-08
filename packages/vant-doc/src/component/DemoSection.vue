<template>
  <section class="van-doc-demo-section" :class="demoName">
    <slot />
  </section>
</template>

<script>
import decamelize from 'decamelize';

export default {
  name: 'demo-section',

  computed: {
    demoName() {
      const { meta } = this.$route;
      if (meta && meta.name) {
        return `demo-${decamelize(meta.name, '-')}`;
      }

      return '';
    }
  }
};
</script>

<style lang="less">
.van-doc-demo-section {
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 20px;
}
</style>
