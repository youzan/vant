import { use } from '../utils';
import { inherit } from '../utils/functional';
import Info from '../info';
import { isSrc } from '../utils/validate/src';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type IconProps = {
  tag: keyof HTMLElementTagNameMap | string;
  name: string;
  size?: string;
  color?: string;
  info?: string | number;
  classPrefix: string;
};

export type IconEvents = {
  onClick?(event: Event): void;
};

const [sfc] = use('icon');

function Icon(
  h: CreateElement,
  props: IconProps,
  slots: DefaultSlots,
  ctx: RenderContext<IconProps>
) {
  const urlIcon = isSrc(props.name);

  return (
    <props.tag
      class={[
        props.classPrefix,
        urlIcon ? 'van-icon--image' : `${props.classPrefix}-${props.name}`
      ]}
      style={{
        color: props.color,
        fontSize: props.size
      }}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
      {urlIcon && <img src={props.name} />}
      <Info info={props.info} />
    </props.tag>
  );
}

Icon.props = {
  name: String,
  size: String,
  color: String,
  info: [String, Number],
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: 'van-icon'
  }
};

export default sfc<IconProps, IconEvents>(Icon);
