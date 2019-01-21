import { use } from '../utils';

const [sfc, bem] = use('cell-group');

export default sfc({
  props: {
    border: {
      type: Boolean,
      default: true
    }
  },

  render(h) {
    return (
      <div class={[bem(), { 'van-hairline--top-bottom': this.border }]}>
        {this.$slots.default}
      </div>
    );
  }
});
