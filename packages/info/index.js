import { use, isDef } from '../utils';

const [sfc, bem] = use('info');

export default sfc({
  props: {
    info: [String, Number]
  },

  render(h) {
    return isDef(this.info) && <div class={bem()}>{this.info}</div>;
  }
});
