<template>
  <div :class="b()">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'goods-action'
});
</script>
