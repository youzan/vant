import { createNamespace } from '../utils';
import VanEmptyCol from '../emptycol';

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
      default: 'simple',
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
  components: {
    VanEmptyCol,
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
      if (this.ifDesigner()) {
        return;
      }

      page = Math.min(this.count, Math.max(1, page));
      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    },
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
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
          class={[bem('item', { disabled: value === 1 }), bem('prev')]}
          onClick={onSelect(value - 1)}
          // vusion-slot-name="prev-text"
        >
          {this.slots('prev-text')}
          {/* {!this.slots('prev-text') && this.ifDesigner() ? (
            <van-empty-col></van-empty-col>
          ) : null} */}
        </li>
        {this.pages.map((page) => (
          <li
            class={[bem('item', { active: page.active }), bem('page')]}
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
          class={[bem('item', { disabled: value === this.count }), bem('next')]}
          onClick={onSelect(value + 1)}
          // vusion-slot-name="next-text"
        >
          {this.slots('next-text')}
          {/* {!this.slots('next-text') && this.ifDesigner() ? (
            <van-empty-col></van-empty-col>
          ) : null} */}
        </li>
      </ul>
    );
  },
});
