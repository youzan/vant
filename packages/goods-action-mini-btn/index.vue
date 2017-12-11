<template>
  <a :href="url" class="van-goods-action__mini-btn van-hairline" @click="$emit('click', $event);">
    <icon class="van-goods-action__mini-btn-icon" :class="iconClass" :name="icon" />
    <slot></slot>
  </a>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-goods-action-mini-btn',

  props: {
    url: String,
    icon: String,
    iconClass: String
  }
});
</script>
