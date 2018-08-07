<template>
  <div :class="b({ 'show-action': showAction })" :style="{ background }">
    <field
      v-bind="$attrs"
      v-on="listeners"
      clearable
      type="search"
      :value="value"
      :border="false"
      left-icon="search"
    />
    <div v-if="showAction" :class="b('action')">
      <slot name="action">
        <div @click="onBack">{{ $t('cancel') }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import Field from '../field';
import create from '../utils/create';

export default create({
  name: 'search',

  inheritAttrs: false,

  components: {
    Field
  },

  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress
      };
    }
  },

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },

    onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
    },

    onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
});
</script>
