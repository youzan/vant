import { createNamespace } from '../../utils';

const [createComponent] = createNamespace('sku-row-prop-item');

export default createComponent({
  props: {
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedProp: Object,
    multiple: Boolean,
  },

  methods: {
    onSelect() {
      this.skuEventBus.$emit('sku:propSelect', {
        ...this.skuValue,
        skuKeyStr: this.skuKeyStr,
        multiple: this.multiple,
      });
    },
  },

  render() {
    const choosed = this.selectedProp && (this.selectedProp[this.skuKeyStr] || []).indexOf(this.skuValue.id) > -1;
    return (
      <span
        class={[
          'van-sku-row__item',
          {
            'van-sku-row__item--active': choosed,
          }
        ]}
        onClick={this.onSelect}
      >
        <span class="van-sku-row__item-name">{this.skuValue.name}</span>
      </span>
    );
  }
});
