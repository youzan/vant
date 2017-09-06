<template>
  <van-cell
    class="van-field"
    :title="label"
    :required="required"
    :class="{
      'van-field--hastextarea': type === 'textarea',
      'van-field--nolabel': !label,
      'van-field--disabled': disabled,
      'van-field--error': error,
      'van-field--border': border,
      'van-hairline--surround': border,
      'van-field--autosize': autosize,
      'van-field--has-icon': showIcon
    }">
    <textarea
      v-if="type === 'textarea'"
      ref="textareaElement"
      class="van-field__control"
      v-model="currentValue"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :cols="cols">
    </textarea>
    <input
      v-else
      class="van-field__control"
      :value="currentValue"
      @input="handleInput"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
    <div v-if="showIcon" class="van-field__icon" @click="onIconClick">
      <slot name="icon">
        <van-icon :name="icon"></van-icon>
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
    placeholder: String,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: Boolean,
    maxlength: [String, Number],
    border: Boolean,
    rows: [String, Number],
    cols: [String, Number],
    autosize: {
      type: Boolean,
      default: false
    },
    onIconClick: {
      type: Function,
      default: () => {}
    }
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  mounted() {
    if (this.autosize && this.type === 'textarea') {
      const el = this.$refs.textareaElement;
      el.style.height = el.scrollHeight + 'px';
      el.style.overflowY = 'hidden';
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      if (this.autosize && this.type === 'textarea') {
        this.$nextTick(this.sizeAdjust);
      }
      this.$emit('input', val);
    }
  },

  computed: {
    showIcon() {
      // 有icon的slot，就认为一直展示
      if (this.$slots.icon) {
        return true;
      }

      return this.icon && this.currentValue;
    }
  },

  methods: {
    handleInput(event) {
      this.currentValue = event.target.value;
    },

    sizeAdjust() {
      const el = this.$refs.textareaElement;
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    },

    handleInputFocus() {
      this.$emit('focus');
    },

    handleInputBlur() {
      this.$emit('blur');
    }
  }
};
</script>
