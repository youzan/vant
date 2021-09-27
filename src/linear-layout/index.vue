<template>
<div :class="$style.vline" v-on="$listeners" vusion-slot-name="default">
    <slot></slot>
    <van-empty-col v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></van-empty-col>
</div>
</template>

<script>
import VanEmptyCol from '../emptycol/index';

export default {
    name: 'van-linear-layout',
    components: {
        VanEmptyCol,
    },
    props: {
    },
};
</script>

<style module>
/* 默认为 block */
.vline{
  background-color: transparent;
}
</style>
