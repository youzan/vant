import { use, suffixPx } from '../utils';
import { inherit } from '../utils/functional';
import Info from '../info';
import Image from '../image';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type IconProps = {
  tag: keyof HTMLElementTagNameMap | string;
  name: string;
  size?: string | number;
  color?: string;
  info?: string | number;
  classPrefix: string;
};

export type IconEvents = {
  onClick?(event: Event): void;
};

const [sfc, bem] = use('icon');

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(
  h: CreateElement,
  props: IconProps,
  slots: DefaultSlots,
  ctx: RenderContext<IconProps>
) {
  const imageIcon = isImage(props.name);

  return (
    <props.tag
      class={[props.classPrefix, imageIcon ? '' : `${props.classPrefix}-${props.name}`]}
      style={{
        color: props.color,
        fontSize: suffixPx(props.size)
      }}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
      {imageIcon && <Image class={bem('image')} src={props.name} />}
      <Info info={props.info} />
    </props.tag>
  );
}

Icon.props = {
  name: String,
  size: [String, Number],
  color: String,
  info: [String, Number],
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};

export default sfc<IconProps, IconEvents>(Icon);
