import { use, isDef } from '../utils';

const [sfc, bem] = use('info');

function Info(h, props, slots, ctx) {
  return (
    isDef(props.info) && (
      <div class={bem()} {...ctx.data}>
        {props.info}
      </div>
    )
  );
}

Info.props = {
  info: [String, Number]
};

export default sfc(Info);
