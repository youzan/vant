<template>
<a vusion-slot-name="text" :class="[$style.root]"
    :href="currentHref" :target="target"
    :noDecoration="!decoration"
    :disabled="currentDisabled" :tabindex="currentDisabled ? -1 : 0"
    :download="currentDownload"
    :loading="loading || $attrs.loading"
    :hoverType="hoverType"
    @click="onClick" v-on="listeners">
    <i-ico v-if="icon" :name="icon" :class="$style.btnicon" notext></i-ico>
    <template v-if="!$slots.default">
      {{ text }}
    </template>
    <slot v-if="$slots.default"></slot>
</a>
</template>
<script>
import ULink from 'cloud-ui.vusion/src/components/u-link.vue/index.vue';

export default {
    name: 'van-link',
    extends: ULink,
};
</script>

<style module>
</style>

