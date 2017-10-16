<template>
  <div
    class="van-search"
    :class="{ 'van-search--show-action': showAction }"
    :style="{ 'background-color': background }">
    <div class="van-search__input-wrap" v-clickoutside="handleClickoutside">
      <van-icon name="search"></van-icon>
      <input
        type="search"
        class="van-search__input"
        v-refocus="focusStatus"
        :value="value"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @keypress.enter.prevent="handleSearch">
      <van-icon name="clear" @click="handleClean" v-show="isFocus"></van-icon>
    </div>
    <div class="van-search__action" v-if="showAction">
      <slot name="action">
        <div class="van-search__action-text" @click="handleBack">取消</div>
      </slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon';
import Clickoutside from '../utils/clickoutside';

export default {
  name: 'van-search',

  components: {
    [Icon.name]: Icon
  },

  props: {
    placeholder: String,
    value: String,
    showAction: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },

  data() {
    return {
      focusStatus: false,
      isFocus: false
    };
  },

  directives: {
    Clickoutside,
    refocus: {
      update: function(el, state) {
        if (state.value) {
          el.focus();
        }
      }
    }
  },

  methods: {
    /**
     * 进入input焦点，出现close和取消
     */
    handleFocus() {
      this.isFocus = true;
    },

    handleInput(event) {
      this.$emit('input', event.target.value);
    },

    /**
     * 点击close后清空value后，再聚焦input框
     */
    handleClean() {
      this.$emit('input', '');
      this.focusStatus = true;

      // 保证多次点击 clean 后，仍能触发 refocus
      this.$nextTick(() => {
        this.focusStatus = false;
      });
    },

    /**
     * 点击取消后，清空所有回复最初状态
     */
    handleBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    },

    /**
     * input输入回车后，发送回调
     */
    handleSearch(e) {
      e.preventDefault();
      this.$emit('search');
      return false;
    },

    handleClickoutside() {
      this.isFocus = false;
      this.focusStatus = false;
    }
  }
};
</script>
