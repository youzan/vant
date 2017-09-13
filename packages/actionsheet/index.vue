<template>
  <transition name="van-actionsheet-float">
    <div :class="['van-actionsheet', { 'van-actionsheet--withtitle': title }]" v-show="value">
      <div class="van-actionsheet__header van-hairline--top-bottom" v-if="title">
        <div v-text="title" />
        <van-icon name="close" @click.stop="$emit('input', false)" />
      </div>
      <ul v-if="!title" class="van-actionsheet__list">
        <li
          v-for="(item, index) in actions"
          :key="index"
          :class="['van-actionsheet__item', 'van-hairline--top', item.className, { 'van-actionsheet__item--loading': item.loading }]"
          @click.stop="onClickItem(item)">
          <template v-if="!item.loading">
            <span class="van-actionsheet__name">{{ item.name }}</span>
            <span class="van-actionsheet__subname" v-if="item.subname">{{ item.subname }}</span>
          </template>
          <van-loading v-else class="van-actionsheet__loading" type="circle" color="black" />
        </li>
      </ul>
      <div class="van-actionsheet__item van-actionsheet__cancel van-hairline--top" @click.stop="$emit('input', false)" v-if="cancelText">{{ cancelText }}</div>
      <div class="van-actionsheet__content" v-else>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from '../mixins/popup';
import Icon from '../icon';
import Loading from '../loading';

export default {
  name: 'van-actionsheet',

  mixins: [Popup],

  components: {
    [Icon.name]: Icon,
    [Loading.name]: Loading
  },

  props: {
    value: Boolean,
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

  mounted() {
    this.value && this.open();
  },

  methods: {
    onClickItem(item) {
      if (typeof item.callback === 'function') {
        item.callback(item);
      }
    }
  }
};
</script>
