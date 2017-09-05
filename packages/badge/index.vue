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
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: 'javascript:;'
    },
    info: {
      type: String
    }
  },

  beforeCreate() {
    this.$parent.badges.push(this);
  },

  computed: {
    isSelect() {
      const parent = this.$parent;
      return parent.badges.indexOf(this) === parent.activeKey;
    }
  },

  methods: {
    onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
};
</script>
