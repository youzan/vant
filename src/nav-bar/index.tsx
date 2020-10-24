import { ref, CSSProperties } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';

// Composition
import { usePlaceholder } from '../composition/use-placeholder';

// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('nav-bar');

export default createComponent({
  props: {
    title: String,
    fixed: Boolean,
    zIndex: [Number, String],
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    placeholder: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['click-left', 'click-right'],

  setup(props, { emit, slots }) {
    const navBarRef = ref();
    const renderPlaceholder = usePlaceholder(navBarRef, bem);

    const onClickLeft = (event: MouseEvent) => {
      emit('click-left', event);
    };

    const onClickRight = (event: MouseEvent) => {
      emit('click-right', event);
    };

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

      if (props.rightText) {
        return <span class={bem('text')}>{props.rightText}</span>;
      }
    };

    const renderNavBar = () => {
      const { title, fixed, border, zIndex } = props;
      const style: CSSProperties = {
        zIndex: zIndex !== undefined ? +zIndex : undefined,
      };

      const hasLeft = props.leftArrow || props.leftText || slots.left;
      const hasRight = props.rightText || slots.right;

      return (
        <div
          ref={navBarRef}
          style={style}
          class={[bem({ fixed }), { [BORDER_BOTTOM]: border }]}
        >
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
