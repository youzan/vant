<template>
  <cell
    :icon="leftIcon"
    :title="label"
    :center="center"
    :border="border"
    :required="required"
    :class="b({
      error,
      disabled: $attrs.disabled,
      'has-icon': showIcon,
      'min-height': type === 'textarea' && !autosize
    })"
  >
    <slot name="label" slot="title" />
    <textarea
      v-if="type === 'textarea'"
      v-bind="$attrs"
      v-on="listeners"
      ref="input"
      :class="b('control')"
      :value="value"
    />
    <input
      v-else
      v-bind="$attrs"
      v-on="listeners"
      ref="input"
      :class="b('control')"
      :type="type"
      :value="value"
    >
    <div
      v-if="errorMessage"
      v-text="errorMessage"
      :class="b('error-message')"
    />
    <div
      v-if="showIcon"
      :class="b('icon')"
      @touchstart.prevent="onClickIcon"
    >
      <slot name="icon">
        <icon :name="icon" />
      </slot>
    </div>
    <div v-if="$slots.button" :class="b('button')" slot="extra">
      <slot name="button" />
    </div>
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
    leftIcon: String,
    required: Boolean,
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

  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted() {
    this.$nextTick(this.adjustSize);
  },

  computed: {
    showIcon() {
      return this.$slots.icon || (this.icon && this.value !== '' && this.isDef(this.value));
    },

    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress
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
