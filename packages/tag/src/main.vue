<template>
  <span class="van-tag" :class="[type ? `van-tag--${type}`: '', { 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'van-tag',
    props: {
      type: {
        validator: function (val) {
          return ~['', 'danger', 'success', 'primary'].indexOf(val);
        }
      },
      mark: Boolean,
      plain: Boolean
    }
  };
</script>
