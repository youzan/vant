<template>
  <div class="van-sku-stepper-stock">
    <div class="van-sku-stepper-container">
      <div class="van-sku__stepper-title">{{ stepperTitle || $t('title') }}：</div>
      <stepper
        class="van-sku__stepper"
        v-model="currentNum"
        :min="1"
        :max="stepperLimit"
        :disable-input="disableStepperInput"
        @overlimit="onOverLimit"
        @change="onChange"
      />
    </div>
    <div v-if="!hideStock" class="van-sku__stock">{{ $t('remain', stock) }}</div>
    <div v-if="quotaText" class="van-sku__quota">{{ quotaText }}</div>
  </div>
</template>

<script>
import create from '../../utils/create';
import Stepper from '../../stepper';
import { LIMIT_TYPE } from '../constants';

const { QUOTA_LIMIT, STOCK_LIMIT } = LIMIT_TYPE;

export default create({
  name: 'sku-stepper',

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
    hideStock: Boolean,
    disableStepperInput: Boolean,
    customStepperConfig: Object
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

    quotaText() {
      const { quotaText } = this.customStepperConfig;
      let text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = this.$t('quota', this.quota);
      }

      return text;
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
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },

  methods: {
    setCurrentNum(num) {
      this.currentNum = num;
    },

    onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },

    onChange(currentValue) {
      const { handleStepperChange } = this.customStepperConfig;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  }
});
</script>
