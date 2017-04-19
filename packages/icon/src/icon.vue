<template>
  <i class="van-icon" :class="'van-icon-' + name" @click="handleIconClick"></i>
</template>

<script>
  export default {
    name: 'van-icon',

    props: {
      name: {
        type: String,
        required: true
      }
    },

    methods: {
      handleIconClick(event) {
        this.$emit('click', event);
      }
    }
  };
</script>
