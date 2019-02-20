import { use } from '../utils';
import { RED, WHITE } from '../utils/color';
import { emit, inherit } from '../utils/functional';
import { PopupMixin } from '../mixins/popup';
import Popup from '../popup';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';
import { PopupMixinProps } from '../mixins/popup/type';

export type NotifyProps = PopupMixinProps & {
  color: string;
  message: string | number;
  duration: number;
  className?: any;
  background: string;
};

const [sfc, bem] = use('notify');

function Notify(
  h: CreateElement,
  props: NotifyProps,
  slots: DefaultSlots,
  ctx: RenderContext<NotifyProps>
) {
  const style = {
    color: props.color,
    background: props.background
  };

  return (
    <Popup
      value={props.value}
      style={style}
      position="top"
      overlay={false}
      lockScroll={false}
      class={[bem(), props.className]}
      onInput={(value: boolean) => {
        emit(ctx, 'input', value);
      }}
      {...inherit(ctx)}
    >
      {props.message}
    </Popup>
  );
}

Notify.props = {
  ...PopupMixin.props,
  className: null as any,
  message: [String, Number],
  color: {
    type: String,
    default: WHITE
  },
  background: {
    type: String,
    default: RED
  },
  duration: {
    type: Number,
    default: 3000
  }
};

export default sfc<NotifyProps>(Notify);
