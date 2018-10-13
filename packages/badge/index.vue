<template>
  <a
    :class="[b({ select }), 'van-hairline']"
    :href="url"
    @click="onClick"
  >
    <van-info :info="info" :class="b('info')" />
    {{ title }}
  </a>
</template>

<script>
import Info from '../info';
import create from '../utils/create';

export default create({
  name: 'badge',

  components: {
    [Info.name]: Info
  },

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
