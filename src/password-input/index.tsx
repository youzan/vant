import { createNamespace, addUnit } from '../utils';
import { BORDER_LEFT, BORDER_SURROUND } from '../utils/constant';

const [createComponent, bem] = createNamespace('password-input');

export default createComponent({
  props: {
    info: String,
    gutter: [Number, String],
    focused: Boolean,
    errorInfo: String,
    mask: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: '',
    },
    length: {
      type: [Number, String],
      default: 6,
    },
  },

  emits: ['focus'],

  setup(props, { emit }) {
    const onTouchStart = (event: TouchEvent) => {
      event.stopPropagation();
      emit('focus', event);
    };

    const renderPoints = () => {
      const Points: JSX.Element[] = [];
      const { mask, value, length, gutter, focused } = props;

      for (let i = 0; i < length; i++) {
        const char = value[i];
        const showBorder = i !== 0 && !gutter;
        const showCursor = focused && i === value.length;

        let style;
        if (i !== 0 && gutter) {
          style = { marginLeft: addUnit(gutter) };
        }

        Points.push(
          <li
            class={[
              { [BORDER_LEFT]: showBorder },
              bem('item', { focus: showCursor }),
            ]}
            style={style}
          >
            {mask ? (
              <i style={{ visibility: char ? 'visible' : 'hidden' }} />
            ) : (
              char
            )}
            {showCursor && <div class={bem('cursor')} />}
          </li>
        );
      }

      return Points;
    };

    return () => {
      const info = props.errorInfo || props.info;
      return (
        <div class={bem()}>
          <ul
            class={[bem('security'), { [BORDER_SURROUND]: !props.gutter }]}
            onTouchstart={onTouchStart}
          >
            {renderPoints()}
          </ul>
          {info && (
            <div class={bem(props.errorInfo ? 'error-info' : 'info')}>
              {info}
            </div>
          )}
        </div>
      );
    };
  },
});
