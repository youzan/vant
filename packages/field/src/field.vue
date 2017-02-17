<template>
  <z-cell
    class="z-field"
    :title="label"
    :class="{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }">
    <textarea
      v-if="type === 'textarea'"
      class="z-field-control"
      v-model="currentValue"
      @change="$emit('change', currentValue)"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
    </textarea>
    <input
      v-else
      class="z-field-control"
      :value="currentValue"
      @change="$emit('change', currentValue)"
      @input="handleInput"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
  </z-cell>
</template>

<script>
import zCell from 'packages/cell';

export default {
  name: 'z-field',

  components: {
    zCell
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: String,
    label: String,
    disabled: Boolean,
    readonly: Boolean,
    maxlength: [String, Number]
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
      console.log(val);
    }
  },

  methods: {
    handleInput(event) {
      this.currentValue = event.target.value;
    }
  }
};
</script>
