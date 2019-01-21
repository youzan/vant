import { use } from '../utils';

const [sfc, bem] = use('goods-action');

export default sfc({
  render(h) {
    return <div class={bem()}>{this.$slots.default}</div>;
  }
});
