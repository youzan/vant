<template>
  <div :class="b({ disabled: isDisabled })" @click="$emit('click')">
    <span :class="b('input')">
      <input
        :value="name"
        v-model="currentValue"
        type="radio"
        :class="b('control')"
        :disabled="isDisabled"
      >
      <icon :name="currentValue === name ? 'checked' : 'check'" />
    </span>
    <span v-if="$slots.default" :class="b('label', labelPosition)" @click="onClickLabel">
      <slot />
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../mixins/find-parent';

export default create({
  name: 'radio',

  mixins: [findParent],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: Boolean
  },

  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    isDisabled() {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled;
    }
  },

  created() {
    this.findParent('van-radio-group');
  },

  methods: {
    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});
</script>
