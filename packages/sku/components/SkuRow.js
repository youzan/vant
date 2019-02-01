import { use } from '../../utils';

const [sfc, bem] = use('sku-row');

export default sfc({
  props: {
    skuRow: Object
  },

  render(h) {
    return (
      <div class={bem()}>
        <div class={bem('title')}>{this.skuRow.k}：</div>
        {this.$slots.default}
      </div>
    );
  }
});
