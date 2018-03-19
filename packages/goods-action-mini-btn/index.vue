<template>
  <a :href="url" class="van-goods-action__mini-btn van-hairline" @click="onClick">
    <icon class="van-goods-action__mini-btn-icon" :class="iconClass" :info="info" :name="icon" />
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
import create from '../utils/create';
import RouterLink from '../mixins/router-link';

export default create({
  name: 'goods-action-mini-btn',

  mixins: [RouterLink],

  props: {
    url: String,
    text: String,
    info: String,
    icon: String,
    iconClass: String
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
});
</script>
