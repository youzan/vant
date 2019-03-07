import { use } from '../../utils';
import Stepper from '../../stepper';
import { LIMIT_TYPE } from '../constants';

const [sfc] = use('sku-stepper');
const { QUOTA_LIMIT, STOCK_LIMIT } = LIMIT_TYPE;

export default sfc({
  props: {
    quota: Number,
    quotaUsed: Number,
    hideStock: Boolean,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedSku: Object,
    selectedNum: Number,
    stepperTitle: String,
    hideQuotaText: Boolean,
    selectedSkuComb: Object,
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
      const { stockNum } = this.customStepperConfig;
      if (stockNum !== undefined) {
        return stockNum;
      }
      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }
      return this.skuStockNum;
    },

    stockText() {
      const { stockFormatter } = this.customStepperConfig;
      if (stockFormatter) return stockFormatter(this.stock);

      return `剩余${this.stock}件`;
    },

    quotaText() {
      const { quotaText, hideQuotaText } = this.customStepperConfig;

      if (hideQuotaText) return '';

      let text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = `每人限购${this.quota}件`;
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
  },

  render(h) {
    return (
      <div class="van-sku-stepper-stock">
        <div class="van-sku-stepper-container">
          <div class="van-sku__stepper-title">{this.stepperTitle || '购买数量'}：</div>
          <Stepper
            vModel={this.currentNum}
            class="van-sku__stepper"
            max={this.stepperLimit}
            disableInput={this.disableStepperInput}
            onOverlimit={this.onOverLimit}
            onChange={this.onChange}
          />
        </div>
        {!this.hideStock && <div class="van-sku__stock">{this.stockText}</div>}
        {!this.hideQuotaText && this.quotaText && (
          <div class="van-sku__quota">{this.quotaText}</div>
        )}
      </div>
    );
  }
});
