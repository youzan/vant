<template>
  <div class="van-tabbar-item" :class="{ 'van-tabbar-item--active': active }" @click="onClick">
    <div class="van-tabbar-item__icon" :class="{ 'van-tabbar-item__icon-dot': dot }">
      <slot name="icon" :active="active">
        <van-icon v-if="icon" :name="icon" />
      </slot>
      <div v-if="info" class="van-tabbar-item__info">{{ info }}</div>
    </div>
    <div class="van-tabbar-item__text">
      <slot :active="active"></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon';
import RouterLink from '../mixins/router-link';

export default {
  name: 'van-tabbar-item',

  mixins: [RouterLink],

  components: {
    [Icon.name]: Icon
  },

  props: {
    icon: String,
    dot: Boolean,
    info: String
  },

  data() {
    return {
      active: false
    };
  },

  beforeCreate() {
    this.$parent.items.push(this);
  },

  destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },

  methods: {
    onClick() {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.routerLink();
    }
  }
};
</script>
