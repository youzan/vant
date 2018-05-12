<template>
  <transition name="van-fade">
    <div v-show="value" :class="b([displayStyle, position])">
      <!-- text only -->
      <div v-if="displayStyle === 'text'">{{ message }}</div>
      <div v-if="displayStyle === 'html'" v-html="message" />

      <!-- with icon -->
      <template v-if="displayStyle === 'default'">
        <loading v-if="type === 'loading'" color="white" :type="loadingType" />
        <icon v-else :class="b('icon')" :name="type" />
        <div v-if="hasMessage" :class="b('text')">{{ message }}</div>
      </template>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

const STYLE_LIST = ['success', 'fail', 'loading'];

export default create({
  name: 'toast',

  mixins: [Popup],

  props: {
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    displayStyle() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    },

    hasMessage() {
      return this.message || this.message === 0;
    }
  }
});
</script>
