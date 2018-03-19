<template>
  <div
    class="van-search"
    :class="{ 'van-search--show-action': showAction }"
    :style="{ 'background-color': background }">
    <div class="van-search__input-wrap" v-clickoutside="onClickoutside">
      <icon name="search" />
      <input
        v-bind="$attrs"
        v-on="listeners"
        v-refocus="focusStatus"
        type="search"
        class="van-search__input"
        :value="value"
      >
      <icon name="clear" v-show="isFocus && value" @click="onClean" />
    </div>
    <div class="van-search__action" v-if="showAction">
      <slot name="action">
        <div class="van-search__action-text" @click="onBack">{{ $t('cancel') }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Clickoutside from '../utils/clickoutside';

export default create({
  name: 'search',

  inheritAttrs: false,

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

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        focus: this.onFocus,
        input: this.onInput,
        keypress: this.onKeypress
      };
    }
  },

  methods: {
    onFocus() {
      this.isFocus = true;
      this.$emit('focus');
    },

    onInput(event) {
      this.$emit('input', event.target.value);
    },

    onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
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

    onClickoutside() {
      this.isFocus = false;
      this.focusStatus = false;
    }
  }
});
</script>
