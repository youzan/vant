<script setup lang="ts">
import { ref } from 'vue';
import { FloatingPanel as VanFloatingPanel } from '..';

const anchors = [100, 200, 400];
const height = ref(anchors[0]);
const onHeightChange = (h: number) => {
  height.value = h;
};
</script>

<template>
  <van-floating-panel :anchors="anchors" @height-change="onHeightChange">
    <div style="text-align: center; padding: 15px">
      <p>面板显示高度 {{ height }} px</p>
    </div>
  </van-floating-panel>
</template>
