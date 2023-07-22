import {
  computed,
  watchEffect,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';
import {
  clamp,
  truthProp,
  makeStringProp,
  makeNumberProp,
  makeNumericProp,
  createNamespace,
  BORDER_SURROUND,
  type Numeric,
} from '../utils';

const [name, bem, t] = createNamespace('pagination');

type PageItem = {
  text: Numeric;
  number: number;
  active?: boolean;
};

const makePage = (
  number: number,
  text: Numeric,
  active?: boolean,
): PageItem => ({ number, text, active });

export type PaginationMode = 'simple' | 'multi';

export const paginationProps = {
  mode: makeStringProp<PaginationMode>('multi'),
  prevText: String,
  nextText: String,
  pageCount: makeNumericProp(0),
  modelValue: makeNumberProp(0),
  totalItems: makeNumericProp(0),
  showPageSize: makeNumericProp(5),
  itemsPerPage: makeNumericProp(10),
  forceEllipses: Boolean,
  showPrevButton: truthProp,
  showNextButton: truthProp,
};

export type PaginationProps = ExtractPropTypes<typeof paginationProps>;

export default defineComponent({
  name,

  props: paginationProps,

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

    const updateModelValue = (value: number, emitChange?: boolean) => {
      value = clamp(value, 1, count.value);

      if (props.modelValue !== value) {
        emit('update:modelValue', value);

        if (emitChange) {
          emit('change', value);
        }
      }
    };

    // format modelValue
    watchEffect(() => updateModelValue(props.modelValue));

    const renderDesc = () => (
      <li class={bem('page-desc')}>
        {slots.pageDesc
          ? slots.pageDesc()
          : `${props.modelValue}/${count.value}`}
      </li>
    );

    const renderPrevButton = () => {
      const { mode, modelValue, showPrevButton } = props;

      if (!showPrevButton) {
        return;
      }

      const slot = slots['prev-text'];
      const disabled = modelValue === 1;
      return (
        <li
          class={[
            bem('item', { disabled, border: mode === 'simple', prev: true }),
            BORDER_SURROUND,
          ]}
        >
          <button
            type="button"
            disabled={disabled}
            onClick={() => updateModelValue(modelValue - 1, true)}
          >
            {slot ? slot() : props.prevText || t('prev')}
          </button>
        </li>
      );
    };

    const renderNextButton = () => {
      const { mode, modelValue, showNextButton } = props;

      if (!showNextButton) {
        return;
      }

      const slot = slots['next-text'];
      const disabled = modelValue === count.value;
      return (
        <li
          class={[
            bem('item', { disabled, border: mode === 'simple', next: true }),
            BORDER_SURROUND,
          ]}
        >
          <button
            type="button"
            disabled={disabled}
            onClick={() => updateModelValue(modelValue + 1, true)}
          >
            {slot ? slot() : props.nextText || t('next')}
          </button>
        </li>
      );
    };

    const renderPages = () =>
      pages.value.map((page) => (
        <li
          class={[
            bem('item', { active: page.active, page: true }),
            BORDER_SURROUND,
          ]}
        >
          <button
            type="button"
            aria-current={page.active || undefined}
            onClick={() => updateModelValue(page.number, true)}
          >
            {slots.page ? slots.page(page) : page.text}
          </button>
        </li>
      ));

    return () => (
      <nav role="navigation" class={bem()}>
        <ul class={bem('items')}>
          {renderPrevButton()}
          {props.mode === 'simple' ? renderDesc() : renderPages()}
          {renderNextButton()}
        </ul>
      </nav>
    );
  },
});
