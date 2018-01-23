<template>
  <popup v-model="show" v-if="!isSkuEmpty" position="bottom" lock-on-scroll prevent-scroll>
    <div class="van-sku-container">
      <div class="van-sku-layout">
        <!-- sku-header -->
        <slot
          name="sku-header"
          :sku-event-bus="skuEventBus"
          :selected-sku="selectedSku"
          :selected-sku-comb="selectedSkuComb"
        >
          <sku-header
            :sku-event-bus="skuEventBus"
            :selected-sku="selectedSku"
            :selected-sku-comb="selectedSkuComb"
            :goods="goods"
            :sku="sku"
          />
        </slot>
        <div class="van-sku-body" :style="bodyStyle">
          <!-- sku-body-top -->
          <slot name="sku-body-top" :selected-sku="selectedSku" :sku-event-bus="skuEventBus" />
          <!-- sku-group -->
          <slot name="sku-group" :selected-sku="selectedSku" :sku-event-bus="skuEventBus">
            <div v-if="hasSku" class="van-sku-group-container van-hairline--bottom">
              <div
                v-for="(skuTreeItem, index) in skuTree"
                class="van-sku-row-group"
                :key="index">
                <sku-row
                  :sku-event-bus="skuEventBus"
                  :sku-row="skuTreeItem"
                >
                  <sku-row-item
                    v-for="(skuValue, index) in skuTreeItem.v"
                    :key="index"
                    :sku-key-str="skuTreeItem.k_s"
                    :sku-value="skuValue"
                    :sku-event-bus="skuEventBus"
                    :selected-sku="selectedSku"
                    :sku-list="sku.list"
                  />
                </sku-row>
              </div>
            </div>
          </slot>
          <!-- extra-sku-group -->
          <slot name="extra-sku-group" :sku-event-bus="skuEventBus"/>
          <!-- sku-stepper -->
          <slot
            name="sku-stepper"
            :sku-event-bus="skuEventBus"
            :selected-sku="selectedSku"
            :selected-sku-comb="selectedSkuComb"
            :selected-num="selectedNum"
          >
            <sku-stepper
              ref="skuStepper"
              :sku-event-bus="skuEventBus"
              :selected-sku="selectedSku"
              :selected-sku-comb="selectedSkuComb"
              :selected-num="selectedNum"
              :stepper-title="stepperTitle"
              :sku-stock-num="sku.stock_num"
              :quota="quota"
              :quota-used="quotaUsed"
              :disable-stepper-input="disableStepperInput"
              :hide-stock="hideStock"
            />
          </slot>
          <!-- sku-messages -->
          <slot name="sku-messages">
            <sku-messages
              ref="skuMessages"
              :goods-id="goodsId"
              :message-placeholder-map="messagePlaceholderMap"
              :messages="sku.messages"
            />
          </slot>
        </div>
        <!-- sku-actions -->
        <slot name="sku-actions" :sku-event-bus="skuEventBus">
          <sku-actions
            :sku-event-bus="skuEventBus"
            :buy-text="buyText"
            :show-add-cart-btn="showAddCartBtn"
          />
        </slot>
      </div>
    </div>
  </popup>
</template>

<script>
/* eslint-disable camelcase */
import Vue from 'vue';
import Popup from '../popup';
import Toast from '../toast';
import SkuHeader from './components/SkuHeader';
import SkuRow from './components/SkuRow';
import SkuRowItem from './components/SkuRowItem';
import SkuStepper from './components/SkuStepper';
import SkuMessages from './components/SkuMessages';
import SkuActions from './components/SkuActions';
import {
  isAllSelected,
  getSkuComb,
  getSelectedSkuValues
} from './utils/skuHelper';
import { LIMIT_TYPE } from './constants';
import { create } from '../utils';

const { QUOTA_LIMIT } = LIMIT_TYPE;

