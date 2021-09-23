<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default { name: 'u-spinner' };
</script>

<style module>
@keyframes linear-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.root {
    display: inline-block;
    line-height: 1;
    animation: linear-spin var(--spinner-animation-duration) ease-in-out var(--spinner-animation-delay) infinite;
}

.root::before {
    /* icon-font: url('./assets/spinner.svg'); */
}
</style>
