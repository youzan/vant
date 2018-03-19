<template>
  <transition name="van-actionsheet-float">
    <div class="van-actionsheet" :class="{ 'van-actionsheet--withtitle': title }" v-show="value">
      <div class="van-actionsheet__header van-hairline--top-bottom" v-if="title">
        <div v-text="title" />
        <icon name="close" @click.stop="$emit('input', false)" />
      </div>
      <ul v-if="!title" class="van-actionsheet__list van-hairline--bottom">
        <li
          v-for="(item, index) in actions"
          :key="index"
          class="van-actionsheet__item van-hairline--top"
          :class="[item.className, { 'van-actionsheet__item--loading': item.loading }]"
          @click.stop="onClickItem(item)"
        >
          <template v-if="!item.loading">
            <span class="van-actionsheet__name">{{ item.name }}</span>
            <span class="van-actionsheet__subname" v-if="item.subname">{{ item.subname }}</span>
          </template>
          <loading v-else class="van-actionsheet__loading" size="20px" />
        </li>
      </ul>
      <div
        v-if="cancelText"
        v-text="cancelText"
        class="van-actionsheet__item van-actionsheet__cancel van-hairline--top"
        @click.stop="$emit('input', false)"
      />
      <div v-else class="van-actionsheet__content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  name: 'actionsheet',

  mixins: [Popup],

  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: () => []
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClickItem(item) {
      if (typeof item.callback === 'function') {
        item.callback(item);
      }
    }
  }
});
</script>
