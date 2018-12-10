<template>
  <div :class="b()">
    <div
      :class="b('icon', [shape, { disabled: isDisabled, checked }])"
      @click="toggle"
    >
      <slot
        name="icon"
        :checked="checked"
      >
        <icon
          name="success"
          :style="iconStyle"
        />
      </slot>
    </div>
    <span
      v-if="$slots.default"
      :class="b('label', [labelPosition, { disabled: isDisabled }])"
      @click="toggle('label')"
    >
      <slot />
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../mixins/find-parent';

export default create({
  name: 'checkbox',

  mixins: [findParent],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },

  computed: {
    checked: {
      get() {
        return this.parent
          ? this.parent.value.indexOf(this.name) !== -1
          : this.value;
      },

      set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled;
    },

    iconStyle() {
      const { checkedColor } = this;
      if (checkedColor && this.checked && !this.isDisabled) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
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
    toggle(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    },

    setParentValue(val) {
      const { parent } = this;
      const value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }

        /* istanbul ignore else */
        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        const index = value.indexOf(this.name);

        /* istanbul ignore else */
        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
});
</script>
