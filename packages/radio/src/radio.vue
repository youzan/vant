<template>
  <z-cell
    class="z-radio"
    :class="{
      'is-disabled': disabled
    }">
    <span class="z-radio__input">
      <input type="radio" class="z-radio__control">
      <span class="z-radio__circle"></span>
    </span>
    <span class="z-radio__label">
      <slot></slot>
    </span>
  </z-cell>
</template>

<script>
import zCell from 'packages/cell';

export default {
  name: 'z-radio',

  components: {
    zCell
  },

  props: {
    disabled: Boolean,
    value: {},
    parentGroup: null
  },

  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'z-radio-group') {
          this.parentGroup = parent;
          return true;
        } else {
          parent = parent.$parent;
        }
      }
      return false;
    },

    model: {
      get() {
        return this.isGroup ? this.parentGroup.value : this.value;
      },

      set(val) {
        if (this.isGroup) {

        } else {
          this.$emit('input', val);
        }
      }
    }
  }
};
</script>
