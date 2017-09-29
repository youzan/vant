<template>
  <div :class="['van-contact-card', `van-contact-card--${type}`]" v-on="$listeners">
    <div class="van-contact-card__content">
      <template v-if="type === 'add'">
        <van-icon class="van-contact-card__icon" name="add2" />
        <div class="van-contact-card__text">{{ addText }}</div>
      </template>
      <template v-else-if="type === 'edit'">
        <van-icon class="van-contact-card__icon" name="contact" />
        <div class="van-contact-card__text">
          <p>联系人：{{ name }}</p>
          <p>联系电话：{{ tel }}</p>
        </div>
      </template>
    </div>
    <van-icon class="van-contact-card__arrow" name="arrow" />
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-contact-card',

  components: {
    [Icon.name]: Icon
  },

  props: {
    type: {
      type: String,
      default: 'add'
    },
    name: {
      type: String
    },
    tel: {
      type: String
    },
    addText: {
      type: String,
      default: '添加订单联系人信息'
    }
  }
};
</script>
