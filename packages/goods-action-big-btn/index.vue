<template>
  <van-button
    square
    :class="b()"
    size="large"
    :loading="loading"
    :disabled="disabled"
    :type="primary ? 'danger' : 'warning'"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </van-button>
</template>

<script>
import create from '../utils/create';
import VanButton from '../button';
import RouterLink from '../mixins/router-link';

export default create({
  name: 'goods-action-big-btn',

  mixins: [RouterLink],

  components: {
    VanButton
  },

  props: {
    text: String,
    primary: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
});
</script>
