<template>
  <div class="zan-search" :class="{ 'is-focus' : isFocus }">
    <div class="zan-search__input-wrap">
      <input type="text" :placeholder="placeholder" v-model="value" v-refocus="focusStatus"  @focus="handleFocus" @keyup.enter="handleSearch">
      <span class="zui-icon zui-icon-close" @click="handleClean"></span>
    </div>
    <div class="zan-search__cancel" :class="{ 'is-focus' : isFocus }" @click="handleBack">取消</div>
  </div>
</template>

<script>
  export default {
    name: 'zan-search',
    props: {
      placeholder: {
        type: String,
        required: true
      },
      onSearch: {
        type: Function,
        default: function() {}
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
      },
      handleSearch(ev) {
        // input输入回车后，发送回调
        this.onSearch(ev.target.value)
      }
    }
  };
</script>
