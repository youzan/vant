<template>
  <div
    :class="[
      b({
        center,
        required,
        clickable: isLink || clickable
      }),
      { 'van-hairline': border }
    ]"
    @click="onClick"
  >
    <slot name="icon">
      <icon v-if="icon" :class="b('left-icon')" :name="icon" />
    </slot>
    <div v-if="isDef(title) || $slots.title" :class="b('title')">
      <slot name="title">
        <span v-text="title" />
        <div v-if="label" v-text="label" :class="b('label')" />
      </slot>
    </div>
    <div
      v-if="isDef(value) || $slots.default"
      :class="b('value', { alone: !$slots.title && !title })"
    >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <icon v-if="isLink" :class="b('right-icon', arrowDirection)" name="arrow" />
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
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    title: [String, Number],
    value: [String, Number],
    arrowDirection: String,
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
