<template>
  <div class="van-contact-card" :class="[`van-contact-card--${type}`, { 'van-contact-card--uneditable': !editable }]" @click="onClick">
    <div class="van-contact-card__content">
      <template v-if="type === 'add'">
        <icon class="van-contact-card__icon" name="add2" />
        <div class="van-contact-card__text">{{ addText || $t('addText') }}</div>
      </template>
      <template v-else-if="type === 'edit'">
        <icon class="van-contact-card__icon" name="contact" />
        <div class="van-contact-card__text">
          <div>{{ $t('contact') }}：{{ name }}</div>
          <div>{{ $t('tel') }}：{{ tel }}</div>
        </div>
      </template>
    </div>
    <icon v-if="editable" class="van-contact-card__arrow" name="arrow" />
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
