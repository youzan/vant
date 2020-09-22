import { createNamespace } from '../utils';
import { BORDER } from '../utils/constant';

const [createComponent, bem, t] = createNamespace('pagination');

function makePage(number, text, active) {
  return { number, text, active };
}

export default createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi',
    },
    value: {
      type: Number,
      default: 0,
    },
    pageCount: {
      type: [Number, String],
      default: 0,
    },
    totalItems: {
      type: [Number, String],
      default: 0,
    },
    itemsPerPage: {
      type: [Number, String],
      default: 10,
    },
    showPageSize: {
      type: [Number, String],
      default: 5,
    },
  },

  computed: {
    count() {
      const count =
        this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },

    pages() {
      const pages = [];
      const pageCount = this.count;
      const showPageSize = +this.showPageSize;

      if (this.mode !== 'multi') {
        return pages;
      }

      // Default page limits
      let startPage = 1;
      let endPage = pageCount;
      const isMaxSized = showPageSize < pageCount;

      // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize - 1;

        // Adjust if limit is exceeded
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      }

      // Add page number links
      for (let number = startPage; number <= endPage; number++) {
        const page = makePage(number, number, number === this.value);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && showPageSize > 0 && this.forceEllipses) {
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
    },
  },

  watch: {
    value: {
      handler(page) {
        this.select(page || this.value);
      },
      immediate: true,
    },
  },

  methods: {
    select(page, emitChange) {
      page = Math.min(this.count, Math.max(1, page));
      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    },
  },

  render() {
    const { value } = this;
    const simple = this.mode !== 'multi';

    const onSelect = (value) => () => {
      this.select(value, true);
    };

    return (
      <ul class={bem({ simple })}>
        <li
          class={[bem('item', { disabled: value === 1 }), bem('prev'), BORDER]}
          onClick={onSelect(value - 1)}
        >
          {(this.slots('prev-text') ?? this.prevText) || t('prev')}
        </li>
        {this.pages.map((page) => (
          <li
            class={[bem('item', { active: page.active }), bem('page'), BORDER]}
            onClick={onSelect(page.number)}
          >
            {this.slots('page', page) ?? page.text}
          </li>
        ))}
        {simple && (
          <li class={bem('page-desc')}>
            {this.slots('pageDesc') || `${value}/${this.count}`}
          </li>
        )}
        <li
          class={[
            bem('item', { disabled: value === this.count }),
            bem('next'),
            BORDER,
          ]}
          onClick={onSelect(value + 1)}
        >
          {(this.slots('next-text') ?? this.nextText) || t('next')}
        </li>
      </ul>
    );
  },
});
