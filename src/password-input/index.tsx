import { createNamespace, addUnit } from '../utils';
import { emit, inherit } from '../utils/functional';
import { BORDER_LEFT, BORDER_SURROUND } from '../utils/constant';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type PasswordInputProps = {
  mask: boolean;
  info?: string;
  value: string;
  length: number;
  gutter: number;
  focused?: boolean;
  errorInfo?: string;
};

const [createComponent, bem] = createNamespace('password-input');

function PasswordInput(
  h: CreateElement,
  props: PasswordInputProps,
  slots: DefaultSlots,
  ctx: RenderContext<PasswordInputProps>
) {
  const info = props.errorInfo || props.info;

  const Points = [];
  for (let i = 0; i < props.length; i++) {
    const char = props.value[i];
    const showBorder = i !== 0 && !props.gutter;
    const showCursor = props.focused && i === props.value.length;

    let style;
    if (i !== 0 && props.gutter) {
      style = { marginLeft: addUnit(props.gutter) };
    }

    Points.push(
      <li class={{ [BORDER_LEFT]: showBorder }} style={style}>
        {props.mask ? <i style={{ visibility: char ? 'visible' : 'hidden' }} /> : char}
        {showCursor && <div class={bem('cursor')} />}
      </li>
    );
  }

  return (
    <div class={bem()}>
      <ul
        class={[bem('security'), { [BORDER_SURROUND]: !props.gutter }]}
        onTouchstart={(event: TouchEvent) => {
          event.stopPropagation();
          emit(ctx, 'focus', event);
        }}
        {...inherit(ctx, true)}
      >
        {Points}
      </ul>
      {info && <div class={bem(props.errorInfo ? 'error-info' : 'info')}>{info}</div>}
    </div>
  );
}

PasswordInput.props = {
  info: String,
  gutter: [Number, String],
  focused: Boolean,
  errorInfo: String,
  mask: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
};

export default createComponent<PasswordInputProps>(PasswordInput);
