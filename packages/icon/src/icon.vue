<template>
  <i class="zanui-icon" :class="'zan-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'zan-icon',

    props: {
      name: String
    }
  };
</script>
