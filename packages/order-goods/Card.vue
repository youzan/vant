<template>
  <div class="van-order-goods-card van-hairline">
    <van-card>
      <div slot="thumb">
        <img :src="data.img_url" />
        <span v-if="data.is_present" class="van-order-goods-card__present"></span>
      </div>
      <div class="van-card__row" slot="title">
        <h4 class="van-card__title">{{ data.title }}</h4>
        <span class="van-card__price">{{ price }}</span>
      </div>
      <template slot="desc">
        <div class="van-card__row">
          <p class="van-card__desc">{{ desc }}</p>
          <span class="van-card__num">x {{ data.num }}</span>
        </div>
        <div class="van-card__row">
          <div class="van-order-goods-card__tags">
            <span v-if="data.is_presale" class="van-order-goods-card__tag-green">预售</span>
            <span v-if="data.is_period_buy" class="van-order-goods-card__tag-red">周期购</span>
          </div>
          <van-button
            class="van-order-goods-card__message-button"
            v-if="hasMessage"
            @click="onClickMessageButton"
          >
            查看留言
          </van-button>
        </div>
      </template>
    </van-card>
    <van-cell class="van-order-goods-card__delivery van-hairline--top" v-if="data.show_delivery_time" title="发货时间" :value="data.delivery_time" />
    <van-popup v-if="hasMessage" class="van-order-goods-card__message" v-model="showMessage" position="right">
      <h2>备注信息</h2>
      <ul>
        <li v-for="(value, key) in data.message" class="van-hairline">
          <label>{{ key }}</label>
          <a v-if="isURL(value)" :href="value">
            <img :src="value" />
          </a>
          <p v-else>{{ value }}</p>
        </li>
      </ul>
      <div class="van-order-goods-card__button">
        <van-button size="large" @click="showMessage = false">查看订单详情</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Card from '../card';
import Cell from '../cell';
import Button from '../button';
import Popup from '../popup';
import { getTotalPrice } from './utils';

export default {
  name: 'van-order-goods-card',

  components: {
    [Card.name]: Card,
    [Cell.name]: Cell,
    [Popup.name]: Popup,
    [Button.name]: Button
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      showMessage: false
    };
  },

  computed: {
    price() {
      return getTotalPrice(this.data.pay_price, this.data.points_price);
    },
    desc() {
      return this.data.sku ? this.data.sku.filter(item => item.v).map(item => item.v).join(', ') : '';
    },
    hasMessage() {
      return this.data.message && Object.keys(this.data.message).length;
    }
  },

  methods: {
    onClickMessageButton() {
      this.showMessage = true;
    },
    isURL(value) {
      return /^\s*http(s)*:\/\/.+/.test(value);
    }
  }
};
</script>
