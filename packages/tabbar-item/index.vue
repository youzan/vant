<template>
  <div
    :class="b({ active })"
    @click="onClick"
  >
    <div :class="b('icon', { dot })">
      <slot
        name="icon"
        :active="active"
      >
        <icon
          v-if="icon"
          :name="icon"
        />
      </slot>
      <van-info :info="info" />
    </div>
    <div :class="b('text')">
      <slot :active="active" />
    </div>
  </div>
</template>

<script>
import Info from '../info';
import create from '../utils/create';
import RouterLink from '../mixins/router-link';

export default create({
  name: 'tabbar-item',

  components: {
    [Info.name]: Info
  },

  mixins: [RouterLink],

  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
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
    onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      this.routerLink();
    }
  }
});
</script>
