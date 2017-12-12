<template>
  <div
    class="van-search"
    :class="{ 'van-search--show-action': showAction }"
    :style="{ 'background-color': background }">
    <div class="van-search__input-wrap" v-clickoutside="onClickoutside">
      <icon name="search" />
      <input
        ref="input"
        type="search"
        class="van-search__input"
        v-bind="$attrs"
        v-refocus="focusStatus"
        :value="value"
        @input="onInput"
        @focus="onFocus"
        @keypress.enter.prevent="onSearch"
      >
      <icon name="clear" @click="onClean" v-show="isFocus" />
    </div>
    <div class="van-search__action" v-if="showAction">
      <slot name="action">
        <div class="van-search__action-text" @click="onBack">{{ $t('cancel') }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import { create } from '../utils';
import Clickoutside from '../utils/clickoutside';

export default create({
  name: 'van-search',

  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },

  data() {
    return {
      isFocus: false,
      focusStatus: false
    };
  },

  directives: {
    Clickoutside,
    refocus: {
      update: function(el, state) {
        if (state.value) {
          el.focus();
        }
      }
    }
  },

  methods: {
    onFocus() {
      this.isFocus = true;
    },

    onInput(event) {
      this.$emit('input', event.target.value);
    },

    // refocus after click close icon
    onClean() {
      this.$emit('input', '');
      this.focusStatus = true;

      // ensure refocus can work after click clean icon
      this.$nextTick(() => {
        this.focusStatus = false;
      });
    },

    onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    },

    onSearch(e) {
      e.preventDefault();
      this.$emit('search', this.value);
      return false;
    },

    onClickoutside() {
      this.isFocus = false;
      this.focusStatus = false;
    }
  }
});
</script>
