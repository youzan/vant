<template>
  <cell-group :class="b()">
    <slot name="header">
      <cell :class="b('header')" :title="title" :label="desc" :value="status" />
    </slot>
    <div :class="b('content')">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="b('footer')" class="van-hairline--top">
      <slot name="footer" />
    </div>
  </cell-group>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'panel',
  props: {
    desc: String,
    title: String,
    status: String
  }
});
</script>
