import {
  ref,
  computed,
  defineComponent,
  type InjectionKey,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  isDef,
  truthProp,
  numericProp,
  windowHeight,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  HAPTICS_FEEDBACK,
  type ComponentInstance,
} from '../utils';

// Composables
import { useId } from '../composables/use-id';
import { useExpose } from '../composables/use-expose';
import {
  useRect,
  useChildren,
  useClickAway,
  useScrollParent,
  useEventListener,
} from '@vant/use';

// Types
import type { DropdownMenuProvide, DropdownMenuDirection } from './types';

const [name, bem] = createNamespace('dropdown-menu');

export const dropdownMenuProps = {
  overlay: truthProp,
  zIndex: numericProp,
  duration: makeNumericProp(0.2),
  direction: makeStringProp<DropdownMenuDirection>('down'),
  activeColor: String,
  autoLocate: Boolean,
  closeOnClickOutside: truthProp,
  closeOnClickOverlay: truthProp,
  swipeThreshold: numericProp,
};

export type DropdownMenuProps = ExtractPropTypes<typeof dropdownMenuProps>;

export const DROPDOWN_KEY: InjectionKey<DropdownMenuProvide> = Symbol(name);

export default defineComponent({
  name,

  props: dropdownMenuProps,

  setup(props, { slots }) {
    const id = useId();
    const root = ref<HTMLElement>();
    const barRef = ref<HTMLElement>();
    const offset = ref(0);

    const { children, linkChildren } = useChildren(DROPDOWN_KEY);
    const scrollParent = useScrollParent(root);

    const opened = computed(() =>
      children.some((item) => item.state.showWrapper),
    );

    const scrollable = computed(
      () => props.swipeThreshold && children.length > +props.swipeThreshold,
    );

    const barStyle = computed<CSSProperties | undefined>(() => {
      if (opened.value && isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1,
        };
      }
    });

    const close = () => {
      children.forEach((item) => {
        item.toggle(false);
      });
    };

    const onClickAway = () => {
      if (props.closeOnClickOutside) {
        close();
      }
    };

    const updateOffset = () => {
      if (barRef.value) {
        const rect = useRect(barRef);
        if (props.direction === 'down') {
          offset.value = rect.bottom;
        } else {
          offset.value = windowHeight.value - rect.top;
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
          id={`${id}-${index}`}
          role="button"
          tabindex={disabled ? undefined : 0}
          class={[
            bem('item', { disabled, grow: scrollable.value }),
            { [HAPTICS_FEEDBACK]: !disabled },
          ]}
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

    useExpose({ close });
    linkChildren({ id, props, offset, updateOffset });
    useClickAway(root, onClickAway);
    useEventListener('scroll', onScroll, {
      target: scrollParent,
      passive: true,
    });

    return () => (
      <div ref={root} class={bem()}>
        <div
          ref={barRef}
          style={barStyle.value}
          class={bem('bar', {
            opened: opened.value,
            scrollable: scrollable.value,
          })}
        >
          {children.map(renderTitle)}
        </div>
        {slots.default?.()}
      </div>
    );
  },
});
