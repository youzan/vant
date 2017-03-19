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
      'zan-field--border': border
    }">
    <textarea
      v-if="type === 'textarea'"
      class="zan-field__control"
      v-model="currentValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
    </textarea>
    <input
      v-else
      class="zan-field__control"
      :value="currentValue"
      @input="handleInput"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
  </zan-cell>
</template>

<script>
import zanCell from 'packages/cell';

export default {
  name: 'zan-field',

  components: {
    zanCell
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: {},
    label: String,
    disabled: Boolean,
    error: Boolean,
    readonly: Boolean,
    required: Boolean,
    maxlength: [String, Number],
    border: Boolean
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
      this.$emit('input', val);
    }
  },

  methods: {
    handleInput(event) {
      this.currentValue = event.target.value;
    }
  }
};
</script>
