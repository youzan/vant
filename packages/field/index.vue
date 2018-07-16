<template>
  <cell
    :icon="leftIcon"
    :title="label"
    :center="center"
    :border="border"
    :is-link="isLink"
    :required="required"
    :class="b({
      error,
      disabled: $attrs.disabled,
      [`label-${labelAlign}`]: labelAlign,
      'min-height': type === 'textarea' && !autosize
    })"
  >
    <slot name="label" slot="title" />
    <div :class="b('body')">
      <textarea
        v-if="type === 'textarea'"
        v-bind="$attrs"
        v-on="listeners"
        ref="input"
        :class="b('control', inputAlign)"
        :value="value"
        :readonly="readonly"
      />
      <input
        v-else
        v-bind="$attrs"
        v-on="listeners"
        ref="input"
        :class="b('control', inputAlign)"
        :type="type"
        :value="value"
        :readonly="readonly"
      >
      <icon
        v-if="showClear"
        name="clear"
        :class="b('clear')"
        @touchstart.prevent="$emit('input', '')"
      />
      <div v-if="$slots.icon || icon" :class="b('icon')" @click="onClickIcon">
        <slot name="icon">
          <icon :name="icon" />
        </slot>
      </div>
      <div v-if="$slots.button" :class="b('button')">
        <slot name="button" />
      </div>
    </div>
    <div
      v-if="errorMessage"
      v-text="errorMessage"
      :class="b('error-message')"
    />
  </cell>
</template>

<script>
import create from '../utils/create';
import { isObj } from '../utils';

export default create({
  name: 'field',

  inheritAttrs: false,

  props: {
    value: [String, Number],
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    readonly: Boolean,
    required: Boolean,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      focused: false
    };
  },

  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted() {
    this.$nextTick(this.adjustSize);
  },

  computed: {
    showClear() {
      return this.clearable && this.focused && this.value !== '' && this.isDef(this.value) && !this.readonly;
    },

    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      };
    }
  },

  methods: {
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },

    onInput(event) {
      this.$emit('input', event.target.value);
    },

    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);

      // hack for safari
      if (this.readonly) {
        this.blur();
      }
    },

    onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },

    onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick && this.onIconClick();
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = String(this.value).indexOf('.') === -1;
        const isValidKey = (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint) || keyCode === 45;
        if (!isValidKey) {
          event.preventDefault();
        }
      }

      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },

    adjustSize() {
      const { input } = this.$refs;
      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      let height = input.scrollHeight;
      if (isObj(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  }
});
</script>
