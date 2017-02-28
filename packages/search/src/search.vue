<template>
  <div class="z-search">
    <div class="z-search__input-wrap"  :class="{ 'is-focus' : isFocus }">
      <input type="text" :value="value" :placeholder="placeholder" @focus="handleFocus" @blur="handleBlur">
      <span class="zui-icon zui-icon-close"></span>
    </div>
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
        isFocus: false
      };
    },
    methods: {
      handleFocus() {
        this.isFocus = true;
      },
      handleBlur() {
        this.isFocus = false;
      }
    }
  };
</script>
