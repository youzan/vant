<template>
  <cell
    center
    :border="false"
    :class="b([type])"
    :is-link="editable"
    :icon="type === 'edit' ? 'contact' : 'add-square'"
    @click="onClick"
  >
    <template v-if="type === 'add'">{{ addText || $t('addText') }}</template>
    <template v-else>
      <div>{{ $t('name') }}：{{ name }}</div>
      <div>{{ $t('tel') }}：{{ tel }}</div>
    </template>
  </cell>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'contact-card',

  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },

  methods: {
    onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  }
});
</script>
