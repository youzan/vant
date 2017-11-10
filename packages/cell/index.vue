<template>
  <div :class="['van-cell', 'van-hairline', { 'van-cell--required': required }]" @click="onClick">
    <div class="van-cell__title" v-if="$slots.title || title">
      <slot name="icon">
        <van-icon v-if="icon" :name="icon" />
      </slot>
      <slot name="title">
        <span class="van-cell__text" v-text="title" />
        <span class="van-cell__label" v-if="label" v-text="label" />
      </slot>
    </div>
    <div
      class="van-cell__value"
      v-if="value || $slots.default"
      :class="{
        'van-cell__value--link': isLink,
        'van-cell__value--alone': !$slots.title && !title && !label
      }"
    >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <van-icon name="arrow" class="van-cell__right-icon" v-if="isLink" />
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-cell',

  components: {
    [Icon.name]: Icon
  },

  props: {
    url: String,
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    replace: Boolean,
    required: Boolean,
    to: [String, Object],
    value: [String, Number]
  },

  methods: {
    onClick() {
      this.$emit('click');

      const { to, url, $router, replace } = this;
      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
};
</script>
