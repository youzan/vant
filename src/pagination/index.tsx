import { createNamespace } from '../utils';
import { BORDER } from '../utils/constant';
import { computed, watch } from 'vue';

const [createComponent, bem, t] = createNamespace('pagination');

type PageItem = {
  text: string | number;
  number: number;
  active?: boolean;
};

function makePage(
  number: number,
  text: string | number,
  active?: boolean
): PageItem {
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
    modelValue: {
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

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const count = computed(() => {
      const { pageCount, totalItems, itemsPerPage } = props;
      const count = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
      return Math.max(1, count);
    });

    const pages = computed(() => {
      const items: PageItem[] = [];
      const pageCount = count.value;
      const showPageSize = +props.showPageSize;
      const { modelValue, forceEllipses } = props;

      if (props.mode !== 'multi') {
        return items;
      }

      // Default page limits
      let startPage = 1;
      let endPage = pageCount;
      const isMaxSized = showPageSize < pageCount;

      // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(modelValue - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize - 1;

        // Adjust if limit is exceeded
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      }

      // Add page number links
      for (let number = startPage; number <= endPage; number++) {
        const page = makePage(number, number, number === modelValue);
        items.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && showPageSize > 0 && forceEllipses) {
        if (startPage > 1) {
          const prevPages = makePage(startPage - 1, '...');
          items.unshift(prevPages);
        }

        if (endPage < pageCount) {
          const nextPages = makePage(endPage + 1, '...');
          items.push(nextPages);
        }
      }

      return items;
    });

    const select = (page: number, emitChange?: boolean) => {
      page = Math.min(count.value, Math.max(1, page));

      if (props.modelValue !== page) {
        emit('update:modelValue', page);

        if (emitChange) {
          emit('change', page);
        }
      }
    };

    watch(
      () => props.modelValue,
      (value) => {
        select(value);
      },
      { immediate: true }
    );

    const renderDesc = () => {
      if (props.mode !== 'multi') {
        return (
          <li class={bem('page-desc')}>
            {slots.pageDesc
              ? slots.pageDesc()
              : `${props.modelValue}/${count.value}`}
          </li>
        );
      }
    };

    return () => {
      const value = props.modelValue;
      const simple = props.mode !== 'multi';

      const onSelect = (value: number) => () => {
        select(value, true);
      };

      return (
        <ul class={bem({ simple })}>
          <li
            class={[
              bem('item', { disabled: value === 1 }),
              bem('prev'),
              BORDER,
            ]}
            onClick={onSelect(value - 1)}
          >
            {slots['prev-text']
              ? slots['prev-text']()
              : props.prevText || t('prev')}
          </li>
          {pages.value.map((page) => (
            <li
              class={[
                bem('item', { active: page.active }),
                bem('page'),
                BORDER,
              ]}
              onClick={onSelect(page.number)}
            >
              {slots.page ? slots.page(page) : page.text}
            </li>
          ))}
          {renderDesc()}
          <li
            class={[
              bem('item', { disabled: value === count.value }),
              bem('next'),
              BORDER,
            ]}
            onClick={onSelect(value + 1)}
          >
            {slots['next-text']
              ? slots['next-text']()
              : props.nextText || t('next')}
          </li>
        </ul>
      );
    };
  },
});
