import { watch, computed, nextTick, onMounted, reactive } from 'vue';

// Utils
import { createNamespace } from '../utils';

// Composition
import { useWindowSize } from '@vant/use';
import { useRefs } from '../composition/use-refs';

// Components
import Tab from '../tab';
import Tabs from '../tabs';
import Field from '../field';
import Button from '../button';
import Coupon from '../coupon';

const [createComponent, bem, t] = createNamespace('coupon-list');
const EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';

export default createComponent({
  props: {
    code: String,
    enabledTitle: String,
    disabledTitle: String,
    closeButtonText: String,
    inputPlaceholder: String,
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

  emits: ['change', 'exchange', 'update:code'],

  setup(props, { emit }) {
    const [couponRefs, setCouponRefs] = useRefs();

    const state = reactive({
      tab: 0,
      code: props.code || '',
    });

    const { height: windowHeight } = useWindowSize();

    const buttonDisabled = computed(
      () =>
        !props.exchangeButtonLoading &&
        (props.exchangeButtonDisabled ||
          !state.code ||
          state.code.length < props.exchangeMinLength)
    );

    const listStyle = computed(() => ({
      height: windowHeight.value - (props.showExchangeBar ? 140 : 94) + 'px',
    }));

    const onExchange = () => {
      emit('exchange', state.code);

      // auto clear currentCode when not use vModel
      if (!props.code) {
        state.code = '';
      }
    };

    const scrollToCoupon = (index) => {
      nextTick(() => {
        if (couponRefs.value[index]) {
          couponRefs.value[index].scrollIntoView();
        }
      });
    };

    const renderEmpty = () => (
      <div class={bem('empty')}>
        <img src={props.emptyImage} />
        <p>{t('empty')}</p>
      </div>
    );

    const renderExchangeBar = () => {
      if (props.showExchangeBar) {
        return (
          <div class={bem('exchange-bar')}>
            <Field
              vModel={state.code}
              clearable
              border={false}
              class={bem('field')}
              placeholder={props.inputPlaceholder || t('placeholder')}
              maxlength="20"
            />
            <Button
              plain
              type="danger"
              class={bem('exchange')}
              text={props.exchangeButtonText || t('exchange')}
              loading={props.exchangeButtonLoading}
              disabled={buttonDisabled.value}
              onClick={onExchange}
            />
          </div>
        );
      }
    };

    const renderCouponTab = () => {
      const { coupons } = props;
      const count = props.showCount ? ` (${coupons.length})` : '';
      const title = (props.enabledTitle || t('enable')) + count;

      return (
        <Tab title={title}>
          <div
            class={bem('list', { 'with-bottom': props.showCloseButton })}
            style={listStyle.value}
          >
            {coupons.map((coupon, index) => (
              <Coupon
                key={coupon.id}
                ref={setCouponRefs(index)}
                coupon={coupon}
                chosen={index === props.chosenCoupon}
                currency={props.currency}
                onClick={() => emit('change', index)}
              />
            ))}
            {!coupons.length && renderEmpty()}
          </div>
        </Tab>
      );
    };

    const renderDisabledTab = () => {
      const { disabledCoupons } = props;
      const count = props.showCount ? ` (${disabledCoupons.length})` : '';
      const title = (props.disabledTitle || t('disabled')) + count;

      return (
        <Tab title={title}>
          <div
            class={bem('list', { 'with-bottom': props.showCloseButton })}
            style={listStyle.value}
          >
            {disabledCoupons.map((coupon) => (
              <Coupon
                disabled
                key={coupon.id}
                coupon={coupon}
                currency={props.currency}
              />
            ))}
            {!disabledCoupons.length && renderEmpty()}
          </div>
        </Tab>
      );
    };

    watch(
      () => props.code,
      (value) => {
        state.code = value;
      }
    );

    watch(
      () => state.code,
      (value) => {
        emit('update:code', value);
      }
    );

    watch(() => props.displayedCouponIndex, scrollToCoupon);

    onMounted(() => {
      scrollToCoupon(props.displayedCouponIndex);
    });

    return () => (
      <div class={bem()}>
        {renderExchangeBar()}
        <Tabs vModel={state.tab} class={bem('tab')} border={false}>
          {renderCouponTab()}
          {renderDisabledTab()}
        </Tabs>
        <div class={bem('bottom')}>
          <Button
            v-show={props.showCloseButton}
            round
            block
            type="danger"
            class={bem('close')}
            text={props.closeButtonText || t('close')}
            onClick={() => {
              emit('change', -1);
            }}
          />
        </div>
      </div>
    );
  },
});
