<template>
  <zan-cell
    class="zan-field"
    :title="label"
    :required="required"
    :class="{
      'zan-field--hastextarea': type === 'textarea',
      'zan-field--nolabel': !label,
      'zan-field--disabled': disabled,
      'zan-field--error': error,
      'zan-field--border': border,
      'zan-field--autosize': autosize
    }">
    <textarea
      v-if="type === 'textarea'"
      ref="textareaElement"
      class="zan-field__control"
      v-model="currentValue"
      @focus="handleInputFocus"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :cols="cols">
    </textarea>
    <input
      v-else
      class="zan-field__control"
      :value="currentValue"
      @input="handleInput"
      @focus="handleInputFocus"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
  </zan-cell>
</template>

<script>
const VALID_TYPES = ['text', 'number', 'email', 'url', 'tel', 'date', 'datetime', 'password', 'textarea'];
import zanCell from 'packages/cell';

export default {
  name: 'zan-field',

  components: {
    zanCell
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
      default: false,
      validator(value) {
        if (value && this.type !== 'textarea') return false;
        return true;
      }
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
    }
  }
};
</script>
