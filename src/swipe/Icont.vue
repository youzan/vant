<template>
  <i></i>
</template>

<script>
  export default {
    name: 'Icont',
    props: {
      index: [String, Number]
    },
    methods: {
      designerControl() {
        this.$emit('click', this.index);
      }
    }
  }
</script>
