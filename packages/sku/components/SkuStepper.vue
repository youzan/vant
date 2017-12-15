<template>
  <div class="van-sku-stepper-stock">
    <div class="van-sku-stepper-container">
      <div class="van-sku__stepper-title">{{ stepperTitle || $t('title') }}：</div>
      <stepper
        class="van-sku__stepper"
        v-model="currentNum"
        :min="1"
        :max="stepperLimit"
        :disableInput="disableStepperInput"
        @overlimit="handleOverLimit">
      </stepper>
    </div>
    <div v-if="!hideStock" class="van-sku__stock">{{ $t('remain', stock) }}</div>
    <div v-if="quota > 0" class="van-sku__quota">{{ $t('quota', quota) }}</div>
  </div>
</template>

<script>
import Stepper from '../../stepper';
import { LIMIT_TYPE } from '../constants';

const { QUOTA_LIMIT, STOCK_LIMIT } = LIMIT_TYPE;

export default {
  name: 'van-sku-stepper',

  components: {
    Stepper
  },

  props: {
    skuEventBus: Object,
    skuStockNum: Number,
    selectedSku: Object,
    selectedSkuComb: Object,
    selectedNum: Number,
    stepperTitle: String,
    quota: Number,
    quotaUsed: Number,
    hideStock: {
      type: Boolean,
      default: false
    },
    disableStepperInput: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },

  watch: {
    currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },

  computed: {
    stock() {
      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }
      return this.skuStockNum;
    },
    stepperLimit() {
      const quotaLimit = this.quota - this.quotaUsed;
      let limit;

      // 无限购时直接取库存，有限购时取限购数和库存数中小的那个
      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
      }

      return limit;
    }
  },

  methods: {
    setCurrentNum(num) {
      this.currentNum = num;
    },
    handleOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    }
  }
};
</script>
