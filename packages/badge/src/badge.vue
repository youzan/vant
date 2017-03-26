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
      type: String,
      default: 'javascript:;'
    },
    info: {
      type: String
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e, {
        mark: this.mark,
        title: this.title,
        url: this.url,
        info: this.info
      });
    }
  },
  computed: {
    classNames() {
      return {
        'is-select': this.mark === this.$parent.activeKey
      };
    }
  }
};
</script>
