import Vue from 'vue';
import Popup from '../popup';
import Toast from '../toast';
import ImagePreview from '../image-preview';
import SkuHeader from './components/SkuHeader';
import SkuHeaderItem from './components/SkuHeaderItem';
import SkuRow from './components/SkuRow';
import SkuRowItem from './components/SkuRowItem';
import SkuStepper from './components/SkuStepper';
import SkuMessages from './components/SkuMessages';
import SkuActions from './components/SkuActions';
import { createNamespace, isDef } from '../utils';
import { isAllSelected, isSkuChoosable, getSkuComb, getSelectedSkuValues } from './utils/skuHelper';
import { LIMIT_TYPE, UNSELECTED_SKU_VALUE_ID } from './constants';

const namespace = createNamespace('sku');
const [createComponent, bem, t] = namespace;
const { QUOTA_LIMIT } = LIMIT_TYPE;

export default createComponent({
  props: {
    sku: Object,
    priceTag: String,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    hideStock: Boolean,
    addCartText: String,
    stepperTitle: String,
    getContainer: Function,
    hideQuotaText: Boolean,
    hideSelectedText: Boolean,
    resetStepperOnHide: Boolean,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    safeAreaInsetBottom: Boolean,
    resetSelectedSkuOnHide: Boolean,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    initialSku: {
      type: Object,
      default: () => ({})
    },
    stockThreshold: {
      type: Number,
      default: 50,
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
        this.$emit('sku-close', {
          selectedSkuValues: this.selectedSkuValues,
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

    skuTree: 'resetSelectedSku',

    initialSku() {
      this.resetStepper();
      this.resetSelectedSku(this.skuTree);
    },
  },

  computed: {
    skuGroupClass() {
      return [
        'van-sku-group-container',
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

    selectedSkuValues() {
      return getSelectedSkuValues(this.skuTree, this.selectedSku);
    },

    price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      }
      // sku.price是一个格式化好的价格区间
      return this.sku.price;
    },

    originPrice() {
      if (this.selectedSkuComb && this.selectedSkuComb.origin_price) {
        return (this.selectedSkuComb.origin_price / 100).toFixed(2);
      }
      return this.sku.origin_price;
    },

    skuTree() {
      return this.sku.tree || [];
    },

    imageList() {
      const imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        this.skuTree.forEach(treeItem => {
          if (!treeItem.v) {
            return;
          }

          treeItem.v.forEach(vItem => {
            const img = vItem.previewImgUrl || vItem.imgUrl || vItem.img_url;
            if (img) {
              imageList.push(img);
            }
          });
        });
      }

      return imageList;
    },

    stock() {
      const { stockNum } = this.customStepperConfig;
      if (stockNum !== undefined) {
        return stockNum;
      }
      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }
      return this.sku.stock_num;
    },

    stockText() {
      const { stockFormatter } = this.customStepperConfig;
      if (stockFormatter) return stockFormatter(this.stock);

      return [
        `${t('stock')} `,
        <span class={bem('stock-num', { highlight: this.stock < this.stockThreshold })}>
          {this.stock}
        </span>,
        ` ${t('stockUnit')}`
      ];
    },

    quotaText() {
      const { quotaText, hideQuotaText } = this.customStepperConfig;

      if (hideQuotaText) return '';

      let text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = t('quotaLimit', this.quota);
      }

      return text;
    },

    selectedText() {
      if (this.selectedSkuComb) {
        return `${t('selected')} ${this.selectedSkuValues.map(item => item.name).join('；')}`;
      }

      const unselected = this.skuTree
        .filter(item => this.selectedSku[item.k_s] === UNSELECTED_SKU_VALUE_ID)
        .map(item => item.k)
        .join('；');

      return `${t('select')} ${unselected}`;
    }
  },

  created() {
    const skuEventBus = new Vue();
    this.skuEventBus = skuEventBus;

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

      const skuValues = this.selectedSkuValues;

      if (skuValues.length > 0) {
        this.$nextTick(() => {
          this.$emit('sku-selected', {
            skuValue: skuValues[skuValues.length - 1],
            selectedSku: this.selectedSku,
            selectedSkuComb: this.selectedSkuComb,
          });
        });
      }
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
        return t('unavailable');
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      }

      // 自定义sku校验
      if (this.customSkuValidator) {
        const err = this.customSkuValidator(this);
        if (err) return err;
      }

      return t('selectSku');
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

      const params = {
        index,
        imageList: this.imageList,
        indexImage
      };

      this.$emit('open-preview', params);

      ImagePreview({
        images: this.imageList,
        startPosition: index,
        closeOnPopstate: true,
        onClose: () => {
          this.$emit('close-preview', params);
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
        Toast(t('minusTip'));
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          let msg = t('quotaLimit', quota);
          if (quotaUsed > 0) msg += `，${t('quotaCount', quotaUsed)}`;
          Toast(msg);
        } else {
          Toast(t('soldout'));
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

  render() {
    if (this.isSkuEmpty) {
      return;
    }

    const {
      sku,
      goods,
      price,
      originPrice,
      skuEventBus,
      selectedSku,
      selectedNum,
      stepperTitle,
      hideQuotaText,
      selectedSkuComb
    } = this;

    const slotsProps = {
      price,
      originPrice,
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
            {this.priceTag && <span class="van-sku__price-tag">{this.priceTag}</span>}
          </div>
        )}
        {slots('sku-header-origin-price') || (
          originPrice && (
            <SkuHeaderItem>{t('originPrice')} ￥{originPrice}</SkuHeaderItem>
          )
        )}
        {!this.hideStock && (
          <SkuHeaderItem>
            <span class="van-sku__stock">{this.stockText}</span>
            {!hideQuotaText && this.quotaText && <span class="van-sku__quota">({this.quotaText})</span>}
          </SkuHeaderItem>
        )}
        {this.hasSku && !this.hideSelectedText && (
          <SkuHeaderItem>{this.selectedText}</SkuHeaderItem>
        )}
        {slots('sku-header-extra')}
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
        stock={this.stock}
        quota={this.quota}
        quotaUsed={this.quotaUsed}
        skuEventBus={skuEventBus}
        selectedNum={selectedNum}
        selectedSku={selectedSku}
        stepperTitle={stepperTitle}
        skuStockNum={sku.stock_num}
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
        addCartText={this.addCartText}
        showAddCartBtn={this.showAddCartBtn}
      />
    );

    return (
      <Popup
        vModel={this.show}
        round
        closeable
        position="bottom"
        class="van-sku-container"
        getContainer={this.getContainer}
        closeOnClickOverlay={this.closeOnClickOverlay}
        safeAreaInsetBottom={this.safeAreaInsetBottom}
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
