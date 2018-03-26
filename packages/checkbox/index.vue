<template>
  <div class="van-checkbox">
    <icon
      name="success"
      class="van-checkbox__icon"
      :class="[
        `van-checkbox--${shape}`, {
          'van-checkbox--disabled': isDisabled,
          'van-checkbox--checked': isChecked
      }]"
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

  computed: {
    currentValue: {
      get() {
        return this.parent
          ? this.parent.value.indexOf(this.name) !== -1
          : this.value;
      },

      set(val) {
        const { parent } = this;
        if (parent) {
          const parentValue = this.parent.value.slice();
          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return;
            }
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              parent.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.indexOf(this.name);
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1);
              parent.$emit('input', parentValue);
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
      return (this.parent && this.parent.disabled) || this.disabled;
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  created() {
    this.findParent('van-checkbox-group');
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
