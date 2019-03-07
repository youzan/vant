import { use } from '../../utils';
import { isSkuChoosable } from '../utils/skuHelper';

const [sfc] = use('sku-row-item');

export default sfc({
  props: {
    skuList: Array,
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object
  },

  computed: {
    choosable() {
      return isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },

  methods: {
    onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', {
          ...this.skuValue,
          skuKeyStr: this.skuKeyStr
        });
      }
    }
  },

  render(h) {
    const choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];

    return (
      <span
        class={[
          'van-sku-row__item',
          {
            'van-sku-row__item--active': choosed,
            'van-sku-row__item--disabled': !this.choosable
          }
        ]}
        onClick={this.onSelect}
      >
        {this.skuValue.name}
      </span>
    );
  }
});
