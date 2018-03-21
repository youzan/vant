<template>
  <div class="van-sku-row">
    <div class="van-sku-row__title">{{ skuRow.k }}：</div>
    <slot />
  </div>
</template>

<script>
import create from '../../utils/create';

export default create({
  name: 'sku-row',

  props: {
    skuRow: Object
  }
});
</script>
