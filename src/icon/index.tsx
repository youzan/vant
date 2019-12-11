import { createNamespace, addUnit } from '../utils';
import { inherit } from '../utils/functional';
import Info from '../info';
import Image from '../image';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type IconProps = {
  dot?: boolean;
  tag: keyof HTMLElementTagNameMap | string;
  name?: string;
  size?: string | number;
  color?: string;
  info?: string | number;
  classPrefix: string;
};

export type IconEvents = {
  onClick?(event: Event): void;
};

const [createComponent, bem] = createNamespace('icon');

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

// compatible with legacy usage, should be removed in next major version
function correctName(name?: string) {
  return name === 'medel' ? 'medal' : name;
}

function Icon(
  h: CreateElement,
  props: IconProps,
  slots: DefaultSlots,
  ctx: RenderContext<IconProps>
) {
  const name = correctName(props.name);
  const imageIcon = isImage(name);

  return (
    <props.tag
      class={[props.classPrefix, imageIcon ? '' : `${props.classPrefix}-${name}`]}
      style={{
        color: props.color,
        fontSize: addUnit(props.size)
      }}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
      {imageIcon && (
        <Image class={bem('image')} fit="contain" src={name} showLoading={false} />
      )}
      <Info dot={props.dot} info={props.info} />
    </props.tag>
  );
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};

export default createComponent<IconProps, IconEvents>(Icon);
