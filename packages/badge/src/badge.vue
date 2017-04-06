<template>
    <a class="zan-badge" :href="url" @click="handleClick" :class="{
      'zan-badge--select': isSelect
    }">
      <div class="zan-badge__active"></div>
      <div v-if="info" class="zan-badge__info">{{info}}</div>
      {{title}}
    </a>
</template>

<script>
export default {
  name: 'zan-badge',

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
