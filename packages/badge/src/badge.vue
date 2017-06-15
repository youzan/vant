<template>
    <a
      class="van-badge"
      :class="{ 'van-badge--select': isSelect }"
      :href="url"
      @click="handleClick">
      <div class="van-badge__active"></div>
      <div v-if="info" class="van-badge__info">{{info}}</div>
      {{title}}
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
    handleClick(e) {
      this.$emit('click', e, {
        title: this.title,
        url: this.url,
        info: this.info
      });
    }
  }
};
</script>
