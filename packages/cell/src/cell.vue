<template>
  <div class="o2-cell">
    <div class="o2-cell-title">
      <slot name="icon">
        <i v-if="icon" class="o2-icon" :class="'o2-icon-' + icon"></i>
      </slot>
      <slot name="title">
      </slot>
    </div>
    <div class="o2-cell-value">
      <slot>

      </slot>
    </div>
    <i class="o2-cell-arrow-right"></i>
  </div>
</template>

<script>
export default {
  name: 'o2-cell',

  props: {
    icon: String,
    title: String
  }
};
</script>
