import { ref, computed, PropType, CSSProperties, Ref } from 'vue';

// Utils
import { isDef, ComponentInstance, createNamespace } from '../utils';

// Composables
import {
  useRect,
  useChildren,
  useClickAway,
  useScrollParent,
  useEventListener,
} from '@vant/use';

const [createComponent, bem] = createNamespace('dropdown-menu');

export const DROPDOWN_KEY = 'vanDropdownMenu';

export type DropdownMenuDirection = 'up' | 'down';

export type DropdownMenuProvide = {
  props: {
    zIndex?: number | string;
    overlay: boolean;
    duration: number | string;
    direction: DropdownMenuDirection;
    activeColor?: string;
    closeOnClickOverlay: boolean;
  };
  offset: Ref<number>;
};

export default createComponent({
  props: {
    zIndex: [Number, String],
    activeColor: String,
    overlay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: [Number, String],
      default: 0.2,
    },
    direction: {
      type: String as PropType<DropdownMenuDirection>,
      default: 'down',
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    const root = ref<HTMLElement>();
    const barRef = ref<HTMLElement>();
    const offset = ref(0);

    const { children, linkChildren } = useChildren<ComponentInstance>(
      DROPDOWN_KEY
    );
    const scrollParent = useScrollParent(root);

    const opened = computed(() =>
      children.some((item) => item.state.showWrapper)
    );

    const barStyle = computed<CSSProperties | undefined>(() => {
      if (opened.value && isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1,
        };
      }
    });

    const onClickAway = () => {
      if (props.closeOnClickOutside) {
        children.forEach((item) => {
          item.toggle(false);
        });
      }
    };

    const updateOffset = () => {
      if (barRef.value) {
        const rect = useRect(barRef);
        if (props.direction === 'down') {
          offset.value = rect.bottom;
        } else {
          offset.value = window.innerHeight - rect.top;
        }
      }
    };

    const onScroll = () => {
      if (opened.value) {
        updateOffset();
      }
    };

    const toggleItem = (active: number) => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    };

    const renderTitle = (item: ComponentInstance, index: number) => {
      const { showPopup } = item.state;
      const { disabled, titleClass } = item;

      return (
        <div
          role="button"
          tabindex={disabled ? -1 : 0}
          class={bem('item', { disabled })}
          onClick={() => {
            if (!disabled) {
              toggleItem(index);
            }
          }}
        >
          <span
            class={[
              bem('title', {
                down: showPopup === (props.direction === 'down'),
                active: showPopup,
              }),
              titleClass,
            ]}
            style={{ color: showPopup ? props.activeColor : '' }}
          >
            <div class="van-ellipsis">{item.renderTitle()}</div>
          </span>
        </div>
      );
    };

    linkChildren({ props, offset });
    useClickAway(root, onClickAway);
    useEventListener('scroll', onScroll, { target: scrollParent });

    return () => (
      <div ref={root} class={bem()}>
        <div
          ref={barRef}
          style={barStyle.value}
          class={bem('bar', { opened: opened.value })}
        >
          {children.map(renderTitle)}
        </div>
        {slots.default?.()}
      </div>
    );
  },
});
