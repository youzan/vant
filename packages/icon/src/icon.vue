<template>
  <i :class="'zenui-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'z-icon',

    props: {
      name: String
    }
  };
</script>
