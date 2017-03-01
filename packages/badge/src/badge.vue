<template>
    <a class="zan-badge" :class="classNames" :href="url" @click="handleClick">
      <div class="zan-badge__active"></div>
      <div v-if="info" class="zan-badge__info">{{info}}</div>
      {{title}}
    </a>
</template>
<script>
export default {
  name: 'zan-badge',
  props: {
    mark: {
      type: [Number, String],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String
    },
    info: {
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$parent.computedActiveKey = this.mark;
    }
  },
  computed: {
    classNames() {
      return {
        'is-select': this.mark === this.$parent.computedActiveKey
      };
    }
  }
};
</script>