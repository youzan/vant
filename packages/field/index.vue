<template>
  <van-cell
    :title="label"
    :required="required"
    :class="['van-field', {
      'van-field--has-textarea': type === 'textarea',
      'van-field--nolabel': !label,
      'van-field--disabled': $attrs.disabled,
      'van-field--error': error,
      'van-field--border': border,
      'van-field--autosize': autosize,
      'van-field--has-icon': hasIcon,
      'van-hairline--surround': border
    }]">
    <textarea
      v-if="type === 'textarea'"
      v-bind="$attrs"
      ref="textarea"
      class="van-field__control"
      :value="value"
      @input="onInput"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
    <input
      v-else
      v-bind="$attrs"  
      class="van-field__control"
      :type="type"
      :value="value"
      @input="onInput"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
    <div
      v-if="hasIcon"
      v-show="$slots.icon || value"
      class="van-field__icon"
      @touchstart.prevent="onClickIcon"
    >
      <slot name="icon">
        <van-icon :name="icon" />
      </slot>
    </div>
  </van-cell>
</template>

<script>
import Cell from '../cell';
import Icon from '../icon';

const VALID_TYPES = ['text', 'number', 'email', 'url', 'tel', 'date', 'time', 'datetime', 'password', 'textarea'];

export default {
  name: 'van-field',

  components: {
    [Cell.name]: Cell,
    [Icon.name]: Icon
  },

  props: {
    type: {
      type: String,
      default: 'text',
      validator: value => VALID_TYPES.indexOf(value) > -1
    },
    value: {},
    icon: String,
    label: String,
    error: Boolean,
    required: Boolean,
    border: Boolean,
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

    adjustSize() {
      const el = this.$refs.textarea;
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  }
};
</script>
