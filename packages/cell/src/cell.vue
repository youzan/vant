<template>
  <a class="o2-cell" :href="url">
    <div class="o2-cell-title">
      <slot name="icon">
        <i v-if="icon" class="zui-icon" :class="'zui-icon-' + icon"></i>
      </slot>
      <slot name="title">
        <span class="o2-cell-text" v-text="title"></span>
      </slot>
    </div>
    <div class="o2-cell-value">
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>
    <i class="zui-icon zui-icon-arrow" v-if="isLink"></i>
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
    overflow: hidden;
    position: relative;
    padding: 10px 10px 10px 0;
    line-height: 22px;
    color: #666;
    text-decoration: none;
    border-bottom: 1px solid #ccc;

    &:last-child {
      border-bottom: 0;
    }

    @descendent title {
      float: left;
    }

    @descendent value {
      float: right;
    }
  }
}
</style>
