// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND } from '../utils/constant';

// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('tag');

export default createComponent({
  props: {
    size: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean,
    type: {
      type: String,
      default: 'default',
    },
  },

  setup(props, { slots, emit }) {
    return function () {
      const { type, mark, plain, color, round, size } = props;

      const key = plain ? 'color' : 'backgroundColor';
      const style = { [key]: color };

      if (props.textColor) {
        style.color = props.textColor;
      }

      const classes = { mark, plain, round };
      if (size) {
        classes[size] = size;
      }

      const CloseIcon = props.closeable && (
        <Icon
          name="cross"
          class={bem('close')}
          onClick={(event) => {
            event.stopPropagation();
            emit('close');
          }}
        />
      );

      return (
        <transition name={props.closeable ? 'van-fade' : null}>
          <span
            key="content"
            style={style}
            class={[bem([classes, type]), { [BORDER_SURROUND]: plain }]}
          >
            {slots.default?.()}
            {CloseIcon}
          </span>
        </transition>
      );
    };
  },
});
