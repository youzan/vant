<template>
  <van-cell class="van-order-goods-message" title="买家留言：">
    <textarea
      v-if="editable"
      :value="message"
      :class="{ 'van-order-goods-message-focused': textareaFocused }"
      placeholder="点击给商家留言"
      @focus="textareaFocused = true"
      @blur="textareaFocused = false"
      @input="onChange"
    />
    <p v-else>{{ message }}</p>
  </van-cell>
</template>

<script>
import Cell from '../cell';

export default {
  name: 'van-order-goods-message',

  components: {
    [Cell.name]: Cell
  },

  props: {
    message: String,
    editable: Boolean
  },

  data() {
    return {
      textareaFocused: false
    };
  },

  methods: {
    onChange(event) {
      this.$emit('change', event.target.value);
    }
  },

  created() {
    // 不可编辑的情况下，默认留言为"无"
    if (!this.editable && !this.message) {
      this.$emit('change', '无');
    }
  }
};
</script>
