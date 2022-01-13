<template>
  <div class="for-com-item">
    <slot :item="item"></slot>
  </div>
</template>

<script>
export default {
    name: 'van-for-components-item',
    components: {
    },
    props: {
      item: {
        type: [Object,String, Number],
      }
    },
    data() {
      return {
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {

    }
};
</script>

<style scoped>
  .for-com-item {
    margin-right: 10px;
  }
</style>
