<template>
  <div>
    <div class="van-invalid-goods" @click="showDetail = true">
      <h3 class="van-invalid-goods__title">{{ title }}</h3>
      <van-cell-group class="van-invalid-goods__container">
        <div class="van-invalid-goods__gallery">
          <div v-for="item in formattedGoods" :key="item.sku_id" class="van-invalid-goods__thumb">
            <img :src="item.img_url" />
          </div>
        </div>
        <div class="van-invalid-goods__count">
          <span>共{{ formattedGoods.length }}件</span>
          <van-icon name="arrow" />
        </div>
      </van-cell-group>
    </div>
    <van-actionsheet v-model="showDetail" :title="actionsheetTitle">
      <div class="van-invalid-goods__list">
        <van-invalid-goods-card  v-for="item in formattedGoods" :key="item.sku_id" :item="item" />
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
import Card from './Card';
import Icon from '../icon';
import CellGroup from '../cell-group';
import Actionsheet from '../actionsheet';

export default {
  name: 'van-invalid-goods',

  components: {
    [Card.name]: Card,
    [Icon.name]: Icon,
    [CellGroup.name]: CellGroup,
    [Actionsheet.name]: Actionsheet
  },

  props: {
    goods: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: '以下商品无法一起购买，点击查看原因'
    },
    actionsheetTitle: {
      type: String,
      default: '以下商品无法一起下单'
    }
  },

  data() {
    return {
      showDetail: false
    };
  },

  methods: {
    getSkuStr(arr) {
      return arr.filter(item => item.v).map(item => item.v).join(', ');
    }
  },

  computed: {
    formattedGoods() {
      return this.goods.map(item => ({
        ...item,
        price: parseFloat(item.price / 100, 10).toFixed(2),
        sku: this.getSkuStr(item.sku)
      }));
    }
  }
};
</script>
