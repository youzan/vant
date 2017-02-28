<template>
  <div
    class="z-radio"
    :class="{
      'is-disabled': isDisabled
    }">
    <span class="z-radio__input">
      <input
        :value="name"
        v-model="currentValue"
        type="radio"
        class="z-radio__control"
        :disabled="isDisabled">
      <span class="zui-icon" :class="{
        'zui-icon-checked': currentValue === name,
        'zui-icon-check': currentValue !== name
      }">
      </span>
    </span>
    <span class="z-radio__label">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'z-radio',

  props: {
    disabled: Boolean,
    value: {},
    name: [String, Number]
  },

  computed: {
    isGroup() {
      return !!this.findRadioGroup()
    },

    currentValue: {
      get() {
        return this.isGroup ? this.parentGroup.value : this.value;
      },

      set(val) {
        if (this.isGroup) {
          this.parentGroup.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled() {
      return this.isGroup
          ? this.parentGroup.disabled || this.disabled
          : this.disabled;
    }
  },

  methods: {
    findRadioGroup() {
      if (this.parentGroup) return;

      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'z-radio-group') {
          this.parentGroup = parent;
          break;
        } else {
          parent = parent.$parent;
        }
      }

      return this.parentGroup;
    }
  }
};
</script>
