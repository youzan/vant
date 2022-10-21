<template>
<div :class="$style.root" :type="type" :direction="direction" v-on="$listeners" vusion-slot-name="default">
    <slot></slot>
    <s-empty v-if="type !== 'root' && (!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
    <div v-if="showLoading" :class="$style.mask">
        <van-loading vertical
            :icon="loadingIcon"
            :iconRotate="loadingIconRotate"
            :class="$style.loading">
        {{loadingText}}
        </van-loading>
    </div>
</div>
</template>

<script>
import ULinearLayout from 'cloud-ui.vusion/src/components/u-linear-layout.vue/index.vue';

import VanLoading from '../../../src/loading';

export default {
    name: 'van-linear-layout',
    extends: ULinearLayout,
    components: { VanLoading },
};
</script>

<style module>
.root {
    position: relative;
}

.mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255,255,255,0.5);
}

.loading {
    position: absolute !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
