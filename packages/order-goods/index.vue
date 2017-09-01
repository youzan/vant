<template>
  <van-cell-group class="van-order-goods">
    <van-order-goods-header
      :title="shopName"
      :link="shopLink"
      :icon="headerIcon"
      :badge="headerBadge"
    />
    <slot name="top"></slot>
    <van-order-goods-empty
      v-if="isEmpty"
      :icon="emptyIcon"
      :message="emptyMessage"
      :button-text="emptyButtonText"
      @clickEmptyButton="$emit('clickEmptyButton')"
    />
    <div class="van-order-goods-list">
      <van-order-goods-card
        v-for="item in itemList"
        :data="item"
        :express-way="expressWay"
        :key="item.title + item.img_url"
      />
    </div>
    <slot></slot>
    <template v-if="!isEmpty">
      <van-order-goods-message v-if="showMessage" :message="message" :editable="messageEditable" @change="onMessageChange" />
      <van-order-goods-price v-if="showTotalPrice" :price="price" :points="points" />
    </template>
    <slot name="bottom"></slot>
  </van-cell-group>
</template>

<script>
import Header from './Header';
import Empty from './Empty';
import Message from './Message';
import Price from './Price';
import Card from './Card';
import CellGroup from '../cell-group';

export default {
  name: 'van-order-goods',

  components: {
    [Empty.name]: Empty,
    [Header.name]: Header,
    [Message.name]: Message,
    [Price.name]: Price,
    [Card.name]: Card,
    [CellGroup.name]: CellGroup
  },

  model: {
    prop: 'message'
  },

  props: {
    shopName: String,
    shopLink: String,
    message: String,
    price: Number,
    points: Number,
    expressWay: String,
    headerBadge: String,
    headerIcon: {
      type: String,
      default: 'shop'
    },
    emptyIcon: {
      type: String,
      default: '//b.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png'
    },
    emptyMessage: {
      type: String,
      default: '当前没有可购买的商品，请重新选择'
    },
    emptyButtonText: {
      type: String,
      default: '返回重新选择'
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    showTotalPrice: {
      type: Boolean,
      default: true
    },
    messageEditable: {
      type: Boolean,
      default: true
    },
    itemList: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  computed: {
    isEmpty() {
      return this.itemList.length === 0;
    }
  },

  methods: {
    onMessageChange(message) {
      this.$emit('input', message);
    }
  }
};
</script>
