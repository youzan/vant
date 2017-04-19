<template>
  <transition name="actionsheet-float">
    <div class="van-actionsheet" :class="[ title ? 'van-actionsheet--withtitle' : '' ]" v-show="currentValue">
      <div class="van-actionsheet__header" v-if="title">
        <h3 v-text="title"></h3>
        <van-icon name="close" @click.stop="currentValue = false"></van-icon>
      </div>
      <template v-if="!title">
        <ul class="van-actionsheet__list">
          <li
            v-for="item in actions"
            class="van-actionsheet__item"
            :class="[item.className, item.loading ? 'van-actionsheet__item--loading' : '']"
            @click.stop="handleItemClick(item)">
            <template v-if="!item.loading">
              <span class="van-actionsheet__name">{{ item.name }}</span>
              <span class="van-actionsheet__subname" v-if="item.subname">{{ item.subname }}</span>
            </template>
            <template v-else>
              <van-loading class="van-actionsheet__loading" type="circle" color="black"></van-loading>
            </template>
          </li>
        </ul>
        <a class="van-actionsheet__button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
      </template>
      <template v-else>
        <div class="van-actionsheet__content">
          <slot></slot>
        </div>
      </template>
    </div>
  </transition>
</template>

<script>
import Popup from 'src/mixins/popup';
import VanLoading from 'packages/loading';
import VanIcon from 'packages/icon';

export default {
  name: 'van-actionsheet',

  mixins: [Popup],

  components: {
    VanLoading,
    VanIcon
  },

  props: {
    value: {},
    actions: {
      type: Array,
      default: () => []
    },
    title: String,
    cancelText: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      currentValue: this.value
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
      if (item.callback && typeof item.callback === 'function') {
        item.callback(item);
      }
    }
  }
};
</script>
