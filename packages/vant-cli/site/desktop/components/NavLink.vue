<template>
  <router-link
    v-if="item.path"
    :class="{ active }"
    :to="path"
    v-html="itemName"
  />
  <a v-else-if="item.link" :href="item.link" v-html="itemName" />
  <a v-else v-html="itemName" />
</template>

<script>
export default {
  name: 'van-doc-nav-link',

  props: {
    base: String,
    item: Object,
  },

  computed: {
    itemName() {
      const name = (this.item.title || this.item.name).split(' ');
      return `${name[0]} <span>${name.slice(1).join(' ')}</span>`;
    },

    path() {
      return `${this.base}${this.item.path}`;
    },

    active() {
      if (this.$route.path === this.path) {
        return true;
      }

      if (this.item.path === 'home') {
        return this.$route.path === this.base;
      }

      return false;
    },
  },

  watch: {
    active() {
      this.scrollIntoView();
    },
  },

  mounted() {
    this.scrollIntoView();
  },

  methods: {
    scrollIntoView() {
      if (this.active && this.$el && this.$el.scrollIntoViewIfNeeded) {
        this.$el.scrollIntoViewIfNeeded();
      }
    },
  },
};
</script>
