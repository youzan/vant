import {
  watch,
  computed,
  nextTick,
  reactive,
  onMounted,
  defineComponent,
} from 'vue';

// Utils
import {
  truthProp,
  makeArrayProp,
  makeStringProp,
  makeNumberProp,
  createNamespace,
} from '../utils';

// Composables
import { useRefs } from '../composables/use-refs';

// Components
import { Tab } from '../tab';
import { Tabs } from '../tabs';
import { Field } from '../field';
import { Button } from '../button';
import { Coupon, CouponInfo } from '../coupon';

const [name, bem, t] = createNamespace('coupon-list');
const EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';

export default defineComponent({
  name,

  props: {
    code: makeStringProp(''),
    coupons: makeArrayProp<CouponInfo>(),
    currency: makeStringProp('¥'),
    showCount: truthProp,
    emptyImage: makeStringProp(EMPTY_IMAGE),
    chosenCoupon: makeNumberProp(-1),
    enabledTitle: String,
    disabledTitle: String,
    disabledCoupons: makeArrayProp<CouponInfo>(),
    showExchangeBar: truthProp,
    showCloseButton: truthProp,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeMinLength: makeNumberProp(1),
    exchangeButtonText: String,
    displayedCouponIndex: makeNumberProp(-1),
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
  },

  emits: ['change', 'exchange', 'update:code'],

  setup(props, { emit, slots }) {
    const [couponRefs, setCouponRefs] = useRefs();

    const state = reactive({
      tab: 0,
      code: props.code,
    });

    const buttonDisabled = computed(
      () =>
        !props.exchangeButtonLoading &&
        (props.exchangeButtonDisabled ||
          !state.code ||
          state.code.length < props.exchangeMinLength)
    );

    const onExchange = () => {
      emit('exchange', state.code);

      // auto clear currentCode when not use v-model
      if (!props.code) {
        state.code = '';
      }
    };

    const scrollToCoupon = (index: number) => {
      nextTick(() => {
        if (couponRefs.value[index]) {
          couponRefs.value[index].scrollIntoView();
        }
      });
    };

    const renderEmpty = () => (
      <div class={bem('empty')}>
        <img src={props.emptyImage} />
        <p>{t('noCoupon')}</p>
      </div>
    );

    const renderExchangeBar = () => {
      if (props.showExchangeBar) {
        return (
          <div class={bem('exchange-bar')}>
            <Field
              v-model={state.code}
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
            class={bem('list', {
              'with-bar': props.showExchangeBar,
              'with-bottom': props.showCloseButton,
            })}
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
            {slots['list-footer']?.()}
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
            class={bem('list', {
              'with-bar': props.showExchangeBar,
              'with-bottom': props.showCloseButton,
            })}
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
            {slots['disabled-list-footer']?.()}
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
      (value) => emit('update:code', value)
    );

    watch(() => props.displayedCouponIndex, scrollToCoupon);

    onMounted(() => {
      scrollToCoupon(props.displayedCouponIndex);
    });

    return () => (
      <div class={bem()}>
        {renderExchangeBar()}
        <Tabs v-model:active={state.tab} class={bem('tab')} border={false}>
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
            onClick={() => emit('change', -1)}
          />
        </div>
      </div>
    );
  },
});
