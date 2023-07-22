import { defineComponent, type ExtractPropTypes } from 'vue';
import {
  addUnit,
  truthProp,
  numericProp,
  BORDER_LEFT,
  makeStringProp,
  BORDER_SURROUND,
  createNamespace,
  makeNumericProp,
} from '../utils';

const [name, bem] = createNamespace('password-input');

export const passwordInputProps = {
  info: String,
  mask: truthProp,
  value: makeStringProp(''),
  gutter: numericProp,
  length: makeNumericProp(6),
  focused: Boolean,
  errorInfo: String,
};

export type PasswordInputProps = ExtractPropTypes<typeof passwordInputProps>;

export default defineComponent({
  name,

  props: passwordInputProps,

  emits: ['focus'],

  setup(props, { emit }) {
    const onTouchStart = (event: TouchEvent) => {
      event.stopPropagation();
      emit('focus', event);
    };

    const renderPoints = () => {
      const Points: JSX.Element[] = [];
      const { mask, value, gutter, focused } = props;
      const length = +props.length;

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
          </li>,
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
            onTouchstartPassive={onTouchStart}
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
