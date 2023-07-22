import {
  ref,
  watch,
  computed,
  nextTick,
  onMounted,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  truthProp,
  windowHeight,
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
import { Empty } from '../empty';
import { Field } from '../field';
import { Button } from '../button';
import { Coupon, CouponInfo } from '../coupon';
import { useRect } from '@vant/use';

const [name, bem, t] = createNamespace('coupon-list');
export const couponListProps = {
  code: makeStringProp(''),
  coupons: makeArrayProp<CouponInfo>(),
  currency: makeStringProp('¥'),
  showCount: truthProp,
  emptyImage: String,
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
};

export type CouponListProps = ExtractPropTypes<typeof couponListProps>;

export default defineComponent({
  name,

  props: couponListProps,

  emits: ['change', 'exchange', 'update:code'],

  setup(props, { emit, slots }) {
    const [couponRefs, setCouponRefs] = useRefs();

    const root = ref<HTMLElement>();
    const barRef = ref<HTMLElement>();
    const activeTab = ref(0);
    const listHeight = ref(0);
    const currentCode = ref(props.code);

    const buttonDisabled = computed(
      () =>
        !props.exchangeButtonLoading &&
        (props.exchangeButtonDisabled ||
          !currentCode.value ||
          currentCode.value.length < props.exchangeMinLength),
    );

    const updateListHeight = () => {
      const TABS_HEIGHT = 44;
      const rootHeight = useRect(root).height;
      const headerHeight = useRect(barRef).height + TABS_HEIGHT;
      listHeight.value =
        (rootHeight > headerHeight ? rootHeight : windowHeight.value) -
        headerHeight;
    };

    const onExchange = () => {
      emit('exchange', currentCode.value);

      // auto clear currentCode when not use v-model
      if (!props.code) {
        currentCode.value = '';
      }
    };

    const scrollToCoupon = (index: number) => {
      nextTick(() => couponRefs.value[index]?.scrollIntoView());
    };

    const renderEmpty = () => (
      <Empty image={props.emptyImage}>
        <p class={bem('empty-tip')}>{t('noCoupon')}</p>
      </Empty>
    );

    const renderExchangeBar = () => {
      if (props.showExchangeBar) {
        return (
          <div ref={barRef} class={bem('exchange-bar')}>
            <Field
              v-model={currentCode.value}
              clearable
              border={false}
              class={bem('field')}
              placeholder={props.inputPlaceholder || t('placeholder')}
              maxlength="20"
            />
            <Button
              plain
              type="primary"
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
            style={{ height: `${listHeight.value}px` }}
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
            class={bem('list', { 'with-bottom': props.showCloseButton })}
            style={{ height: `${listHeight.value}px` }}
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
        currentCode.value = value;
      },
    );

    watch(windowHeight, updateListHeight);
    watch(currentCode, (value) => emit('update:code', value));
    watch(() => props.displayedCouponIndex, scrollToCoupon);

    onMounted(() => {
      updateListHeight();
      scrollToCoupon(props.displayedCouponIndex);
    });

    return () => (
      <div ref={root} class={bem()}>
        {renderExchangeBar()}
        <Tabs v-model:active={activeTab.value} class={bem('tab')}>
          {renderCouponTab()}
          {renderDisabledTab()}
        </Tabs>
        <div class={bem('bottom')}>
          <Button
            v-show={props.showCloseButton}
            round
            block
            type="primary"
            class={bem('close')}
            text={props.closeButtonText || t('close')}
            onClick={() => emit('change', -1)}
          />
        </div>
      </div>
    );
  },
});
