<template>
  <div
    :class="b({ disabled: isDisabled })"
    @click="$emit('click')"
  >
    <span :class="b('input')">
      <input
        v-model="currentValue"
        type="radio"
        :value="name"
        :class="b('control')"
        :disabled="isDisabled"
      >
      <icon
        :style="iconStyle"
        :name="checked ? 'checked' : 'circle'"
      />
    </span>
    <span
      v-if="$slots.default"
      :class="b('label', labelPosition)"
      @click="onClickLabel"
    >
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
    checkedColor: String,
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

    checked() {
      return this.currentValue === this.name;
    },

    isDisabled() {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled;
    },

    iconStyle() {
      const { checkedColor } = this;
      if (checkedColor && this.checked && !this.isDisabled) {
        return {
          color: checkedColor
        };
      }
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
