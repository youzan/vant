<template>
  <span class="van-tag" :class="[type ? `van-tag--${type}`: '', { 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>

<script>
  const ALLOW_TYPE = ['', 'danger', 'success', 'primary'];

  export default {
    name: 'van-tag',
    props: {
      type: {
        validator: function (val) {
          return ~ALLOW_TYPE.indexOf(val);
        }
      },
      mark: Boolean,
      plain: Boolean
    }
  };
</script>
