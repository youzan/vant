<template>
  <zan-doc-block :class="`demo-${component}`">
    <slot name="highlight"></slot>
  </zan-doc-block>
</template>

<script>
export default {
  name: 'demo-block',

  computed: {
    component() {
      return this.$route.path.split('/').pop();
    }
  }
};
</script>
