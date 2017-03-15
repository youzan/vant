<template>
  <div
    class="zan-checkbox"
    :class="{
      'zan-checkbox--disabled': isDisabled
    }">
    <span class="zan-checkbox__input">
      <input
        v-model="currentValue"
        type="checkbox"
        class="zan-checkbox__control"
        :disabled="isDisabled">
      <span class="zan-icon" :class="{
        'zan-icon-checked': isChecked,
        'zan-icon-check': !isChecked
      }">
      </span>
    </span>
    <span class="zan-checkbox__label" @click="handleLabelClick">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import findParent from 'src/mixins/findParent';

export default {
  name: 'zan-checkbox',

  mixins: [findParent],

  props: {
    disabled: Boolean,
    value: {},
    name: [String, Number]
  },

  computed: {
    /**
     * `checkbox`是否在`zan-checkbox-group`中
     */
    isGroup() {
      return !!this.findParentByComponentName('zan-checkbox-group');
    },

    /**
     * `checkbox`当前值
     */
    currentValue: {
      get() {
        return this.isGroup && this.parentGroup ? this.parentGroup.value.indexOf(this.name) !== -1 : this.value;
      },

      set(val) {
        if (this.isGroup && this.parentGroup) {
          const parentValue = this.parentGroup.value.slice();
          if (val) {
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              this.parentGroup.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.indexOf(this.name);
            if (index !== -1) {
              parentValue.splice(index, 1);
              this.parentGroup.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },

    /**
     * `checkbox`是否被选中
     */
    isChecked() {
      if ({}.toString.call(this.currentValue) === '[object Boolean]') {
        return this.currentValue;
      } else if (Array.isArray(this.currentValue)) {
        return this.currentValue.indexOf(this.name) > -1;
      }
    },

    /**
     * `checkbox`是否被禁用
     */
    isDisabled() {
      return this.isGroup && this.parentGroup
          ? this.parentGroup.disabled || this.disabled
          : this.disabled;
    }
  },

  methods: {
    handleLabelClick() {
      if (this.isDisabled) {
        return;
      }
      this.currentValue = !this.currentValue;
    }
  }
};
</script>
