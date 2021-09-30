import { ref, CSSProperties, defineComponent } from 'vue';

// Utils
import {
  truthProp,
  numericProp,
  BORDER_BOTTOM,
  getZIndexStyle,
  createNamespace,
} from '../utils';

// Composables
import { usePlaceholder } from '../composables/use-placeholder';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('nav-bar');

export default defineComponent({
  name,

  props: {
    title: String,
    fixed: Boolean,
    zIndex: numericProp,
    border: truthProp,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
  },

  emits: ['click-left', 'click-right'],

  setup(props, { emit, slots }) {
    const navBarRef = ref<HTMLElement>();
    const renderPlaceholder = usePlaceholder(navBarRef, bem);

    const onClickLeft = (event: MouseEvent) => emit('click-left', event);
    const onClickRight = (event: MouseEvent) => emit('click-right', event);

    const renderLeft = () => {
      if (slots.left) {
        return slots.left();
      }

      return [
        props.leftArrow && <Icon class={bem('arrow')} name="arrow-left" />,
        props.leftText && <span class={bem('text')}>{props.leftText}</span>,
      ];
    };

    const renderRight = () => {
      if (slots.right) {
        return slots.right();
      }

      return <span class={bem('text')}>{props.rightText}</span>;
    };

    const renderNavBar = () => {
      const { title, fixed, border, zIndex } = props;
      const style: CSSProperties = getZIndexStyle(zIndex);

      const hasLeft = props.leftArrow || props.leftText || slots.left;
      const hasRight = props.rightText || slots.right;

      return (
        <div
          ref={navBarRef}
          style={style}
          class={[
            bem({ fixed, 'safe-area-inset-top': props.safeAreaInsetTop }),
            { [BORDER_BOTTOM]: border },
          ]}
        >
          <div class={bem('content')}>
            {hasLeft && (
              <div class={bem('left')} onClick={onClickLeft}>
                {renderLeft()}
              </div>
            )}
            <div class={[bem('title'), 'van-ellipsis']}>
              {slots.title ? slots.title() : title}
            </div>
            {hasRight && (
              <div class={bem('right')} onClick={onClickRight}>
                {renderRight()}
              </div>
            )}
          </div>
        </div>
      );
    };

    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderNavBar);
      }
      return renderNavBar();
    };
  },
});
