<template>
  <demo-block :title="t('basicUsage')">
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <van-popup
      v-model:show="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        :show-count="false"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </demo-block>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';
import { Coupon } from '../../coupon/shared';
import Toast from '../../toast';

const i18n = {
  'zh-CN': {
    coupon: {
      name: '优惠券名称',
      reason: '优惠券不可用原因',
      description: '描述信息',
    },
    exchange: '兑换成功',
  },
  'en-US': {
    coupon: {
      name: 'Coupon name',
      reason: 'Coupon unavailable reason',
      description: 'Description',
    },
    exchange: 'Success',
  },
};

const getRandomId = (max = 999999) =>
  String(Math.floor(Math.random() * max) + 1);

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      showList: false,
      chosenCoupon: -1,
      exchangedCoupons: [] as Coupon[],
    });

    const coupon = computed(() => ({
      id: 1,
      condition: '无使用门槛\n最多优惠12元',
      reason: '',
      value: 150,
      name: t('coupon.name'),
      description: t('coupon.description'),
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: '1.5',
      unitDesc: '元',
    }));

    const discountCoupon = computed(() => ({
      ...coupon.value,
      id: 2,
      value: 12,
      valueDesc: '8.8',
      unitDesc: '折',
    }));

    const disabledCoupon = computed(() => ({
      ...coupon.value,
      id: 3,
      reason: t('coupon.reason'),
    }));

    const disabledDiscountCoupon = computed(() => ({
      ...discountCoupon.value,
      valueDesc: '1',
      unitDesc: '折',
      id: 4,
      reason: t('coupon.reason'),
    }));

    const coupons = computed(() => [
      coupon.value,
      discountCoupon.value,
      ...state.exchangedCoupons,
    ]);

    const disabledCoupons = computed(() => [
      disabledCoupon.value,
      disabledDiscountCoupon.value,
    ]);

    const onChange = (index: number) => {
      state.showList = false;
      state.chosenCoupon = index;
    };

    const onExchange = () => {
      Toast(t('exchange'));
      state.exchangedCoupons.push({
        ...coupon.value,
        id: getRandomId(),
      });
    };

    return {
      ...toRefs(state),
      t,
      coupons,
      onChange,
      onExchange,
      disabledCoupons,
    };
  },
};
</script>
