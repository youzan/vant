<template>
  <zan-doc-block :class="`demo-${component}`">
    <slot name="highlight"></slot>
  </zan-doc-block>
</template>

<script>
export default {
  computed: {
    component() {
      return this.$route.path.split('/').pop();
    }
  }
};
</script>
