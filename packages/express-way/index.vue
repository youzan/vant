<template>
  <van-cell class="van-express-way">
    <van-actionsheet v-if="computedEditable" v-model="showActionsheet" :title="actionsheetTitle" >
      <van-cell-group>
        <van-express-way-option
          v-for="(item, index) in computedList"
          :key="item.express_type"
          :data="item"
          :currentExpressWay="value"
          @change="onSelectExpressWay(item, index)"
        />
      </van-cell-group>
    </van-actionsheet>
    <van-cell :title="cellTitle" :isLink="computedEditable" @click="showActionsheet = computedEditable">
      <p class="van-express-way__fee">{{ currentOption.postage }}</p>
      <p class="van-express-way__type">{{ currentOption.postage_title }}</p>
    </van-cell>
  </van-cell>
</template>

<script>
import Option from './Option.vue';
import Actionsheet from '../actionsheet';
import Cell from '../cell';
import CellGroup from '../cell-group';

export default {
  name: 'van-express-way',

  components: {
    [Option.name]: Option,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Actionsheet.name]: Actionsheet
  },

  props: {
    value: {
      type: Number,
      required: true
    },
    expressList: {
      type: Array,
      required: true
    },
    cellTitle: {
      type: String,
      default: '配送方式'
    },
    actionsheetTitle: {
      type: String,
      default: '配送方式'
    },
    editable: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      showActionsheet: false
    };
  },

  computed: {
    computedList() {
      return this.expressList.map(item => ({
        ...item,
        postage: this.calcPostage(item.postage)
      }));
    },

    computedEditable() {
      return this.expressList && this.expressList.length >= 2 && this.editable;
    },

    currentOption() {
      for (let i = 0; i < this.computedList.length; i++) {
        if (this.computedList[i].express_type === this.value) {
          return this.computedList[i];
        }
      }
      return {};
    }
  },

  methods: {
    onSelectExpressWay(item, index) {
      this.showActionsheet = false;
      this.$emit('input', item.express_type);
      this.$emit('change', item, index);
    },

    calcPostage(postage) {
      return postage === 0 ? '免运费' : '¥' + (postage / 100).toFixed(2);
    }
  }
};
</script>
