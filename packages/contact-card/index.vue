<template>
  <div class="van-contact-card" :class="`van-contact-card--${type}`" v-on="$listeners">
    <div class="van-contact-card__content">
      <template v-if="type === 'add'">
        <icon class="van-contact-card__icon" name="add2" />
        <div class="van-contact-card__text">{{ addText || $t('addText') }}</div>
      </template>
      <template v-else-if="type === 'edit'">
        <icon class="van-contact-card__icon" name="contact" />
        <div class="van-contact-card__text">
          <div>{{ $t('name') }}：{{ name }}</div>
          <div>{{ $t('tel') }}：{{ tel }}</div>
        </div>
      </template>
    </div>
    <icon class="van-contact-card__arrow" name="arrow" />
  </div>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-contact-card',

  props: {
    tel: String,
    name: String,
    addText: String,
    type: {
      type: String,
      default: 'add'
    }
  }
});
</script>
