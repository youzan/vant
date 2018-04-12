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
    name: null,
    value: null,
    disabled: Boolean
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
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});
</script>
