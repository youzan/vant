import { use, isDef } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type InfoProps = {
  info?: string | number;
};

const [sfc, bem] = use('info');

function Info(
  h: CreateElement,
  props: InfoProps,
  slots: DefaultSlots,
  ctx: RenderContext<InfoProps>
) {
  if (!isDef(props.info)) {
    return;
  }

  return (
    <div class={bem()} {...inherit(ctx, true)}>
      {props.info}
    </div>
  );
}

Info.props = {
  info: [String, Number]
};

export default sfc<InfoProps>(Info);
