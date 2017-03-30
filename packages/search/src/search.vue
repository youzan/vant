<template>
  <div class="zan-search" :class="{ 'zan-search--focus' : isFocus }">
    <div class="zan-search__input-wrap">
      <zan-icon name="search"></zan-icon>
      <input type="text" :placeholder="placeholder" v-model="value" v-refocus="focusStatus" @focus="handleFocus" @keyup.enter="handleSearch">
      <zan-icon name="clear" @click="handleClean"></zan-icon>
    </div>
    <div class="zan-search__cancel" :class="{ 'zan-search__cancel--focus' : isFocus }" @click="handleBack">取消</div>
  </div>
</template>

<script>
  import ZanIcon from 'packages/icon';

  export default {
    name: 'zan-search',
    components: {
      ZanIcon
    },
    props: {
      placeholder: {
        type: String
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
      refocus: {
        update: function(el, state) {
          if (state.value) { el.focus(); }
        }
      }
    },
    methods: {
      handleFocus() {
        // 进入input焦点，出现close和取消
        this.isFocus = true;
      },
      handleClean() {
        // 点击close后清空vlaue后，再聚焦input框
        this.value = '';
        this.focusStatus = true;
      },
      handleBack() {
        // 点击取消后，清空所有回复最初状态
        this.value = '';
        this.focusStatus = false;
        this.isFocus = false;
        this.$emit('cancel');
      },
      handleSearch() {
        // input输入回车后，发送回调
        this.$emit('search', this.value);
      }
    }
  };
</script>
