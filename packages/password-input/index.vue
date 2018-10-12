<template>
  <div :class="b()">
    <ul :class="b('security')" class="van-hairline--surround" @touchstart.stop="$emit('focus')">
      <li v-for="visibility in points" class="van-hairline">
        <i :style="`visibility: ${visibility}`" v-if="isInt"/>
        <span class="int" v-else>{{ visibility }}</span>
      </li>
    </ul>
    <div
      v-if="errorInfo || info"
      v-text="errorInfo || info"
      :class="b(errorInfo ? 'error-info' : 'info')"
    />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'password-input',

  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    isInt: {
      type: Boolean,
      default: false
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
        if (this.isInt) {
           arr[i] = this.value[i] || '';
        } else {
          arr[i] = this.value[i] ? 'visible' : 'hidden';
        }
        
      }
      return arr;
    }
  }
});
</script>
