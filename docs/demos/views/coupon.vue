<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-coupon-cell
        :coupons="coupons"
        :chosenCoupon="chosenCoupon"
        @click="showList = true"
      />

      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosenCoupon="chosenCoupon"
          :disabledCoupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  origin_condition: 0,
  reason: '',
  value: 150,
  condition: '下单立减 1.50 元',
  name: '新手专用优惠券',
  start_at: 1489104000,
  end_at: 1514592000
};

const discountCoupon = {
  ...coupon,
  discount: 88,
  denominations: 0,
  origin_condition: 50,
  value: 12,
  condition: '下单即享 8.8 折'
};

const disabledCoupon = {
  ...coupon,
  avaliable: 0,
  reason: '未满足使用门槛'
};

const disabledDiscountCoupon = {
  ...discountCoupon,
  avaliable: 0,
  reason: '未满足使用门槛'
};

export default {
  i18n: {
    'zh-CN': {

    },
    'en-US': {

    }
  },

  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon, discountCoupon],
      disabledCoupons: [disabledCoupon, disabledDiscountCoupon]
    };
  },

  methods: {
    onChange(index) {
      this.showList = false;      
      this.chosenCoupon = index;
    },
    onExchange(code) {
      Toast('兑换成功');
      this.coupons.push(coupon);
    }
  }
};
</script>

<style lang="postcss">
.demo-coupon {
  .van-popup {
    height: 100%;
  }
}
</style>
