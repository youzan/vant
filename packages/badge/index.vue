<template>
  <a :class="['van-badge van-hairline', { 'van-badge--select': isSelect }]" :href="url" @click="onClick">
    <div v-if="info" class="van-badge__info">{{ info }}</div>
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'van-badge',

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
};
</script>
