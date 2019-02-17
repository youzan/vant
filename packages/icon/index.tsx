import { use } from '../utils';
import { inherit } from '../utils/functional';
import Info from '../info';
import isSrc from '../utils/validate/src';

// Types
import { FunctionalComponent } from '../utils/use/sfc';

const [sfc] = use('icon');

const Icon: FunctionalComponent<IconProps> = function(h, props, slots, ctx) {
  const urlIcon = isSrc(props.name);

  return (
    <i
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
    </i>
  );
};

export type IconProps = {
  name: string;
  size?: string;
  color?: string;
  info?: string | number;
  classPrefix?: string;
};

Icon.props = {
  name: String,
  size: String,
  color: String,
  info: [String, Number],
  classPrefix: {
    type: String,
    default: 'van-icon'
  }
};

export default sfc<IconProps>(Icon);
