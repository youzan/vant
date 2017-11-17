<template>
  <ul :class="['van-pagination', { 'van-pagination-simple': !isMultiMode }]">
    <li
      :class="[{ 'van-pagination--disabled': isNoPrevious } , 'van-pagination__item', 'van-pagination__prev', 'van-hairline']"
      @click="selectPage(currentPage - 1, $event)"
    >
      {{ previousText }}
    </li>
    <li 
      v-if="isMultiMode" 
      v-for="(page, index) in pages" 
      :key="index" 
      :class="[{ 'van-pagination--active': page.active }, 'van-pagination__item', 'van-pagination__page', 'van-hairline']"
      @click="selectPage(page.number, $event)"
    >
      {{ page.text }}
    </li>
    <li v-if="!isMultiMode" class="van-pagination__page-desc">
      <slot name="pageDesc">{{ pageDesc }}</slot>
    </li>
    <li 
      :class="[{ 'van-pagination--disabled': isNoNext }, 'van-pagination__item', 'van-pagination__next', 'van-hairline']" 
       @click="selectPage(currentPage + 1, $event)"
    >
      {{ nextText }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'van-pagination',

  props: {
    mode: {
      type: String,
      default: 'multi'
    },

    forceEllipses: Boolean,

    itemsPerPage: {
      type: Number,
      default: 10
    },

    showPageSize: {
      type: Number,
      default: 5,
      validator: value => typeof value === 'number' && value >= 1
    },

    /* vModel { currentPage: 1, numPages: 10 } */
    value: {
      type: Object,
      required: true,
      validator: function(value) {
        return (
          value &&
          value.currentPage != undefined &&
          typeof value.currentPage === 'number'
        );
      }
    },

    previousText: {
      type: String,
      default: 'Previous'
    },

    nextText: {
      type: String,
      default: 'Next'
    },

    totalItems: {
      type: Number,
      default: 0
    }
  },

  data() {
    let currentPage = this.value.currentPage !== undefined ? this.value.currentPage : 1;
    let totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
    totalPages = Math.max(totalPages, 1);

    return { currentPage, totalPages };
  },

  computed: {
    isMultiMode() {
      return this.mode === 'multi';
    },

    isNoPrevious() {
      return this.value.currentPage === 1;
    },

    isNoNext() {
      return this.value.currentPage === this.totalPages;
    },

    pages() {
      let pages = [];

      if (this.currentPage <= 0 || this.currentPage > this.totalPages) {
        return pages;
      }

      // Default page limits
      let startPage = 1,
        endPage = this.totalPages;
      let isMaxSized = this.showPageSize !== undefined && this.showPageSize < this.totalPages;

      // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(
          this.currentPage - Math.floor(this.showPageSize / 2),
          1
        );
        endPage = startPage + this.showPageSize - 1;

        // Adjust if limit is exceeded
        if (endPage > this.totalPages) {
          endPage = this.totalPages;
          startPage = endPage - this.showPageSize + 1;
        }
      }

      // Add page number links
      for (let number = startPage; number <= endPage; number++) {
        let page = this.makePage(number, number, number === this.currentPage);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          //need ellipsis for all options unless range is too close to beginning
          let previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < this.totalPages) {
          //need ellipsis for all options unless range is too close to end
          let nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    },
    pageDesc() {
      return this.currentPage + '/' + this.totalPages;
    }
  },

  created() {
    // 初始value值
    this.triggerInput();
  },

  watch: {
    'value.currentPage'(value, oldValue) {
      this.currentPage = value;

      this.$emit('change');
    }
  },

  methods: {
    selectPage(page, evt) {
      if (this.currentPage !== page && page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }

      this.triggerInput();
    },

    triggerInput() {
      //  Emit the new data to the parent.
      this.$emit(
        'input',
        this.createDataForModel(this.currentPage, this.totalPages)
      );
    },

    makePage(number, text, active) {
      return { number, text, active };
    },

    createDataForModel(currentPage, numPages) {
      let data = { currentPage, numPages };
      return data;
    }
  }
};
</script>