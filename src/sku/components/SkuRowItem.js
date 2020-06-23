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
    largePicturePreview: Boolean,
    lazyLoad: Boolean,
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
    onPreviewImg(event) {
      event.stopPropagation();
      this.skuEventBus.$emit(
        'sku:previewImage',
        this.skuValue.imgUrl || this.skuValue.img_url
      );
    },
  },

  render() {
    const choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    const imgUrl = this.skuValue.imgUrl || this.skuValue.img_url;
    const BEM_NAME = this.largePicturePreview
      ? 'van-sku-row__picture-item'
      : 'van-sku-row__item';

    return (
      <span
        class={[
          `${BEM_NAME}`,
          choosed ? `${BEM_NAME}--active` : '',
          !this.choosable ? `${BEM_NAME}--disabled` : '',
        ]}
        onClick={this.onSelect}
      >
        {this.largePicturePreview && (
          <img
            class={`${BEM_NAME}-img-icon`}
            src="https://img.yzcdn.cn/upload_files/2020/06/18/Fn6Qf0fGRFyuD8xh0Gi1w2ng59G1.png"
            onClick={this.onPreviewImg}
          />
        )}
        {imgUrl &&
          (this.largePicturePreview && this.lazyLoad ? (
            <img class={`${BEM_NAME}-img`} src={imgUrl} vLazy={imgUrl} />
          ) : (
            <img class={`${BEM_NAME}-img`} src={imgUrl} />
          ))}
        <span class={`${BEM_NAME}-name`}>{this.skuValue.name}</span>
      </span>
    );
  },
});
