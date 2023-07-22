import {
  ref,
  watch,
  computed,
  nextTick,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';

// Utils
import { cellSharedProps } from '../cell/Cell';
import {
  pick,
  extend,
  truthProp,
  numericProp,
  createNamespace,
} from '../utils';
import { COLLAPSE_KEY } from '../collapse/Collapse';

// Composables
import { raf, doubleRaf, useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLazyRender } from '../composables/use-lazy-render';

// Components
import { Cell } from '../cell';

const [name, bem] = createNamespace('collapse-item');

const CELL_SLOTS = ['icon', 'title', 'value', 'label', 'right-icon'] as const;

export const collapseItemProps = extend({}, cellSharedProps, {
  name: numericProp,
  isLink: truthProp,
  disabled: Boolean,
  readonly: Boolean,
  lazyRender: truthProp,
});

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;

export default defineComponent({
  name,

  props: collapseItemProps,

  setup(props, { slots }) {
    const wrapperRef = ref<HTMLElement>();
    const contentRef = ref<HTMLElement>();
    const { parent, index } = useParent(COLLAPSE_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[Vant] <CollapseItem> must be a child component of <Collapse>.',
        );
      }
      return;
    }

    const name = computed(() => props.name ?? index.value);
    const expanded = computed(() => parent.isExpanded(name.value));

    const show = ref(expanded.value);
    const lazyRender = useLazyRender(() => show.value || !props.lazyRender);

    const onTransitionEnd = () => {
      if (!expanded.value) {
        show.value = false;
      } else if (wrapperRef.value) {
        wrapperRef.value.style.height = '';
      }
    };

    watch(expanded, (value, oldValue) => {
      if (oldValue === null) {
        return;
      }

      if (value) {
        show.value = true;
      }

      // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`
      const tick = value ? nextTick : raf;

      tick(() => {
        if (!contentRef.value || !wrapperRef.value) {
          return;
        }

        const { offsetHeight } = contentRef.value;
        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`;
          wrapperRef.value.style.height = value ? '0' : contentHeight;

          // use double raf to ensure animation can start
          doubleRaf(() => {
            if (wrapperRef.value) {
              wrapperRef.value.style.height = value ? contentHeight : '0';
            }
          });
        } else {
          onTransitionEnd();
        }
      });
    });

    const toggle = (newValue = !expanded.value) => {
      parent.toggle(name.value, newValue);
    };

    const onClickTitle = () => {
      if (!props.disabled && !props.readonly) {
        toggle();
      }
    };

    const renderTitle = () => {
      const { border, disabled, readonly } = props;
      const attrs = pick(
        props,
        Object.keys(cellSharedProps) as Array<keyof typeof cellSharedProps>,
      );

      if (readonly) {
        attrs.isLink = false;
      }
      if (disabled || readonly) {
        attrs.clickable = false;
      }

      return (
        <Cell
          v-slots={pick(slots, CELL_SLOTS)}
          role="button"
          class={bem('title', {
            disabled,
            expanded: expanded.value,
            borderless: !border,
          })}
          aria-expanded={String(expanded.value)}
          onClick={onClickTitle}
          {...attrs}
        />
      );
    };

    const renderContent = lazyRender(() => (
      <div
        v-show={show.value}
        ref={wrapperRef}
        class={bem('wrapper')}
        onTransitionend={onTransitionEnd}
      >
        <div ref={contentRef} class={bem('content')}>
          {slots.default?.()}
        </div>
      </div>
    ));

    useExpose({ toggle, expanded, itemName: name });

    return () => (
      <div class={[bem({ border: index.value && props.border })]}>
        {renderTitle()}
        {renderContent()}
      </div>
    );
  },
});
