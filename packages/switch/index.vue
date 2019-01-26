<template>
  <div
    :class="b({
      on: value === activeValue,
      disabled
    })"
    :style="style"
    @click="onClick"
  >
    <div :class="b('node')">
      <loading
        v-if="loading"
        :class="b('loading')"
      />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'switch',

  props: {
    value: null,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    },
    size: {
      type: String,
      default: '30px'
    }
  },

  computed: {
    style() {
      return {
        fontSize: this.size,
        backgroundColor: this.value ? this.activeColor : this.inactiveColor
      };
    }
  },

  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        const checked = this.value === this.activeValue;
        const value = checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  }
});
</script>
