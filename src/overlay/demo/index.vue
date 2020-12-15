<template>
  <demo-block :title="t('basicUsage')">
    <van-button
      type="primary"
      :text="t('showOverlay')"
      style="margin-left: 16px"
      @click="show = true"
    />
    <van-overlay :show="show" @click="show = false" />
  </demo-block>

  <demo-block :title="t('embeddedContent')">
    <van-button
      type="primary"
      :text="t('embeddedContent')"
      style="margin-left: 16px"
      @click="showEmbedded = true"
    />
    <van-overlay :show="showEmbedded" @click="showEmbedded = false">
      <div class="wrapper">
        <div class="block" />
      </div>
    </van-overlay>
  </demo-block>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    showOverlay: '显示遮罩层',
    embeddedContent: '嵌入内容',
  },
  'en-US': {
    showOverlay: 'Show Overlay',
    embeddedContent: 'Embedded Content',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      show: false,
      showEmbedded: false,
    });

    return {
      ...toRefs(state),
      t,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-overlay {
  background: @white;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: @white;
    border-radius: 4px;
  }
}
</style>
