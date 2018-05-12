<template>
  <cell
    :title="label"
    :center="center"
    :border="border"
    :required="required"
    :class="b({
      error,
      disabled: $attrs.disabled,
      'has-icon': hasIcon,
      'min-height': type === 'textarea' && !autosize
    })"
  >
    <slot name="label" slot="title" />
    <textarea
      v-if="type === 'textarea'"
      v-bind="$attrs"
      v-on="listeners"
      ref="textarea"
      :class="b('control')"
      :value="value"
    />
    <input
      v-else
      v-bind="$attrs"
      v-on="listeners"
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
      v-if="hasIcon"
      v-show="$slots.icon || value"
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
    value: null,
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    required: Boolean,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    },
    onIconClick: {
      type: Function,
      default: () => {}
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
    hasIcon() {
      return this.$slots.icon || this.icon;
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
    onInput(event) {
      this.$emit('input', event.target.value);
    },

    onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick();
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = this.value.indexOf('.') === -1;
        const isValidKey = (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint) || keyCode === 45;
        if (!isValidKey) {
          event.preventDefault();
        }
      }
      this.$emit('keypress', event);
    },

    adjustSize() {
      if (!(this.type === 'textarea' && this.autosize)) {
        return;
      }

      const el = this.$refs.textarea;
      /* istanbul ignore if */
      if (!el) {
        return;
      }

      el.style.height = 'auto';

      let height = el.scrollHeight;
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
        el.style.height = height + 'px';
      }
    }
  }
});
</script>
