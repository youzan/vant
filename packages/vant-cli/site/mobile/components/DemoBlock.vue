<template>
  <div class="van-doc-demo-block">
    <h2 v-if="title" class="van-doc-demo-block__title" :id="slugifyTitle">
      {{ title }}
    </h2>
    <div v-if="card" class="van-doc-demo-block__card">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',

  props: {
    card: Boolean,
    title: String,
  },

  data() {
    return {
      slugify: null,
    };
  },

  computed: {
    slugifyTitle() {
      return this.slugify ? this.slugify(this.title) : '';
    },
  },

  watch: {
    slugifyTitle(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          let hash = '';
          if (top) hash = top.location.hash.split('#').pop();
          else hash = location.hash.split('#').pop();
          const target = document.getElementById(newVal);
          if (target && newVal === hash) {
            target.scrollIntoView(true);
          }
        });
      }
    },
  },

  async mounted() {
    const { slugify } = await import('transliteration');
    this.slugify = slugify;
  },
};
</script>

<style lang="less">
.van-doc-demo-block {
  &__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: var(--van-doc-text-color-4);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }

  &__card {
    margin: 12px 12px 0;
    overflow: hidden;
    border-radius: 8px;
  }

  &__title + &__card {
    margin-top: 0;
  }

  &:first-of-type {
    .van-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
