<template>
  <a class="o2-cell" :href="url">
    <div class="o2-cell-title">
      <slot name="icon">
        <i v-if="icon" class="o2-icon" :class="'o2-icon-' + icon"></i>
      </slot>
      <slot name="title">
        <span class="o2-cell-text" v-text="title"></span>
      </slot>
    </div>
    <div class="o2-cell-value">
      <slot>
        <span v-text="value"></span>
      </slot>
      <i class="o2-cell-arrow-right" v-if="isLink"></i>
    </div>
  </a>
</template>

<script>
export default {
  name: 'o2-cell',

  props: {
    icon: String,
    title: String,
    value: String,
    url: String,
    isLink: Boolean
  }
};
</script>

<style>
@component-namespace o2 {
  @component cell {
    display: block;

    @descendent title {
      float: left;
    }

    @descendent value {
      float: right;
    }
  }
}
</style>
