// Utils
import { createNamespace } from '../utils';

// Components
import Tab from '../tab';
import Tabs from '../tabs';
import Field from '../field';
import Button from '../button';
import Coupon from '../coupon';

const [createComponent, bem, t] = createNamespace('coupon-list');
const EMPTY_IMAGE = 'https://img01.yzcdn.cn/vant/coupon-empty.png';

export default createComponent({
  model: {
    prop: 'code',
  },

  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1,
    },
    chosenCoupon: {
      type: Number,
      default: -1,
    },
    coupons: {
      type: Array,
      default: () => [],
    },
    disabledCoupons: {
      type: Array,
      default: () => [],
    },
    displayedCouponIndex: {
      type: Number,
      default: -1,
    },
    showExchangeBar: {
      type: Boolean,
      default: true,
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
    showCount: {
      type: Boolean,
      default: true,
    },
    currency: {
      type: String,
      default: '¥',
    },
    emptyImage: {
      type: String,
      default: EMPTY_IMAGE,
    },
  },

  data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || '',
    };
  },

  computed: {
    buttonDisabled() {
      return (
        !this.exchangeButtonLoading &&
        (this.exchangeButtonDisabled ||
          !this.currentCode ||
          this.currentCode.length < this.exchangeMinLength)
      );
    },

    listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px',
      };
    },
  },

  watch: {
    code(code) {
      this.currentCode = code;
    },

    currentCode(code) {
      this.$emit('input', code);
    },

    displayedCouponIndex: 'scrollToShowCoupon',
  },

  mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },

  methods: {
    onClickExchangeButton() {
      this.$emit('exchange', this.currentCode);

      // auto clear currentCode when not use vModel
      if (!this.code) {
        this.currentCode = '';
      }
    },

    // scroll to show specific coupon
    scrollToShowCoupon(index) {
      if (index === -1) {
        return;
      }

      this.$nextTick(() => {
        const { card, list } = this.$refs;

        /* istanbul ignore next */
        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },

    genEmpty() {
      return (
        <div class={bem('empty')}>
          <img src={this.emptyImage} />
          <p>{t('empty')}</p>
        </div>
      );
    },

    genExchangeButton() {
      return (
        <Button
          plain
          type="danger"
          class={bem('exchange')}
          text={this.exchangeButtonText || t('exchange')}
          loading={this.exchangeButtonLoading}
          disabled={this.buttonDisabled}
          onClick={this.onClickExchangeButton}
        />
      );
    },
  },

  render() {
    const { coupons, disabledCoupons } = this;

    const count = this.showCount ? ` (${coupons.length})` : '';
    const title = (this.enabledTitle || t('enable')) + count;

    const disabledCount = this.showCount ? ` (${disabledCoupons.length})` : '';
    const disabledTitle = (this.disabledTitle || t('disabled')) + disabledCount;

    const ExchangeBar = this.showExchangeBar && (
      <div class={bem('exchange-bar')}>
        <Field
          vModel={this.currentCode}
          clearable
          border={false}
          class={bem('field')}
          placeholder={this.inputPlaceholder || t('placeholder')}
          maxlength="20"
        />
        {this.genExchangeButton()}
      </div>
    );

    const onChange = (index) => () => this.$emit('change', index);

    const CouponTab = (
      <Tab title={title}>
        <div
          class={bem('list', { 'with-bottom': this.showCloseButton })}
          style={this.listStyle}
        >
          {coupons.map((coupon, index) => (
            <Coupon
              ref="card"
              key={coupon.id}
              coupon={coupon}
              currency={this.currency}
              chosen={index === this.chosenCoupon}
              nativeOnClick={onChange(index)}
            />
          ))}
          {!coupons.length && this.genEmpty()}
          {this.slots('list-footer')}
        </div>
      </Tab>
    );

    const DisabledCouponTab = (
      <Tab title={disabledTitle}>
        <div
          class={bem('list', { 'with-bottom': this.showCloseButton })}
          style={this.listStyle}
        >
          {disabledCoupons.map((coupon) => (
            <Coupon
              disabled
              key={coupon.id}
              coupon={coupon}
              currency={this.currency}
            />
          ))}
          {!disabledCoupons.length && this.genEmpty()}
          {this.slots('disabled-list-footer')}
        </div>
      </Tab>
    );

    return (
      <div class={bem()}>
        {ExchangeBar}
        <Tabs vModel={this.tab} class={bem('tab')} border={false}>
          {CouponTab}
          {DisabledCouponTab}
        </Tabs>
        <div class={bem('bottom')}>
          <Button
            vShow={this.showCloseButton}
            round
            type="danger"
            block
            class={bem('close')}
            text={this.closeButtonText || t('close')}
            onClick={onChange(-1)}
          />
        </div>
      </div>
    );
  },
});
