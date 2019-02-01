import { use } from '../../utils';
import Icon from '../../icon';

const [sfc, bem] = use('sku-header');

export default sfc({
  props: {
    sku: Object,
    goods: Object,
    skuEventBus: Object,
    selectedSku: Object
  },

  computed: {
    goodsImg() {
      const s1Id = this.selectedSku.s1;
      const skuImg = this.getSkuImg(s1Id);
      // 优先使用选中 sku 的图片
      return skuImg || this.goods.picture;
    }
  },

  methods: {
    getSkuImg(id) {
      if (!id) return;

      // skuImg 挂载在 skuTree 中 s1 上
      const treeItem = this.sku.tree.filter(item => item.k_s === 's1')[0] || {};

      if (!treeItem.v) return;

      const matchedSku = treeItem.v.filter(skuValue => skuValue.id === id)[0];
      if (matchedSku) return matchedSku.imgUrl || matchedSku.img_url;
    },

    previewImage() {
      this.skuEventBus.$emit('sku:previewImage', this.goodsImg);
    }
  },

  render(h) {
    return (
      <div class={[bem(), 'van-hairline--bottom']}>
        <div class={bem('img-wrap')} onClick={this.previewImage}>
          <img src={this.goodsImg} />
        </div>
        <div class={bem('goods-info')}>
          <div class="van-sku__goods-name van-ellipsis">{this.goods.title}</div>
          {this.$slots.default}
          <Icon
            name="close"
            class="van-sku__close-icon"
            onClick={() => {
              this.skuEventBus.$emit('sku:close');
            }}
          />
        </div>
      </div>
    );
  }
});
