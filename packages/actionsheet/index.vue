<template>
  <transition name="van-slide-bottom">
    <div v-show="value" :class="b({ 'withtitle': title })">
      <div v-if="title" class="van-hairline--top-bottom" :class="b('header')">
        <div v-text="title" />
        <icon name="close" @click="onCancel" />
      </div>
      <ul v-else class="van-hairline--bottom">
        <li
          v-for="item in actions"
          :class="[b('item'), item.className, 'van-hairline--top']"
          @click.stop="onClickItem(item)"
        >
          <template v-if="!item.loading">
            <span :class="b('name')">{{ item.name }}</span>
            <span :class="b('subname')" v-if="item.subname">{{ item.subname }}</span>
          </template>
          <loading v-else :class="b('loading')" size="20px" />
        </li>
      </ul>
      <div
        v-if="cancelText"
        v-text="cancelText"
        :class="[b('cancel'), 'van-hairline--top']"
        @click="onCancel"
      />
      <div v-else :class="b('content')">
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
    },

    onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
});
</script>
