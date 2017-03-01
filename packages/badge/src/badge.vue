<template>
    <a class="z-badge" :class="classNames" :href="url" @click="handleClick">
      <div class="z-badge__active"></div>
      <div v-if="info" class="z-badge__info">{{info}}</div>
      {{title}}
    </a>
</template>
<script>
export default {
  name: 'z-badge',
  props: {
    mark: {
      type: [Number, String],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: String,
    info: String
  },
  methods: {
    handleClick() {
      this.$parent.computedActiveKey = this.mark;
    }
  },
  computed: {
    classNames () {
      return {
        'is-select': this.mark == this.$parent.computedActiveKey ? true : false
      }
    }
  }
};
</script>