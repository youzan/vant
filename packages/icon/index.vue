<template>
  <i class="van-icon" :class="`van-icon-${name}`" v-on="$listeners">
    <slot />
    <div v-if="info" class="van-icon__info">{{ info }}</div>
  </i>
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'icon',

  props: {
    name: String,
    info: String
  }
});
</script>
