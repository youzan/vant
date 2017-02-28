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
    badgeKey: {
      type: [Number, String],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: String,
    value: String,
    info: String
  },
  data () {
    return {
      isSelected: false
    }
  },
  methods: {
    handleClick() {
      this.$parent.activeKey = this.badgeKey;
    }
  },
  computed: {
    classNames () {
      return {
        'is-select': this.badgeKey == this.$parent.activeKey ? true : false
      }
    }
  }
};
</script>