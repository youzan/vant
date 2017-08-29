<template>
  <div
    class="van-search"
    v-clickoutside="handleClickoutside"
    :class="{ 'van-search--focus': isFocus, 'van-search--showcase': type === 'showcase' }">
    <div class="van-search__input-wrap">
      <van-icon name="search"></van-icon>
      <input
        type="text"
        :placeholder="placeholder"
        class="van-search__input"
        v-model="value"
        v-refocus="focusStatus"
        @focus="handleFocus"
        @keyup.enter="handleSearch">
      <van-icon name="clear" @click="handleClean" v-show="isFocus"></van-icon>
    </div>
    <div class="van-search__cancel" v-show="type !== 'showcase' && isFocus" @click="handleBack">取消</div>
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
    type: {
      type: String,
      default: 'normal'
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  data() {
    return {
      value: '',
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

    /**
     * 点击close后清空vlaue后，再聚焦input框
     */
    handleClean() {
      this.value = '';
      this.focusStatus = true;
    },

    /**
     * 点击取消后，清空所有回复最初状态
     */
    handleBack() {
      this.value = '';
      this.focusStatus = false;
      this.isFocus = false;
      this.$emit('cancel');
    },

    /**
     * input输入回车后，发送回调
     */
    handleSearch() {
      this.$emit('search', this.value);
    },

    handleClickoutside() {
      this.isFocus = false;
      this.focusStatus = false;
    }
  }
};
</script>
