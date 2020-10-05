import { ref, computed } from 'vue';

// Utils
import { createNamespace, isDef } from '../utils';

// Composition
import {
  useRect,
  useChildren,
  useClickAway,
  useScrollParent,
  useEventListener,
} from '@vant/use';

const [createComponent, bem] = createNamespace('dropdown-menu');

export const DROPDOWN_KEY = 'vanDropdownMenu';

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
      type: String,
      default: 'down',
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    const root = ref();
    const offset = ref(0);
    const barRef = ref();

    const { children, linkChildren } = useChildren(DROPDOWN_KEY);
    const scrollParent = useScrollParent(root);

    const opened = computed(() =>
      children.some((item) => item.state.showWrapper)
    );

    const barStyle = computed(() => {
      if (opened.value && isDef(props.zIndex)) {
        return {
          zIndex: 1 + props.zIndex,
        };
      }
    });

    const onClickAway = () => {
      children.forEach((item) => {
        item.toggle(false);
      });
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

    const toggleItem = (active) => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    };

    const renderTitle = (item, index) => {
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
