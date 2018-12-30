<template>
  <div
    v-if="isDef(info)"
    v-text="info"
    :class="b()"
  />
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'info',

  props: {
    info: [String, Number]
  }
});
</script>
