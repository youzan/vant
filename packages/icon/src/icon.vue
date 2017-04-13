<template>
  <i class="zan-icon" :class="'zan-icon-' + name" @click="handleIconClick"></i>
</template>

<script>
  export default {
    name: 'zan-icon',

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
