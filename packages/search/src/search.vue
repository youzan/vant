<template>
  <div class="z-search" :class="{ 'is-focus' : isFocus }">
    <div class="z-search__input-wrap">
      <input type="text" :placeholder="placeholder" v-model="value" v-refocus="focusStatus"  @focus="handleFocus">
      <span class="zui-icon zui-icon-close" @click="handleClean"></span>
    </div>
    <div class="z-search__cancel" :class="{ 'is-focus' : isFocus }" @click="handleBack">取消</div>
  </div>
</template>

<script>
  export default {
    name: 'z-search',
    props: {
      placeholder: String
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
        this.isFocus = true;
      },
      handleClean() {
        this.value = '';
        this.focusStatus = true;
      },
      handleBack() {
        this.value = '';
        this.focusStatus = false;
        this.isFocus = false;
      }
    }
  };
</script>
