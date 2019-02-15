import { use, isDef } from '../utils';
import { inherit } from '../utils/functional';

const [sfc, bem] = use('info');

function Info(h, props, slots, ctx) {
  return (
    isDef(props.info) && (
      <div class={bem()} {...inherit(ctx, true)}>
        {props.info}
      </div>
    )
  );
}

Info.props = {
  info: [String, Number]
};

export default sfc(Info);
