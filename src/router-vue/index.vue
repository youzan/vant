<template>
<div :class="$style.fake" v-if="$env.VUE_APP_DESIGNER">
    <router-view></router-view>
</div>
<router-view v-else></router-view>
</template>

<script>
export default {
    name: 'u-router-view',
};
</script>

<style module>
.fake:empty {
    background: linear-gradient(-45deg, white 25%,
    rgba(138, 205, 78, 0.25) 25%, rgba(138, 205, 78, 0.25) 50%,
    white 50%, white 75%,
    rgba(138, 205, 78, 0.25) 75%);
    background-size: 20px 20px;
    min-height: 20px;
}
</style>
