/* eslint-disable camelcase */
import Vue from 'vue';
import Popup from '../popup';
import Toast from '../toast';
import ImagePreview from '../image-preview';
import SkuHeader from './components/SkuHeader';
import SkuRow from './components/SkuRow';
import SkuRowItem from './components/SkuRowItem';
import SkuStepper from './components/SkuStepper';
import SkuMessages from './components/SkuMessages';
import SkuActions from './components/SkuActions';
import { use, isDef } from '../utils';
import { isAllSelected, isSkuChoosable, getSkuComb, getSelectedSkuValues } from './utils/skuHelper';
import { LIMIT_TYPE, UNSELECTED_SKU_VALUE_ID } from './constants';

const [sfc] = use('sku');
const { QUOTA_LIMIT } = LIMIT_TYPE;

export default sfc({
  props: {
    sku: Object,
    goods: Object,
    quota: Number,
    value: Boolean,
    buyText: String,
    quotaUsed: Number,
    goodsId: [Number, String],
    hideStock: Boolean,
    hideQuotaText: Boolean,
    stepperTitle: String,
    getContainer: Function,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    resetStepperOnHide: Boolean,
    resetSelectedSkuOnHide: Boolean,
    initialSku: {
      type: Object,
      default: () => ({})
    },
    showSoldoutSku: {
      type: Boolean,
      default: true
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: () => ({
        placeholderMap: {},
        uploadImg: () => Promise.resolve(),
        uploadMaxSize: 5
      })
    },
    customStepperConfig: {
      type: Object,
      default: () => ({})
    },
  },

  data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },

  watch: {
    show(val) {
      this.$emit('input', val);
      if (!val) {
        const selectedSkuValues = getSelectedSkuValues(this.sku.tree, this.selectedSku);

        this.$emit('sku-close', {
          selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.resetStepper();
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },

    value(val) {
      this.show = val;
    },

    skuTree(val) {
      this.resetSelectedSku(val);
    }
  },

  computed: {
    skuGroupClass() {
      return [
        'van-sku-group-container',
        'van-hairline--bottom',
        {
          'van-sku-group-container--hide-soldout': !this.showSoldoutSku
        }
      ];
    },

    bodyStyle() {
      if (this.$isServer) {
        return;
      }

      // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下
      const maxHeight = window.innerHeight - this.bodyOffsetTop;

      return {
        maxHeight: maxHeight + 'px'
      };
    },

    isSkuCombSelected() {
      return isAllSelected(this.sku.tree, this.selectedSku);
    },

    isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },

    hasSku() {
      return !this.sku.none_sku;
    },

    selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      }
      if (this.isSkuCombSelected) {
        return getSkuComb(this.sku.list, this.selectedSku);
      }
      return null;
    },

    price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      }
      // sku.price是一个格式化好的价格区间
      return this.sku.price;
    },

    skuTree() {
      return this.sku.tree || [];
    },

    imageList() {
      const imageList = [this.goods.picture];
      if (this.skuTree.length > 0) {
        const treeItem = this.skuTree.filter(item => item.k_s === 's1')[0] || {};

        if (!treeItem.v) {
          return;
        }

        treeItem.v.forEach(vItem => {
          const img = vItem.imgUrl || vItem.img_url;
          if (img) {
            imageList.push(img);
          }
        });
      }

      return imageList;
    }
  },

  created() {
    const skuEventBus = new Vue();
    this.skuEventBus = skuEventBus;

    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);

    this.resetStepper();
    this.resetSelectedSku(this.skuTree);

    // 组件初始化后的钩子，抛出skuEventBus
    this.$emit('after-sku-create', skuEventBus);
  },

  methods: {
    resetStepper() {
      const { skuStepper } = this.$refs;
      const { selectedNum } = this.initialSku;
      const num = isDef(selectedNum) ? selectedNum : 1;

      if (skuStepper) {
        skuStepper.setCurrentNum(num);
      } else {
        this.selectedNum = num;
      }
    },

    resetSelectedSku(skuTree) {
      this.selectedSku = {};

      // 重置 selectedSku
      skuTree.forEach(item => {
        this.selectedSku[item.k_s] = this.initialSku[item.k_s] || UNSELECTED_SKU_VALUE_ID;
      });

      // 只有一个 sku 规格值时默认选中
      skuTree.forEach(item => {
        const key = item.k_s;
        const valueId = item.v[0].id;
        if (
          item.v.length === 1 &&
          isSkuChoosable(this.sku.list, this.selectedSku, { key, valueId })
        ) {
          this.selectedSku[key] = valueId;
        }
      });
    },

    getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },

    getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },

    validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },

    validateSku() {
      if (this.selectedNum === 0) {
        return '商品已经无法购买啦';
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      }

      // 自定义sku校验
      if (this.customSkuValidator) {
        const err = this.customSkuValidator(this);
        if (err) return err;
      }

      return '请先选择商品规格';
    },

    onClose() {
      this.show = false;
    },

    onSelect(skuValue) {
      // 点击已选中的sku时则取消选中
      this.selectedSku =
        this.selectedSku[skuValue.skuKeyStr] === skuValue.id
          ? { ...this.selectedSku, [skuValue.skuKeyStr]: UNSELECTED_SKU_VALUE_ID }
          : { ...this.selectedSku, [skuValue.skuKeyStr]: skuValue.id };

      this.$emit('sku-selected', {
        skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },

    onNumChange(num) {
      this.selectedNum = num;
    },

    onPreviewImage(indexImage) {
      const index = this.imageList.findIndex(image => image === indexImage);

      const cbParams = {
        index,
        imageList: this.imageList,
        indexImage
      };

      this.$emit('preview-on', cbParams);

      ImagePreview({
        images: this.imageList,
        startPosition: index,
        onClose: () => {
          this.$emit('preview-close', cbParams);
        }
      });
    },

    onOverLimit(data) {
      const { action, limitType, quota, quotaUsed } = data;
      const { handleOverLimit } = this.customStepperConfig;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        Toast('至少选择一件');
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          let msg = `限购${quota}件`;
          if (quotaUsed > 0) msg += `，${`你已购买${quotaUsed}件`}`;
          Toast(msg);
        } else {
          Toast('库存不足');
        }
      }
    },

    onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },

    onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },

    onBuyOrAddCart(type) {
      const error = this.validateSku();
      if (error) {
        Toast(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },

    getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  },

  render(h) {
    if (this.isSkuEmpty) {
      return;
    }

    const {
      sku,
      goods,
      price,
      skuEventBus,
      selectedSku,
      selectedNum,
      stepperTitle,
      hideQuotaText,
      selectedSkuComb
    } = this;

    const slotsProps = {
      price,
      selectedNum,
      skuEventBus,
      selectedSku,
      selectedSkuComb
    };
    const slots = name => this.slots(name, slotsProps);

    const Header = slots('sku-header') || (
      <SkuHeader sku={sku} goods={goods} skuEventBus={skuEventBus} selectedSku={selectedSku}>
        {slots('sku-header-price') || (
          <div class="van-sku__goods-price">
            <span class="van-sku__price-symbol">￥</span>
            <span class="van-sku__price-num">{price}</span>
          </div>
        )}
      </SkuHeader>
    );

    const Group =
      slots('sku-group') ||
      (this.hasSku && (
        <div class={this.skuGroupClass}>
          {this.skuTree.map(skuTreeItem => (
            <SkuRow skuRow={skuTreeItem}>
              {skuTreeItem.v.map(skuValue => (
                <SkuRowItem
                  skuList={sku.list}
                  skuValue={skuValue}
                  selectedSku={selectedSku}
                  skuEventBus={skuEventBus}
                  skuKeyStr={skuTreeItem.k_s}
                />
              ))}
            </SkuRow>
          ))}
        </div>
      ));

    const Stepper = slots('sku-stepper') || (
      <SkuStepper
        ref="skuStepper"
        quota={this.quota}
        hideStock={this.hideStock}
        quotaUsed={this.quotaUsed}
        skuEventBus={skuEventBus}
        selectedNum={selectedNum}
        selectedSku={selectedSku}
        stepperTitle={stepperTitle}
        skuStockNum={sku.stock_num}
        hideQuotaText={hideQuotaText}
        selectedSkuComb={selectedSkuComb}
        disableStepperInput={this.disableStepperInput}
        customStepperConfig={this.customStepperConfig}
        onChange={event => {
          this.$emit('stepper-change', event);
        }}
      />
    );

    const Messages = slots('sku-messages') || (
      <SkuMessages
        ref="skuMessages"
        goodsId={this.goodsId}
        messageConfig={this.messageConfig}
        messages={sku.messages}
      />
    );

    const Actions = slots('sku-actions') || (
      <SkuActions
        buyText={this.buyText}
        skuEventBus={skuEventBus}
        showAddCartBtn={this.showAddCartBtn}
      />
    );

    return (
      <Popup
        vModel={this.show}
        position="bottom"
        class="van-sku-container"
        getContainer={this.getContainer}
        closeOnClickOverlay={this.closeOnClickOverlay}
      >
        {Header}
        <div class="van-sku-body" style={this.bodyStyle}>
          {slots('sku-body-top')}
          {Group}
          {slots('extra-sku-group')}
          {Stepper}
          {Messages}
        </div>
        {Actions}
      </Popup>
    );
  }
});
