<template>
  <div :class="b()">
    <cell-group v-if="showExchangeBar" :class="b('top')">
      <field
        :class="b('field')"
        class="van-hairline--surround"
        v-model="currentCode"
        :placeholder="inputPlaceholder || $t('placeholder')"
        :maxlength="20"
      />
      <van-button
        size="small"
        type="danger"
        :class="b('exchange')"
        :text="exchangeButtonText || $t('exchange')"
        :loading="exchangeButtonLoading"
        :disabled="buttonDisabled"
        @click="onClickExchangeButton"
      />
    </cell-group>
    <div :class="b('list', { 'with-exchange': showExchangeBar })" ref="list">
      <coupon-item
        ref="card"
        v-for="(item, index) in coupons"
        :key="item.id || item.name"
        :data="item"
        :chosen="index === chosenCoupon"
        @click.native="$emit('change', index)"
      />
      <h3 v-if="disabledCoupons.length">{{ disabledListTitle || $t('disabled') }}</h3>
      <coupon-item
        disabled
        v-for="item in disabledCoupons"
        :key="item.id || item.name"
        :data="item"
      />
      <div v-if="!coupons.length && !disabledCoupons.length" :class="b('empty')">
        <img src="https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png" >
        <p>{{ $t('empty') }}</p>
      </div>
    </div>
    <div
      v-show="showCloseButton"
      v-text="closeButtonText || $t('close')"
      :class="b('close')"
      class="van-hairline--top"
      @click="$emit('change', -1)"
    />
  </div>
</template>

<script>
import create from '../utils/create';
import CouponItem from './Item';
import Field from '../field';
import VanButton from '../button';

export default create({
  name: 'coupon-list',

  components: {
    VanButton,
    Field,
    CouponItem
  },

  model: {
    prop: 'code'
  },

  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    disabledListTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
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

  data() {
    return {
      currentCode: this.code || ''
    };
  },

  computed: {
    buttonDisabled() {
      return (
        !this.exchangeButtonLoading &&
        (this.exchangeButtonDisabled ||
          this.currentCode.length < this.exchangeMinLength)
      );
    }
  },

  watch: {
    code(code) {
      this.currentCode = code;
    },

    currentCode(code) {
      this.$emit('input', code);
    },

    displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },

  mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },

  methods: {
    onClickExchangeButton() {
      this.$emit('exchange', this.currentCode);

      // auto clear currentCode when not use v-model
      if (!this.code) {
        this.currentCode = '';
      }
    },

    // scroll to show specific coupon
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
