<template>
  <demo-block :title="t('basicUsage')">
    <van-switch v-model="checked" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-switch v-model="checked" disabled />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <van-switch v-model="checked" loading />
  </demo-block>

  <demo-block :title="t('customSize')">
    <van-switch v-model="checked2" size="24px" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-switch
      v-model="checked3"
      active-color="#ee0a24"
      inactive-color="#dcdee0"
    />
  </demo-block>

  <demo-block :title="t('asyncControl')">
    <van-switch :model-value="checked4" @update:model-value="onUpdateValue" />
  </demo-block>

  <demo-block :title="t('withCell')">
    <van-cell center :title="t('title')">
      <template #right-icon>
        <van-switch v-model="checked5" size="24" />
      </template>
    </van-cell>
  </demo-block>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Dialog from '../../dialog';

const i18n = {
  'zh-CN': {
    title: '标题',
    confirm: '提醒',
    message: '是否切换开关？',
    withCell: '搭配单元格使用',
    customSize: '自定义大小',
    customColor: '自定义颜色',
    asyncControl: '异步控制',
  },
  'en-US': {
    title: 'Title',
    confirm: 'Confirm',
    message: 'Are you sure to toggle switch?',
    withCell: 'Inside a Cell',
    customSize: 'Custom Size',
    customColor: 'Custom Color',
    asyncControl: 'Async Control',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      checked: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: false,
    });

    const onUpdateValue = (checked) => {
      Dialog.confirm({
        title: t('title'),
        message: t('message'),
      }).then(() => {
        state.checked4 = checked;
      });
    };

    return {
      ...toRefs(state),
      t,
      onUpdateValue,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-switch {
  .van-switch {
    margin-left: @padding-md;
  }
}
</style>
