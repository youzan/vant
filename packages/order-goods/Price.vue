<template>
  <van-cell
    class="van-order-goods-price"
    title="合计"
    :value="totalPrice"
  />
</template>

<script>
import Cell from '../cell';
import { getTotalPrice } from './utils';

export default {
  name: 'van-order-goods-price',

  components: {
    [Cell.name]: Cell
  },

  props: {
    price: Number,
    points: Number,
    isPoints: Boolean
  },

  computed: {
    totalPrice() {
      return getTotalPrice(this.price, this.points, this.isPoints);
    }
  }
};
</script>
