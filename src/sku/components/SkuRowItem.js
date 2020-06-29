import { bem } from './SkuRow';
import { createNamespace } from '../../utils';
import { isSkuChoosable } from '../utils/sku-helper';
import { ChildrenMixin } from '../../mixins/relation';

const [createComponent] = createNamespace('sku-row-item');

export default createComponent({
  mixins: [ChildrenMixin('vanSkuRows')],

  props: {
    lazyLoad: Boolean,
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object,
    largeImageMode: Boolean,
    skuList: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    imgUrl() {
      const url = this.skuValue.imgUrl || this.skuValue.img_url;
      return this.largeImageMode
        ? url ||
            'https://img.yzcdn.cn/upload_files/2020/06/24/FmKWDg0bN9rMcTp9ne8MXiQWGtLn.png'
        : url;
    },

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
      this.skuEventBus.$emit('sku:previewImage', this.imgUrl);
    },

    genImage(classPrefix) {
      const { imgUrl } = this;

      if (!imgUrl) {
        return;
      }

      if (this.largeImageMode && this.lazyLoad) {
        return <img class={`${classPrefix}-img`} src={imgUrl} vLazy={imgUrl} />;
      }

      return <img class={`${classPrefix}-img`} src={imgUrl} />;
    },
  },

  render() {
    const choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    const classPrefix = this.largeImageMode ? bem('picture-item') : bem('item');

    return (
      <span
        class={[
          classPrefix,
          choosed ? `${classPrefix}--active` : '',
          !this.choosable ? `${classPrefix}--disabled` : '',
        ]}
        onClick={this.onSelect}
      >
        {this.largeImageMode && (
          <img
            class={`${classPrefix}-img-icon`}
            src="https://img.yzcdn.cn/upload_files/2020/06/18/Fn6Qf0fGRFyuD8xh0Gi1w2ng59G1.png"
            onClick={this.onPreviewImg}
          />
        )}
        {this.genImage(classPrefix)}
        <div class={`${classPrefix}-name`}>
          <span class={this.largeImageMode ? 'van-multi-ellipsis--l2' : ''}>
            {this.skuValue.name}
          </span>
        </div>
      </span>
    );
  },
});