export default create({
  name: 'van-sku',

  components: {
    Popup,
    SkuHeader,
    SkuRow,
    SkuRowItem,
    SkuStepper,
    SkuMessages,
    SkuActions
  },

  props: {
    sku: Object,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    stepperTitle: String,
    hideStock: Boolean,
    resetStepperOnHide: Boolean,
    resetSelectedSkuOnHide: Boolean,
    disableStepperInput: Boolean,
    initialSku: {
      type: Object,
      default: () => ({})
    },
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messagePlaceholderMap: {
      type: Object,
      default: () => ({})
    }
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
        const selectedSkuValues = getSelectedSkuValues(
          this.sku.tree,
          this.selectedSku
        );

        this.$emit('sku-close', {
          selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.$refs.skuStepper && this.$refs.skuStepper.setCurrentNum(1);
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
    bodyStyle() {
      if (this.$isServer) {
        return;
      }

      const windowHeight = window.innerHeight;
      // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下
      const maxHeight = windowHeight - this.bodyOffsetTop;

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
      } else if (this.isSkuCombSelected) {
        return getSkuComb(this.sku.list, this.selectedSku);
      }
      return null;
    },

    skuTree() {
      return this.sku.tree || [];
    }
  },

  created() {
    const skuEventBus = new Vue();
    this.skuEventBus = skuEventBus;

    skuEventBus.$on('sku:close', this.handleCloseClicked);
    skuEventBus.$on('sku:select', this.handleSkuSelected);
    skuEventBus.$on('sku:numChange', this.handleNumChange);
    skuEventBus.$on('sku:overLimit', this.handleOverLimit);
    skuEventBus.$on('sku:addCart', this.handleAddCartClicked);
    skuEventBus.$on('sku:buy', this.handleBuyClicked);

    this.resetSelectedSku(this.skuTree);
    // 组件初始化后的钩子，抛出skuEventBus
    this.$emit('after-sku-create', skuEventBus);
  },

  methods: {
    resetSelectedSku(skuTree) {
      this.selectedSku = {};
      skuTree.forEach(item => {
        // 只有一个sku规格值时默认选中
        if (item.v.length === 1) {
          this.selectedSku[item.k_s] = item.v[0].id;
        } else {
          this.selectedSku[item.k_s] = this.initialSku[item.k_s] || '';
        }
      });
    },

    getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },

    getSkuCartMessages() {
      return this.$refs.skuMessages
        ? this.$refs.skuMessages.getCartMessages()
        : {};
    },

    validateSkuMessages() {
      return this.$refs.skuMessages
        ? this.$refs.skuMessages.validateMessages()
        : '';
    },

    validateSku() {
      if (this.selectedNum === 0) {
        return this.$t('unavailable');
      }

      if (this.isSkuCombSelected) {
        const error = this.validateSkuMessages();
        // sku留言没有错误则校验通过
        return error;
      } else {
        return this.$t('spec');
      }
    },

    handleCloseClicked() {
      this.show = false;
    },

    handleSkuSelected(skuValue) {
      // 点击已选中的sku时则取消选中
      this.selectedSku =
        this.selectedSku[skuValue.skuKeyStr] === skuValue.id
          ? { ...this.selectedSku, [skuValue.skuKeyStr]: '' }
          : { ...this.selectedSku, [skuValue.skuKeyStr]: skuValue.id };

      this.$emit('sku-selected', {
        skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },

    handleNumChange(num) {
      this.selectedNum = num;
    },

    handleOverLimit({ action, limitType, quota, quotaUsed }) {
      if (action === 'minus') {
        Toast(this.$t('least'));
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          let msg = this.$t('quota', quota);
          if (quotaUsed > 0) msg += `，${this.$t('purchase', quotaUsed)}`;
          Toast(msg);
        } else {
          Toast(this.$t('inventory'));
        }
      }
    },

    handleAddCartClicked() {
      this.handleBuyOrAddCart('add-cart');
    },

    handleBuyClicked() {
      this.handleBuyOrAddCart('buy-clicked');
    },

    handleBuyOrAddCart(type) {
      const error = this.validateSku();
      if (error) {
        Toast(error);
        return;
      }
      this.$emit(type, {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      });
    }
  }
});
</script>
