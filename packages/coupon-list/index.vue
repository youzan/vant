<template>
  <div class="van-coupon-list">
    <van-cell-group class="van-coupon-list__top">
      <van-field v-model="exchangeCode" :placeholder="inputPlaceholder" :maxlength="20" />
      <van-button size="small" type="danger" class="van-coupon-list__exchange" :disabled="exchangeButtonDisabled || !exchangeCode.length" @click="onClickExchangeButton">{{ exchangeButtonText }}</van-button>
    </van-cell-group>
    <div class="van-coupon-list__list" ref="list">
      <van-coupon-item
        ref="card"
        v-for="(item, index) in coupons"
        :key="item.id || item.name"
        :data="item"
        :chosen="index === chosenCoupon"
        @click.native="onClickCoupon(index)"
      />
      <h3 v-if="disabledCoupons.length">{{ disabledListTitle }}</h3>
      <van-coupon-item
        disabled
        v-for="item in disabledCoupons"
        :key="item.id || item.name"
        :data="item"
      />
    </div>
    <div class="van-coupon-list__close van-hairline--top" @click="onClickNotUse">{{ closeButtonText }}</div>
  </div>
</template>

<script>
import Cell from '../cell';
import CellGroup from '../cell-group';
import Item from './Item';
import Field from '../field';
import Popup from '../popup';
import Button from '../button';

export default {
  name: 'van-coupon-list',

  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Item.name]: Item
  },

  props: {
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
    exchangeButtonText: {
      type: String,
      default: '兑换'
    },
    exchangeButtonDisabled: {
      type: Boolean,
      default: false
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    closeButtonText: {
      type: String,
      default: '不使用优惠'
    },
    disabledListTitle: {
      type: String,
      default: '不可用优惠'
    },
    inputPlaceholder: {
      type: String,
      default: '请输入优惠码'
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
};
</script>
