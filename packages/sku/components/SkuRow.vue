<template>
  <div class="van-sku-row">
    <div class="van-sku-row__title">{{ skuRow.k }}：</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'sku-row',

  props: {
    skuRow: Object
  }
};
</script>
