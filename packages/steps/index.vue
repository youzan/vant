<template>
  <div :class="b([direction])">
    <div
      v-if="title || description"
      :class="b('status')"
    >
      <div
        v-if="icon || $slots.icon"
        :class="b('icon')"
      >
        <slot name="icon">
          <icon
            :name="icon"
            :class="iconClass"
          />
        </slot>
      </div>
      <div :class="b('message')">
        <div
          :class="b('title')"
          v-text="title"
        />
        <div
          :class="b('desc')"
          class="van-ellipsis"
          v-text="description"
        />
      </div>
      <slot name="message-extra" />
    </div>
    <div :class="b('items', { alone: !title && !description })">
      <slot />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import { GREEN } from '../utils/color';

export default create({
  name: 'steps',

  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: GREEN
    }
  },

  data() {
    return {
      steps: []
    };
  }
});
</script>
