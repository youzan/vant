<template>
  <ul :class="b({ simple: !isMultiMode })">
    <li
      v-text="prevText || $t('prev')"
      class="van-hairline"
      :class="[b('item', { disabled: value === 1 }), b('prev')]"
      @click="selectPage(value - 1)"
    />
    <li
      v-for="page in pages"
      v-text="page.text"
      class="van-hairline"
      :class="[b('item', { active: page.active }), b('page')]"
      @click="selectPage(page.number)"
    />
    <li
      v-if="!isMultiMode"
      :class="b('page-desc')"
    >
      <slot name="pageDesc">{{ pageDesc }}</slot>
    </li>
    <li
      v-text="nextText || $t('next')"
      class="van-hairline"
      :class="[b('item', { disabled: value === computedPageCount }), b('next')]"
      @click="selectPage(value + 1)"
    />
  </ul>
</template>

<script>
import create from '../utils/create';

function makePage(number, text, active) {
  return { number, text, active };
}

export default create({
  name: 'pagination',

  props: {
    value: Number,
    prevText: String,
    nextText: String,
    pageCount: Number,
    totalItems: Number,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    }
  },

  computed: {
    isMultiMode() {
      return this.mode === 'multi';
    },

    computedPageCount() {
      const count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },

    pageDesc() {
      return this.value + '/' + this.computedPageCount;
    },

    pages() {
      const pages = [];
      const pageCount = this.computedPageCount;

      if (!this.isMultiMode) {
        return pages;
      }

      // Default page limits
      let startPage = 1;
      let endPage = pageCount;
      const isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount;

      // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1;

        // Adjust if limit is exceeded
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      }

      // Add page number links
      for (let number = startPage; number <= endPage; number++) {
        const page = makePage(number, number, number === this.value);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          const previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          const nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },

  watch: {
    value: {
      handler(page) {
        this.selectPage(page || this.value);
      },
      immediate: true
    }
  },

  methods: {
    selectPage(page) {
      page = Math.max(1, page);
      page = Math.min(this.computedPageCount, page);
      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    }
  }
});
</script>
