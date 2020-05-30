import { createNamespace } from '../../utils';
import { isSkuChoosable } from '../utils/sku-helper';

const [createComponent] = createNamespace('sku-row-item');

export default createComponent({
  props: {
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object,
    skuList: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    choosable() {
      return isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id,
      });
    },
  },

  methods: {
    onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', {
          ...this.skuValue,
          skuKeyStr: this.skuKeyStr,
        });
      }
    },
  },

  render() {
    const choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    const imgUrl = this.skuValue.imgUrl || this.skuValue.img_url;

    return (
      <span
        class={[
          'van-sku-row__item',
          {
            'van-sku-row__item--active': choosed,
            'van-sku-row__item--disabled': !this.choosable,
          },
        ]}
        onClick={this.onSelect}
      >
        {imgUrl && <img class="van-sku-row__item-img" src={imgUrl} />}
        <span class="van-sku-row__item-name">{this.skuValue.name}</span>
      </span>
    );
  },
});
