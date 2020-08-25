import { ref, watch, computed, nextTick } from 'vue';

// Utils
import { createNamespace, isDef } from '../utils';
import { raf, doubleRaf } from '../utils/dom/raf';

// Composition
import { useParent } from '../api/use-relation';
import { useLazyRender } from '../api/use-lazy-render';

// Components
import Cell from '../cell';
import { COLLAPSE_KEY } from '../collapse';
import { cellProps } from '../cell/shared';

const [createComponent, bem] = createNamespace('collapse-item');

export default createComponent({
  props: {
    ...cellProps,
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    const wrapper = ref(null);
    const content = ref(null);
    const { parent, index } = useParent(COLLAPSE_KEY, ref());

    const currentName = computed(() =>
      isDef(props.name) ? props.name : index.value
    );

    const expanded = computed(() => {
      if (parent) {
        return parent.isExpanded(currentName.value);
      }
      return null;
    });

    const show = ref(expanded.value);
    const shouldRender = useLazyRender(show);

    const onTransitionEnd = () => {
      if (!expanded.value) {
        show.value = false;
      } else {
        wrapper.value.style.height = '';
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
        if (!content.value || !wrapper.value) {
          return;
        }

        const { offsetHeight } = content.value;
        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`;
          wrapper.value.style.height = value ? 0 : contentHeight;

          // use double raf to ensure animation can start
          doubleRaf(() => {
            wrapper.value.style.height = value ? contentHeight : 0;
          });
        } else {
          onTransitionEnd();
        }
      });
    });

    const onClickTitle = () => {
      if (!props.disabled) {
        parent.toggle(currentName.value, !expanded.value);
      }
    };

    const renderTitle = () => {
      const { border, disabled } = props;

      return (
        <Cell
          v-slots={{
            icon: slots.icon,
            title: slots.title,
            default: slots.value,
            'right-icon': slots['right-icon'],
          }}
          role="button"
          class={bem('title', {
            disabled,
            expanded: expanded.value,
            borderless: !border,
          })}
          tabindex={disabled ? -1 : 0}
          aria-expanded={String(expanded.value)}
          onClick={onClickTitle}
          {...props}
        />
      );
    };

    const renderContent = () => {
      if (shouldRender.value) {
        return (
          <div
            ref={wrapper}
            vShow={show.value}
            class={bem('wrapper')}
            onTransitionend={onTransitionEnd}
          >
            <div ref={content} class={bem('content')}>
              {slots.default?.()}
            </div>
          </div>
        );
      }
    };

    return () => (
      <div class={[bem({ border: index.value && props.border })]}>
        {renderTitle()}
        {renderContent()}
      </div>
    );
  },
});
