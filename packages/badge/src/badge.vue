<template>
    <a class="z-badge" :class="{ 'is-select' : isSelected }" :href="url" @click="handleClick">
      <div class="z-badge__active"></div>
      <div v-if="info" class="z-badge__info">{{info}}</div>
      {{value}}
    </a>
</template>
<script>
export default {
  name: 'z-badge',
  props: {
    url: String,
    value: String,
    info: String,
    isSelected: Boolean
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>