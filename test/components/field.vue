<template>
  <van-field :onIconClick="onIconClick" @blur="$emit('blur')">
    <div slot="icon">icon</div>
  </van-field>
</template>

<script>
import Field from 'packages/field';

export default {
  components: {
    [Field.name]: Field
  },

  props: ['onIconClick']
};
</script>

