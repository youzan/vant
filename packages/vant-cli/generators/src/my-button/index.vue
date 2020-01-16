<template>
  <van-button :type="type" :color="color" class="my-button">
    <slot />
  </van-button>
</template>

<script>
import { Button } from 'vant';
import MyIcon from '../my-icon';
import { foo } from './utils';

export default {
  name: 'my-button',

  components: {
    [MyIcon.name]: MyIcon,
    [Button.name]: Button
  },

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    }
  },

  methods: {
    foo
  }
};
</script>

<style lang="less">
.my-button {
  min-width: 120px;
  font-weight: 500;
}
</style>
