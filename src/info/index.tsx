// Utils
import { createNamespace, isDef } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type InfoProps = {
  dot?: boolean;
  info?: string | number;
  badge?: string | number;
  badgemax?: number;
};

const [createComponent, bem] = createNamespace('info');
const isNumber = (i: any) => typeof i === 'number';
const maxContent = (max: number, info: number) => {
  if(info <= max) {
    return info;
  }
  return max + '+';
}
function Info(
  h: CreateElement,
  props: InfoProps,
  slots: DefaultSlots,
  ctx: RenderContext<InfoProps>
) {
  const { dot, info } = props;
  const showInfo = isDef(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return (
    <div class={bem({ dot })} {...inherit(ctx, true)}>
      {dot ? '' : ((isNumber(props.info) && props.badgemax) ? maxContent(props.badgemax, props.info as number) : props.info)}
    </div>
  );
}

Info.props = {
  dot: Boolean,
  info: [Number, String],
  badgemax: Number,
};

export default createComponent<InfoProps>(Info);
