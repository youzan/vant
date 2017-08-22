<template>
  <i :class="['van-icon', 'van-icon-' + name]" @click="$emit('click', $event)" />
</template>

<script>
export default {
  name: 'van-icon',

  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
