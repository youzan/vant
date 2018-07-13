<template>
  <div :class="b()">
    <div :class="[b('icon', [shape, { disabled: isDisabled, checked }])]" @click="toggle">
      <slot name="icon" :checked="checked">
        <icon name="success" />
      </slot>
    </div>
    <span v-if="$slots.default" :class="b('label', labelPosition)" @click="toggle('label')">
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
    labelPosition: String,
    labelDisabled: {
      type: Boolean,
      default: false
    },
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
    toggle(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    }
  }
});
</script>
