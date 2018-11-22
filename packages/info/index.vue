<template>
  <div
    v-if="isDef(info)"
    :class="b()"
  >
    {{ info }}
  </div>
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
