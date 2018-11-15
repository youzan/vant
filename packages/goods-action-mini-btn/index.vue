<template>
  <div
    :class="b()"
    class="van-hairline"
    @click="onClick"
  >
    <icon
      :class="[b('icon'), iconClass]"
      :info="info"
      :name="icon"
    />
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
import create from '../utils/create';
import RouterLink from '../mixins/router-link';

export default create({
  name: 'goods-action-mini-btn',

  mixins: [RouterLink],

  props: {
    text: String,
    info: [String, Number],
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
