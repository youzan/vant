// Utils
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
    function onTouchStart(event) {
      event.stopPropagation();
      emit('focus', event);
    }

    return () => {
      const { mask, value, length, gutter, focused, errorInfo } = props;
      const info = errorInfo || props.info;

      const Points = [];
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

      return (
        <div class={bem()}>
          <ul
            class={[bem('security'), { [BORDER_SURROUND]: !gutter }]}
            onTouchstart={onTouchStart}
          >
            {Points}
          </ul>
          {info && (
            <div class={bem(errorInfo ? 'error-info' : 'info')}>{info}</div>
          )}
        </div>
      );
    };
  },
});
