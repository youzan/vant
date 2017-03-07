<template>
  <div
    class="zan-radio"
    :class="{
      'zan-radio--disabled': isDisabled
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
import findParent from 'src/mixins/findParent';

export default {
  name: 'zan-radio',

  mixins: [findParent],

  props: {
    disabled: Boolean,
    value: {},
    name: [String, Number]
  },

  computed: {
    isGroup() {
      return !!this.findParentByComponentName('zan-radio-group');
    },

    currentValue: {
      get() {
        console.log(this.value);
        return this.isGroup && this.parentGroup ? this.parentGroup.value : this.value;
      },

      set(val) {
        if (this.isGroup && this.parentGroup) {
          this.parentGroup.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled() {
      return this.isGroup && this.parentGroup
          ? this.parentGroup.disabled || this.disabled
          : this.disabled;
    }
  }
};
</script>
