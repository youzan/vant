<template>
  <div
    class="van-radio"
    :class="{ 'van-radio--disabled': isDisabled }"
    @click="$emit('click')"
  >
    <span class="van-radio__input">
      <input
        :value="name"
        v-model="currentValue"
        type="radio"
        class="van-radio__control"
        :disabled="isDisabled"
      >
      <icon :name="currentValue === name ? 'checked' : 'check'" />
    </span>
    <span class="van-radio__label" @click="onClickLabel">
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
    value: {},
    disabled: Boolean,
    name: [String, Number]
  },

  computed: {
    isGroup() {
      return !!this.findParentByName('van-radio-group');
    },

    currentValue: {
      get() {
        return this.isGroup && this.parentGroup
          ? this.parentGroup.value
          : this.value;
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
  },

  methods: {
    onClickLabel() {
      if (this.isDisabled) {
        return;
      }
      this.currentValue = this.name;
    }
  }
});
</script>
