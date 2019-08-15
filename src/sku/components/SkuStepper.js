import { createNamespace } from '../../utils';
import Stepper from '../../stepper';
import { LIMIT_TYPE } from '../constants';

const namespace = createNamespace('sku-stepper');
const createComponent = namespace[0];
const t = namespace[2];
const { QUOTA_LIMIT, STOCK_LIMIT } = LIMIT_TYPE;

export default createComponent({
  props: {
    stock: Number,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedNum: Number,
    stepperTitle: String,
    disableStepperInput: Boolean,
    customStepperConfig: Object,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
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
  },

  render() {
    return (
      <div class="van-sku-stepper-stock">
        <div class="van-sku-stepper-container">
          <div class="van-sku__stepper-title">{this.stepperTitle || t('num')}</div>
          <Stepper
            vModel={this.currentNum}
            class="van-sku__stepper"
            max={this.stepperLimit}
            disableInput={this.disableStepperInput}
            onOverlimit={this.onOverLimit}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
});
