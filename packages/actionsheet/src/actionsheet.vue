<template>
  <transition name="actionsheet-float">
    <div class="zan-actionsheet" :class="[ title ? 'zan-actionsheet--withtitle' : '' ]" v-show="currentValue">
      <div class="zan-actionsheet__header" v-if="title">
        <h3 v-text="title"></h3>
        <zan-icon name="close" @click.stop="currentValue = false"></zan-icon>
      </div>
      <template v-if="!title">
        <ul class="zan-actionsheet__list">
          <li
            v-for="item in actions"
            class="zan-actionsheet__item"
            :class="[item.className, item.loading ? 'zan-actionsheet__item--loading' : '']"
            @click.stop="handleItemClick(item)">
            <template v-if="!item.loading">
              <span class="zan-actionsheet__name">{{ item.name }}</span>
              <span class="zan-actionsheet__subname" v-if="item.subname">{{ item.subname }}</span>
            </template>
            <template v-else>
              <zan-loading class="zan-actionsheet__loading" type="circle" color="black"></zan-loading>
            </template>
          </li>
        </ul>
        <a class="zan-actionsheet__button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
      </template>
      <template v-else>
        <div class="zan-actionsheet__content">
          <slot></slot>
        </div>
      </template>
    </div>
  </transition>
</template>

<script>
import Popup from 'src/mixins/popup';
import ZanLoading from 'packages/loading';
import ZanIcon from 'packages/icon';

export default {
  name: 'zan-actionsheet',

  mixins: [Popup],

  components: {
    ZanLoading,
    ZanIcon
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
