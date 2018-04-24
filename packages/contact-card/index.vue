<template>
  <div :class="b([type, { uneditable: !editable }])" @click="onClick">
    <div :class="b('content')">
      <template v-if="type === 'add'">
        <icon :class="b('icon')" name="add2" />
        <div :class="b('text')">{{ addText || $t('addText') }}</div>
      </template>
      <template v-else-if="type === 'edit'">
        <icon :class="b('icon')" name="contact" />
        <div :class="b('text')">
          <div>{{ $t('contact') }}：{{ name }}</div>
          <div>{{ $t('tel') }}：{{ tel }}</div>
        </div>
      </template>
    </div>
    <icon v-if="editable" :class="b('arrow')" name="arrow" />
  </div>
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
