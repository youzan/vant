<template>
  <div
    class="van-cell"
    :class="{
      'van-hairline': border,
      'van-cell--center': center,
      'van-cell--required': required,
      'van-cell--clickable': isLink || clickable
    }"
    @click="onClick"
  >
    <slot name="icon">
      <icon v-if="icon" class="van-cell__left-icon" :name="icon" />
    </slot>
    <div class="van-cell__title" v-if="title || $slots.title">
      <slot name="title">
        <span v-text="title" />
        <div class="van-cell__label" v-if="label" v-text="label" />
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
      <icon name="arrow" class="van-cell__right-icon" v-if="isLink" />
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
import Icon from '../icon';
import RouterLink from '../mixins/router-link';
import create from '../utils/create-basic';

export default create({
  name: 'cell',

  components: {
    Icon
  },

  mixins: [RouterLink],

  props: {
    icon: String,
    title: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    value: [String, Number],
    border: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
});
</script>
