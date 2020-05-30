import { createNamespace } from '../../utils';
import { LIMIT_TYPE } from '../constants';
import Stepper from '../../stepper';

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
    hideQuotaText: Boolean,
    quota: {
      type: Number,
      default: 0,
    },
    quotaUsed: {
      type: Number,
      default: 0,
    },
    startSaleNum: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT,
    };
  },

  watch: {
    currentNum(num) {
      const intValue = parseInt(num, 10);
      if (intValue >= this.stepperMinLimit && intValue <= this.stepperLimit) {
        this.skuEventBus.$emit('sku:numChange', intValue);
      }
    },

    stepperLimit(limit) {
      if (limit < this.currentNum && this.stepperMinLimit <= limit) {
        this.currentNum = limit;
      }
      this.checkState(this.stepperMinLimit, limit);
    },

    stepperMinLimit(start) {
      if (start > this.currentNum || start > this.stepperLimit) {
        this.currentNum = start;
      }
      this.checkState(start, this.stepperLimit);
    },
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
    },
    stepperMinLimit() {
      return this.startSaleNum < 1 ? 1 : this.startSaleNum;
    },
    quotaText() {
      const { quotaText, hideQuotaText } = this.customStepperConfig;
      if (hideQuotaText) return '';

      let text = '';

      if (quotaText) {
        text = quotaText;
      } else {
        const textArr = [];
        if (this.startSaleNum > 1) {
          textArr.push(t('quotaStart', this.startSaleNum));
        }
        if (this.quota > 0) {
          textArr.push(t('quotaLimit', this.quota));
        }
        text = textArr.join(t('comma'));
      }

      return text;
    },
  },

  created() {
    this.checkState(this.stepperMinLimit, this.stepperLimit);
  },

  methods: {
    setCurrentNum(num) {
      this.currentNum = num;
      this.checkState(this.stepperMinLimit, this.stepperLimit);
    },

    onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed,
        startSaleNum: this.startSaleNum,
      });
    },

    onChange(currentValue) {
      const intValue = parseInt(currentValue, 10);
      const { handleStepperChange } = this.customStepperConfig;
      handleStepperChange && handleStepperChange(intValue);
      this.$emit('change', intValue);
    },

    checkState(min, max) {
      // 如果选择小于起售，则强制变为起售
      if (this.currentNum < min || min > max) {
        this.currentNum = min;
      } else if (this.currentNum > max) {
        // 当前选择数量大于最大可选时，需要重置已选数量
        this.currentNum = max;
      }

      this.skuEventBus.$emit('sku:stepperState', {
        valid: min <= max,
        min,
        max,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed,
        startSaleNum: this.startSaleNum,
      });
    },
  },

  render() {
    return (
      <div class="van-sku-stepper-stock">
        <div class="van-sku__stepper-title">
          {this.stepperTitle || t('num')}
        </div>
        <Stepper
          vModel={this.currentNum}
          integer
          class="van-sku__stepper"
          min={this.stepperMinLimit}
          max={this.stepperLimit}
          disableInput={this.disableStepperInput}
          onOverlimit={this.onOverLimit}
          onChange={this.onChange}
        />
        {!this.hideQuotaText && this.quotaText && (
          <span class="van-sku__stepper-quota">({this.quotaText})</span>
        )}
      </div>
    );
  },
});
