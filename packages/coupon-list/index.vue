<template>
  <div class="van-coupon-list">
    <cell-group class="van-coupon-list__top" v-if="showExchangeBar">
      <field
        class="van-coupon-list__filed van-hairline--surround"
        v-model="exchangeCode"
        :placeholder="inputPlaceholder || $t('placeholder')"
        :maxlength="20"
      />
      <van-button
        size="small"
        type="danger"
        class="van-coupon-list__exchange"
        :disabled="exchangeButtonDisabled || !exchangeCode.length"
        @click="onClickExchangeButton"
      >
        {{ exchangeButtonText || $t('exchange') }}
      </van-button>
    </cell-group>
    <div class="van-coupon-list__list" :class="{ 'van-coupon-list--with-exchange': showExchangeBar }" ref="list">
      <coupon-item
        ref="card"
        v-for="(item, index) in coupons"
        :key="item.id || item.name"
        :data="item"
        :chosen="index === chosenCoupon"
        @click.native="onClickCoupon(index)"
      />
      <h3 v-if="disabledCoupons.length">{{ disabledListTitle || $t('disabled') }}</h3>
      <coupon-item
        disabled
        v-for="item in disabledCoupons"
        :key="item.id || item.name"
        :data="item"
      />
      <div class="van-coupon-list__empty" v-if="!coupons.length && !disabledCoupons.length">
        <img src="https://b.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png" >
        <p>{{ $t('empty') }}</p>
      </div>
    </div>
    <div
      v-show="showCloseButton"
      class="van-coupon-list__close van-hairline--top"
      @click="onClickNotUse"
    >
      {{ closeButtonText || $t('close') }}
    </div>
  </div>
</template>

<script>
import { create } from '../utils';
import Cell from '../cell';
import CellGroup from '../cell-group';
import CouponItem from './Item';
import Field from '../field';
import Popup from '../popup';
import VanButton from '../button';

export default create({
  name: 'van-coupon-list',

  components: {
    VanButton,
    Cell,
    CellGroup,
    Field,
    Popup,
    CouponItem
  },

  props: {
    closeButtonText: String,
    inputPlaceholder: String,
    disabledListTitle: String,
    exchangeButtonText: String,
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: () => []
    },
    disabledCoupons: {
      type: Array,
      default: () => []
    },
    exchangeButtonDisabled: {
      type: Boolean,
      default: false
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },

  data() {
    return {
      exchangeCode: ''
    };
  },

  mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },

  methods: {
    onClickNotUse() {
      this.$emit('change', -1);
    },
    onClickCoupon(index) {
      this.$emit('change', index);
    },
    onClickExchangeButton() {
      this.$emit('exchange', this.exchangeCode);
      this.exchangeCode = '';
    },
    // 滚动到特定优惠券的位置
    scrollToShowCoupon(index) {
      if (index === -1) {
        return;
      }

      this.$nextTick(() => {
        const { card, list } = this.$refs;

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    }
  }
});
</script>
