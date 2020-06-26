// Utils
import { createNamespace } from '../../utils';
import { inherit } from '../../utils/functional';
import { BORDER_BOTTOM } from '../../utils/constant';

// Components
import Image from '../../image';

// Types
import Vue, { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../../utils/types';
import { SkuData, SkuGoodsData, SelectedSkuData } from '../../../types/sku';

export type SkuHeaderProps = {
  sku: SkuData;
  goods: SkuGoodsData;
  skuEventBus: Vue;
  selectedSku: SelectedSkuData;
  showHeaderImage: boolean;
};

export type SkuHeaderSlots = DefaultSlots & {
  'sku-header-image-extra'?: ScopedSlot;
};

const [createComponent, bem] = createNamespace('sku-header');

function getSkuImg(
  sku: SkuData,
  selectedSku: SelectedSkuData
): string | undefined {
  let img;

  sku.tree.some((item) => {
    const id = selectedSku[item.k_s];

    if (id && item.v) {
      const matchedSku =
        item.v.filter((skuValue) => skuValue.id === id)[0] || {};
      img = matchedSku.previewImgUrl || matchedSku.imgUrl || matchedSku.img_url;
      return img;
    }

    return false;
  });

  return img;
}

function SkuHeader(
  h: CreateElement,
  props: SkuHeaderProps,
  slots: SkuHeaderSlots,
  ctx: RenderContext<SkuHeaderProps>
) {
  const {
    sku,
    goods,
    skuEventBus,
    selectedSku,
    showHeaderImage = true,
  } = props;

  const imgUrl = getSkuImg(sku, selectedSku) || goods.picture;

  const previewImage = () => {
    skuEventBus.$emit('sku:previewImage', imgUrl);
  };

  return (
    <div class={[bem(), BORDER_BOTTOM]} {...inherit(ctx)}>
      {showHeaderImage && (
        <Image
          fit="cover"
          src={imgUrl}
          class={bem('img-wrap')}
          onClick={previewImage}
        >
          {slots['sku-header-image-extra']?.()}
        </Image>
      )}
      <div class={bem('goods-info')}>{slots.default?.()}</div>
    </div>
  );
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object,
  showHeaderImage: Boolean,
};

export default createComponent<SkuHeaderProps>(SkuHeader);
