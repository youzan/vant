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
      'van-field--autosize': autosize
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
    <van-icon v-if="icon&& currentValue!= ''" :name="icon" class="van-field__icon" @click="onIconClick"></van-icon>
  </van-cell>
</template>

<script>
const VALID_TYPES = ['text', 'number', 'email', 'url', 'tel', 'date', 'time', 'datetime', 'password', 'textarea'];
import vanCell from 'packages/cell';
import vanIcon from 'packages/icon';

export default {
  name: 'van-field',

  components: {
    vanCell,
    vanIcon
  },

  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return VALID_TYPES.indexOf(value) > -1;
      }
    },
    placeholder: String,
    value: {},
    label: String,
    disabled: Boolean,
    error: Boolean,
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
    icon: String,
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

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      if (this.autosize && this.type === 'textarea') this.sizeAdjust();
      this.$emit('input', val);
    }
  },

  methods: {
    handleInput(event) {
      this.currentValue = event.target.value;
    },

    sizeAdjust() {
      const textareaElement = this.$refs.textareaElement;
      const textAreaDiff = (parseInt(textareaElement.style.paddingBottom, 10) +
          parseInt(textareaElement.style.paddingTop, 10)) || 0;
      // 需要先设为0， 才可以让scrollHeight正确计算。
      textareaElement.style.height = 0 + 'px';
      textareaElement.style.height = (textareaElement.scrollHeight - textAreaDiff) + 'px';
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
