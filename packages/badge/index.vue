<template>
  <a
    :class="[b({ select }), 'van-hairline']"
    :href="url"
    @click="onClick"
  >
    <div v-if="isDef(info)" :class="b('info')">{{ info }}</div>
    {{ title }}
  </a>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'badge',

  props: {
    url: String,
    info: [String, Number],
    title: String
  },

  beforeCreate() {
    this.$parent.badges.push(this);
  },

  computed: {
    select() {
      return this.$parent.badges.indexOf(this) === this.$parent.activeKey;
    }
  },

  methods: {
    onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
});
</script>
