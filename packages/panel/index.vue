<template>
  <cell-group :class="b()">
    <slot name="header">
      <cell
        :class="b('header')"
        :icon="icon"
        :label="desc"
        :title="title"
        :value="status"
      />
    </slot>
    <div :class="b('content')">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      :class="b('footer')"
      class="van-hairline--top"
    >
      <slot name="footer" />
    </div>
  </cell-group>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'panel',
  props: {
    icon: String,
    desc: String,
    title: String,
    status: String
  }
});
</script>
