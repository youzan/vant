import { use, isDef } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { FunctionalComponent } from '../utils/use/sfc';

const [sfc, bem] = use('info');

const Info: FunctionalComponent<InfoProps> = function (h, props, slots, ctx) {
  if (!isDef(props.info)) {
    return;
  }

  return (
    <div class={bem()} {...inherit(ctx, true)}>
      {props.info}
    </div>
  );
};

export type InfoProps = {
  info?: string | number;
};

Info.props = {
  info: [String, Number]
};

export default sfc<InfoProps>(Info);
