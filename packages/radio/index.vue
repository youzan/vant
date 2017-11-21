<template>
  <div
    @click="handleRadioClick"
    class="van-radio"
    :class="{
      'van-radio--disabled': isDisabled
    }">
    <span class="van-radio__input">
      <input
        :value="name"
        v-model="currentValue"
        type="radio"
        class="van-radio__control"
        :disabled="isDisabled">
      <span class="van-icon" :class="{
        'van-icon-checked': currentValue === name,
        'van-icon-check': currentValue !== name
      }">
      </span>
    </span>
    <span class="van-radio__label" @click="handleLabelClick">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'van-radio',

  inject: {
    radioGroup: { default: '' } 
  },

  props: {
    value: {},
    disabled: Boolean,
    name: [String, Number]
  },

  computed: {
    isGroup() {
      return !!this.radioGroup;
    },

    currentValue: {
      get() {
        return this.isGroup && this.radioGroup ? this.radioGroup.value : this.value;
      },

      set(val) {
        if (this.isGroup && this.radioGroup) {
          this.radioGroup.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled() {
      return this.isGroup && this.radioGroup
          ? this.radioGroup.disabled || this.disabled
          : this.disabled;
    }
  },

  methods: {
    handleLabelClick() {
      if (this.isDisabled) {
        return;
      }
      this.currentValue = this.name;
    },

    handleRadioClick() {
      this.$emit('click');
    }
  }
};
</script>
