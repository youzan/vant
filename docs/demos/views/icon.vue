<template>
  <demo-section>
    <demo-block :title="$t('title')">
      <van-col span="8" v-for="icon in icons" :key="icon">
        <van-icon :name="icon"></van-icon>
        <span>{{ icon }}</span>
      </van-col>
    </demo-block>
  </demo-section>
</template>

<script>
const icons = [
  'close',
  'location',
  'clock',
  'gold-coin',
  'chat',
  'exchange',
  'upgrade',
  'edit',
  'contact',
  'passed',
  'points',
  'delete',
  'records',
  'logistics',
  'check',
  'checked',
  'gift',
  'like-o',
  'like',
  'qr',
  'qr-invalid',
  'shop',
  'photograph',
  'add',
  'add2',
  'add-o',
  'photo',
  'cart',
  'arrow',
  'search',
  'clear',
  'success',
  'fail',
  'wechat',
  'alipay',
  'password-view',
  'wap-nav',
  'password-not-view',
  'wap-home',
  'ecard-pay',
  'balance-pay',
  'peer-pay',
  'credit-pay',
  'debit-pay',
  'other-pay',
  'shopping-cart',
  'browsing-history',
  'goods-collect',
  'shop-collect',
  'receive-gift',
  'send-gift',
  'setting',
  'coupon',
  'free-postage',
  'discount',
  'birthday-privilege',
  'member-day-privilege',
  'balance-details',
  'cash-back-record',
  'points-mall',
  'exchange-record',
  'pending-payment',
  'pending-orders',
  'pending-deliver',
  'pending-evaluate',
  'cash-on-deliver',
  'gift-card-pay',
  'underway',
  'point-gift',
  'after-sale',
  'edit-data',
  'question',
  'description',
  'card',
  'gift-card',
  'coupon',
  'completed',
  'value-card',
  'certificate',
  'tosend',
  'sign',
  'home',
  'phone',
  'play',
  'pause',
  'stop',
  'hot',
  'new',
  'hot-sale',
  'new-arrival'
];

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表'
    },
    'en-US': {
      title: 'Icon List'
    }
  },

  data() {
    this.icons = icons;
    return {};
  }
}
</script>

<style lang="postcss">
.demo-icon {
  font-size: 0;

  .van-col {
    text-align: center;
    height: 100px;
    float: none;
    display: inline-block;
  }

  .van-icon {
    display: block;
    font-size: 32px;
    margin: 15px 0;
    color: rgba(69, 90, 100, .8);
  }

  span {
    font-size: 14px;
  }
}
</style>
