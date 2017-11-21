<template>
  <div
    :class="[
      'van-checkbox',
      `van-checkbox--${shape}`, {
      'van-checkbox--disabled': isDisabled
    }]">
    <span class="van-checkbox__input">
      <input
        v-model="currentValue"
        type="checkbox"
        class="van-checkbox__control"
        :disabled="isDisabled"
      />
      <van-icon name="success" />
    </span>
    <span class="van-checkbox__label" @click="onClickLabel">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-checkbox',

  components: {
    [Icon.name]: Icon
  },

  inject: {
    checkboxGroup: { default: '' } 
  },

  props: {
    value: {},
    disabled: Boolean,
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

  computed: {
    // whether is in van-checkbox-group
    isGroup() {
      return !!this.checkboxGroup;
    },

    currentValue: {
      get() {
        return this.isGroup && this.checkboxGroup ? this.checkboxGroup.value.indexOf(this.name) !== -1 : this.value;
      },

      set(val) {
        if (this.isGroup && this.checkboxGroup) {
          const parentValue = this.checkboxGroup.value.slice();
          if (val) {
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              this.checkboxGroup.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.indexOf(this.name);
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1);
              this.checkboxGroup.$emit('input', parentValue);
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
      } else if (currentValue !== null && currentValue !== undefined) {
        return currentValue === this.name;
      }
    },

    isDisabled() {
      return this.isGroup && this.checkboxGroup
          ? this.checkboxGroup.disabled
          : this.disabled;
    }
  },

  methods: {
    onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = !this.currentValue;
      }
    }
  }
};
</script>
