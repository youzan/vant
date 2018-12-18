<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      <van-popup
        v-model="showList"
        position="bottom"
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
  </demo-section>
</template>

<script>
/* eslint-disable camelcase */
export default {
  i18n: {
    'zh-CN': {
      coupon: {
        name: '优惠券名称',
        reason: '优惠券不可用原因'
      },
      exchange: '兑换成功'
    },
    'en-US': {
      coupon: {
        name: 'Coupon name',
        reason: 'Coupon unavailable reason'
      },
      exchange: 'Success'
    }
  },

  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      exchangedCoupons: []
    };
  },

  computed: {
    coupons() {
      return [this.coupon, this.discountCoupon, ...this.exchangedCoupons];
    },

    disabledCoupons() {
      return [this.disabledCoupon, this.disabledDiscountCoupon];
    },

    coupon() {
      return {
        id: 1,
        available: 1,
        discount: 0,
        denominations: 150,
        originCondition: 0,
        reason: '',
        value: 150,
        name: this.$t('coupon.name'),
        startAt: 1489104000,
        endAt: 1514592000
      };
    },

    discountCoupon() {
      return {
        ...this.coupon,
        id: 2,
        discount: 88,
        denominations: 0,
        originCondition: 50,
        value: 12
      };
    },

    disabledCoupon() {
      return {
        ...this.coupon,
        id: 3,
        available: 0,
        reason: this.$t('coupon.reason')
      };
    },

    disabledDiscountCoupon() {
      return {
        ...this.discountCoupon,
        discount: 10,
        id: 4,
        available: 0,
        reason: this.$t('coupon.reason')
      };
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.$toast(this.$t('exchange'));
      this.exchangedCoupons.push({
        ...this.coupon,
        id: this.randomId()
      });
    },
    randomId(max = 999999) {
      return Math.floor(Math.random() * max) + 1;
    }
  }
};
</script>

<style lang="less">
.demo-coupon-list {
  .van-popup {
    height: 100%;
  }
}
</style>
