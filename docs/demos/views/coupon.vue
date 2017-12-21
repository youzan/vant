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
      chosenCoupon: -1
    };
  },

  computed: {
    coupons() {
      return [this.coupon, this.discountCoupon];
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
        origin_condition: 0,
        reason: '',
        value: 150,
        name: this.$t('coupon.name'),
        start_at: 1489104000,
        end_at: 1514592000
      }
    },

    discountCoupon() {
      return {
        ...this.coupon,
        id: 2,
        discount: 88,
        denominations: 0,
        origin_condition: 50,
        value: 12
      }
    },

    disabledCoupon() {
      return {
        ...this.coupon,
        id: 3,
        available: 0,
        reason: this.$t('coupon.reason')
      }
    },

    disabledDiscountCoupon() {
      return {
        ...this.discountCoupon,
        id: 4,
        available: 0,
        reason: this.$t('coupon.reason')
      }
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;      
      this.chosenCoupon = index;
    },
    onExchange(code) {
      Toast(this.$t('exchange'));
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
