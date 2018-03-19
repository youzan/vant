<template>
  <div class="van-checkbox">
    <icon
      name="success"
      class="van-checkbox__icon"
      :class="[
        `van-checkbox--${shape}`,
        { 'van-checkbox--disabled': isDisabled },
        { 'van-checkbox--checked': isChecked }
      ]"
      @click="onClick"
    />
    <span class="van-checkbox__label" @click="onClick('label')">
      <slot />
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import { isDef } from '../utils';
import findParent from '../mixins/find-parent';

export default create({
  name: 'checkbox',

  mixins: [findParent],

  props: {
    value: {},
    disabled: Boolean,
    labelDisabled: {
      type: Boolean,
      default: false
    },
    name: [String, Number],
    shape: {
      type: String,
      default: 'round'
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  data() {
    this.findParentByName('van-checkbox-group');
    return {};
  },

  computed: {
    currentValue: {
      get() {
        return this.parentGroup
          ? this.parentGroup.value.indexOf(this.name) !== -1
          : this.value;
      },

      set(val) {
        const { parentGroup } = this;
        if (parentGroup) {
          const parentValue = this.parentGroup.value.slice();
          if (val) {
            if (parentGroup.max && parentValue.length >= parentGroup.max) {
              return;
            }
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              parentGroup.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.indexOf(this.name);
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1);
              parentGroup.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },

    isChecked() {
      const { currentValue } = this;
      if ({}.toString.call(currentValue) === '[object Boolean]') {
        return currentValue;
      } else if (isDef(currentValue)) {
        return currentValue === this.name;
      }
    },

    isDisabled() {
      return (this.parentGroup && this.parentGroup.disabled) || this.disabled;
    }
  },

  methods: {
    onClick(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.currentValue = !this.currentValue;
      }
    }
  }
});
</script>
