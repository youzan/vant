<template>
  <div :class="b()">
    <field
      v-if="showExchangeBar"
      v-model="currentCode"
      clearable
      :border="false"
      :class="b('field')"
      :placeholder="inputPlaceholder || $t('placeholder')"
      :maxlength="20"
    >
      <van-button
        slot="button"
        size="small"
        type="danger"
        :class="b('exchange')"
        :text="exchangeButtonText || $t('exchange')"
        :loading="exchangeButtonLoading"
        :disabled="buttonDisabled"
        @click="onClickExchangeButton"
      />
    </field>
    <tabs
      v-model="tab"
      :class="b('tab')"
      :line-width="120"
    >
      <tab :title="title">
        <div
          :class="b('list')"
          :style="listStyle"
        >
          <coupon-item
            ref="card"
            v-for="(item, index) in coupons"
            :key="item.id || item.name"
            :data="item"
            :currency="currency"
            :chosen="index === chosenCoupon"
            @click.native="$emit('change', index)"
          />
          <div
            v-if="!coupons.length"
            :class="b('empty')"
          >
            <img src="https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png">
            <p v-text="$t('empty')" />
          </div>
        </div>
      </tab>
      <tab :title="disabledTitle">
        <div
          :class="b('list')"
          :style="listStyle"
        >
          <coupon-item
            disabled
            v-for="item in disabledCoupons"
            :key="item.id || item.name"
            :data="item"
            :currency="currency"
          />
          <div
            v-if="!disabledCoupons.length"
            :class="b('empty')"
          >
            <img src="https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png">
            <p v-text="$t('empty')" />
          </div>
        </div>
      </tab>
    </tabs>
    <van-button
      v-show="showCloseButton"
      size="large"
      :class="b('close')"
      :text="closeButtonText || $t('close')"
      @click="$emit('change', -1)"
    />
  </div>
</template>

<script>
import create from '../utils/create';
import CouponItem from './Item';
import Field from '../field';
import VanButton from '../button';
import Tab from '../tab';
import Tabs from '../tabs';

export default create({
  name: 'coupon-list',

  components: {
    Tab,
    Tabs,
    Field,
    VanButton,
    CouponItem
  },

  model: {
    prop: 'code'
  },

  props: {
    code: String,
    coupons: Array,
    disabledCoupons: Array,
    closeButtonText: String,
    inputPlaceholder: String,
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
    },
    currency: {
      type: String,
      default: '¥'
    }
  },

  data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },

  computed: {
    buttonDisabled() {
      return (
        !this.exchangeButtonLoading &&
        (this.exchangeButtonDisabled || !this.currentCode ||
          this.currentCode.length < this.exchangeMinLength)
      );
    },

    title() {
      return `${this.$t('enable')} (${this.coupons.length})`;
    },

    disabledTitle() {
      return `${this.$t('disabled')} (${this.disabledCoupons.length})`;
    },

    listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
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

        /* istanbul ignore next */
        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    }
  }
});
</script>
