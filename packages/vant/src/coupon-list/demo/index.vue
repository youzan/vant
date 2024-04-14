<script setup lang="ts">
import VanCouponCell from '../../coupon-cell';
import VanPopup from '../../popup';
import VanButton from '../../button';
import VanCouponList from '..';
import { ref, computed } from 'vue';
import { useTranslate } from '../../../docs/site';
import { CouponInfo } from '../../coupon';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    coupon: {
      name: '优惠券名称',
      reason: '优惠券不可用原因',
      description: '描述信息',
    },
    exchange: '兑换成功',
    checkboxUsage: '多选用法',
  },
  'en-US': {
    coupon: {
      name: 'Coupon name',
      reason: 'Coupon unavailable reason',
      description: 'Description',
    },
    exchange: 'Success',
    checkboxUsage: 'Checkbox Usage',
  },
});

const getRandomId = (max = 999999) =>
  String(Math.floor(Math.random() * max) + 1);

const showList = ref(false);
const showListArray = ref(false);
const chosenCoupon = ref(-1);
const chosenCouponArray = ref<number[]>([]);
const chosenCouponArrayResult = ref<number[]>([]);
const exchangedCoupons = ref<CouponInfo[]>([]);

const coupon = computed(() => ({
  id: 1,
  condition: '无门槛\n最多优惠12元',
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
  ...exchangedCoupons.value,
]);

const disabledCoupons = computed(() => [
  disabledCoupon.value,
  disabledDiscountCoupon.value,
]);

const onChange = (index: number) => {
  showList.value = false;
  chosenCoupon.value = index;
};

const onChangeArray = (chosenCoupon: number[]) => {
  chosenCouponArray.value = chosenCoupon;
};

const onSubmit = () => {
  showListArray.value = false;
  chosenCouponArrayResult.value = chosenCouponArray.value;
};

const onExchange = () => {
  showToast(t('exchange'));
  exchangedCoupons.value.push({
    ...coupon.value,
    id: getRandomId(),
  });
};
</script>

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
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </demo-block>

  <demo-block :title="t('checkboxUsage')">
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCouponArrayResult"
      @click="showListArray = true"
    />
    <van-popup
      v-model:show="showListArray"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCouponArray"
        :disabled-coupons="disabledCoupons"
        :show-close-button="false"
        @change="onChangeArray"
        @exchange="onExchange"
      >
        <template #list-button>
          <van-button
            round
            block
            type="primary"
            text="确定"
            style="height: 40px"
            @click="onSubmit"
          />
        </template>
      </van-coupon-list>
    </van-popup>
  </demo-block>
</template>
