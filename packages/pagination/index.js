import { use } from '../utils';

const [sfc, bem, t] = use('pagination');

function makePage(number, text, active) {
  return { number, text, active };
}

export default sfc({
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
    count() {
      const count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },

    pages() {
      const pages = [];
      const pageCount = this.count;

      if (this.mode !== 'multi') {
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
        this.select(page || this.value);
      },
      immediate: true
    }
  },

  methods: {
    select(page) {
      page = Math.min(this.count, Math.max(1, page));
      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    }
  },

  render(h) {
    const { value } = this;
    const simple = this.mode !== 'multi';

    const onSelect = value => () => {
      this.select(value);
    };

    return (
      <ul class={bem({ simple })}>
        <li
          class={[bem('item', { disabled: value === 1 }), bem('prev'), 'van-hairline']}
          onClick={onSelect(value - 1)}
        >
          {this.prevText || t('prev')}
        </li>
        {this.pages.map(page => (
          <li
            class={[bem('item', { active: page.active }), bem('page'), 'van-hairline']}
            onClick={onSelect(page.number)}
          >
            {page.text}
          </li>
        ))}
        {simple && (
          <li class={bem('page-desc')}>{this.slots('pageDesc') || `${value}/${this.count}`}</li>
        )}
        <li
          class={[bem('item', { disabled: value === this.count }), bem('next'), 'van-hairline']}
          onClick={onSelect(value + 1)}
        >
          {this.nextText || t('next')}
        </li>
      </ul>
    );
  }
});
