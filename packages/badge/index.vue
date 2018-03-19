<template>
  <a class="van-badge van-hairline" :class="{ 'van-badge--select': isSelect }" :href="url" @click="onClick">
    <div v-if="info" class="van-badge__info">{{ info }}</div>
    {{ title }}
  </a>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'badge',

  props: {
    url: String,
    info: String,
    title: String
  },

  beforeCreate() {
    this.$parent.badges.push(this);
  },

  computed: {
    isSelect() {
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
