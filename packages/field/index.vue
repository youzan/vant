<template>
  <cell
    :title="label"
    :required="required"
    class="van-field"
    :class="{
      'van-field--has-textarea': type === 'textarea',
      'van-field--nolabel': !label,
      'van-field--disabled': $attrs.disabled,
      'van-field--error': error,
      'van-field--border': border,
      'van-field--autosize': autosize,
      'van-field--has-icon': hasIcon,
      'van-hairline--surround': border
    }"
  >
    <textarea
      v-if="type === 'textarea'"
      v-bind="$attrs"
      v-on="listeners"
      ref="textarea"
      class="van-field__control"
      :value="value"
    />
    <input
      v-else
      v-bind="$attrs"
      v-on="listeners"
      class="van-field__control"
      :type="type"
      :value="value"
    >
    <div
      v-if="hasIcon"
      v-show="$slots.icon || value"
      class="van-field__icon"
      @touchstart.prevent="onClickIcon"
    >
      <slot name="icon">
        <icon :name="icon" />
      </slot>
    </div>
  </cell>
</template>

<script>
import { create } from '../utils';
import Cell from '../cell';

export default create({
  name: 'van-field',

  components: {
    Cell
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {},
    icon: String,
    label: String,
    error: Boolean,
    border: Boolean,
    required: Boolean,
    autosize: Boolean,
    onIconClick: {
      type: Function,
      default: () => {}
    }
  },

  watch: {
    value() {
      if (this.autosize && this.type === 'textarea') {
        this.$nextTick(this.adjustSize);
      }
    }
  },

  mounted() {
    if (this.autosize && this.type === 'textarea') {
      const el = this.$refs.textarea;
      const scrollHeight = el.scrollHeight;
      if (scrollHeight !== 0) {
        el.style.height = scrollHeight + 'px';
      }
      el.style.overflowY = 'hidden';
    }
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
        const isValidKey = (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint);
        if (!isValidKey) {
          event.preventDefault();
        }
      }
      this.$emit('keypress', event);
    },

    adjustSize() {
      const el = this.$refs.textarea;
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  }
});
</script>
