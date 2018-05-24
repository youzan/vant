<template>
  <div :class="b()">
    <div :class="b('title')">{{ skuRow.k }}：</div>
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
