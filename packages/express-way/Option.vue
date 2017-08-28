<template>
  <van-cell class="van-express-way-option" @click="$emit('change')">
    <van-radio :name="data.express_type" :value="currentExpressWay" />
    <div class="van-express-way-option__content">
      <h3 class="van-express-way-option__title">
        <span>{{ data.postage_title }}</span>
        <span>{{ data.postage }}</span>
      </h3>
      <p>{{ data.postage_desc }}</p>
      <div class="van-express-way-option__warn" v-if="data.postage_warn_desc">{{ data.postage_warn_desc }}</div>
    </div>
  </van-cell>
</template>

<script>
import Cell from '../cell';
import Radio from '../radio';

export default {
  name: 'van-express-way-option',

  components: {
    [Cell.name]: Cell,
    [Radio.name]: Radio
  },

  props: {
    currentExpressWay: {
      type: Number,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
