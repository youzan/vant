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
        reason: '优惠券不可用原因',
        description: '描述信息'
      },
      exchange: '兑换成功'
    },
    'en-US': {
      coupon: {
        name: 'Coupon name',
        reason: 'Coupon unavailable reason',
        description: 'Description'
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
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: this.$t('coupon.name'),
        description: this.$t('coupon.description'),
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
      };
    },

    discountCoupon() {
      return {
        ...this.coupon,
        id: 2,
        value: 12,
        valueDesc: '8.8',
        unitDesc: '折'
      };
    },

    disabledCoupon() {
      return {
        ...this.coupon,
        id: 3,
        reason: this.$t('coupon.reason')
      };
    },

    disabledDiscountCoupon() {
      return {
        ...this.discountCoupon,
        valueDesc: '1',
        unitDesc: '折',
        id: 4,
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
