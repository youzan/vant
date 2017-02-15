<template>
  <i :class="'zenui-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'o2-icon',

    props: {
      name: String
    }
  };
</script>
