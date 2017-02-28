<template>
  <div
    class="zan-radio"
    :class="{
      'is-disabled': isDisabled
    }">
    <span class="zan-radio__input">
      <input
        :value="name"
        v-model="currentValue"
        type="radio"
        class="zan-radio__control"
        :disabled="isDisabled">
      <span class="zan-icon" :class="{
        'zan-icon-checked': currentValue === name,
        'zan-icon-check': currentValue !== name
      }">
      </span>
    </span>
    <span class="zan-radio__label">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'zan-radio',

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
        return this.isGroup ? (this.parentGroup && this.parentGroup.value) : this.value;
      },

      set(val) {
        if (this.isGroup) {
          this.parentGroup && this.parentGroup.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled() {
      return this.isGroup
          ? (this.parentGroup && this.parentGroup.disabled) || this.disabled
          : this.disabled;
    }
  },

  methods: {
    findRadioGroup() {
      if (this.parentGroup) return;

      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'zan-radio-group') {
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
