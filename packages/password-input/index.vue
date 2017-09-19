<template>
  <div class="van-password-input">
    <ul class="van-password-input__security van-hairline--surround" @touchstart.stop="$emit('focus')">
      <li v-for="visibility in points" class="van-hairline">
        <i :style="`visibility: ${visibility}`" />
      </li>
    </ul>
    <div 
      v-if="errorInfo || info" 
      v-text="errorInfo || info" 
      :class="errorInfo ? 'van-password-input__error-info' : 'van-password-input__info'"
    />
</div>
</template>

<script>
export default {
  name: 'van-password-input',

  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },

  computed: {
    points() {
      const arr = [];
      for (let i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }
      return arr;
    }
  }
};
</script>
