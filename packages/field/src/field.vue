<template>
  <o2-cell
    class="o2-field"
    :title="label"
    :class="{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }">
    <textarea
      v-if="type === 'textarea'"
      class="o2-field-control"
      v-model="currentValue"
      @change="$emit('change', currentValue)"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
    </textarea>
    <input
      v-else
      class="o2-field-control"
      :value="currentValue"
      @change="$emit('change', currentValue)"
      @input="handleInput"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
  </o2-cell>
</template>

<script>
import O2Cell from 'packages/cell';

export default {
  name: 'o2-field',

  components: {
    O2Cell
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
