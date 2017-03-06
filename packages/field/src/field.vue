<template>
  <zan-cell
    class="zan-field"
    :title="label"
    :class="{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }">
    <textarea
      v-if="type === 'textarea'"
      class="zan-field__control"
      v-model="currentValue"
      @change="$emit('change', currentValue)"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly">
    </textarea>
    <input
      v-else
      class="zan-field__control"
      :value="currentValue"
      @change="$emit('change', currentValue)"
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
