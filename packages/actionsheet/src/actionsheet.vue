<template>
  <transition name="actionsheet-float">
    <div class="zan-actionsheet" v-show="currentValue">
      <div class="zan-actionsheet-header" v-if="title">
        <h3 v-text="title"></h3>
      </div>
      <slot>
        <ul class="zan-actionsheet-list">
          <li v-for="item in actions" class="zan-actionsheet-item" :class="item.className" @click.stop="handleItemClick(item)">{{ item.name }}</li>
        </ul>
        <a class="zan-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
      </slot>
    </div>
  </transition>
</template>

<script>
import Popup from 'src/mixins/popup';

export default {
  name: 'zan-actionsheet',

  mixins: [Popup],

  props: {
    actions: {
      type: Array,
      default: () => []
    },
    title: String,
    cancelText: String,
    overlay: {
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      currentValue: false
    };
  },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  mounted() {
    if (this.value) {
      this.currentValue = true;
      this.open();
    }
  },

  methods: {
    handleItemClick(item) {

    }
  }
};
</script>
