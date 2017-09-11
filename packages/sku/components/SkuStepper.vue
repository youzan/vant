<template>
  <div class="van-sku-stepper-stock">
    <div class="van-sku-stepper-container">
      <div class="van-sku__stepper-title">{{ stepperTitle }}：</div>
      <van-stepper v-model="currentNum" :min="1" :max="stepperLimit" class="van-sku__stepper" @overlimit="handleOverLimit"></van-stepper>
    </div>
    <div v-if="!hideStock" class="van-sku__stock">剩余{{ stock }}件</div>
    <div v-if="quota > 0" class="van-sku__quota">每人限购{{ quota }}件</div>
  </div>
</template>

<script>
import Stepper from '../../stepper';
import { LIMIT_TYPE } from '../constants';

const { QUOTA_LIMIT, STOCK_LIMIT } = LIMIT_TYPE;

export default {
  name: 'van-sku-stepper',

  components: {
    [Stepper.name]: Stepper
  },

  props: {
    skuEventBus: Object,
    sku: Object,
    selectedSku: Object,
    selectedSkuComb: Object,
    selectedNum: Number,
    quota: Number,
    quotaUsed: Number,
    hideStock: {
      type: Boolean,
      default: false
    },
    stepperTitle: {
      type: String,
      default: '购买数量'
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
      return this.sku.stock_num;
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
