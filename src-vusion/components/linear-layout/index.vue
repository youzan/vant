<template>
<div :class="$style.root" :type="type" :direction="direction" v-on="$listeners" vusion-slot-name="default">
    <slot></slot>
    <template v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']">
        <div :class="$style.emptyTip" v-if="type === 'root'">拖拽右侧组件放至此处</div>
        <s-empty v-else></s-empty>
    </template>
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

.emptyTip {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #666666;
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
