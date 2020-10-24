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
      active-color="#07c160"
      inactive-color="#ee0a24"
    />
  </demo-block>

  <demo-block :title="t('asyncControl')">
    <van-switch :model-value="checked4" @update:model-value="onInput" />
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
export default {
  i18n: {
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
  },

  data() {
    return {
      checked: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: false,
    };
  },

  methods: {
    onInput(checked) {
      this.$dialog
        .confirm({
          title: this.t('title'),
          message: this.t('message'),
        })
        .then(() => {
          this.checked4 = checked;
        });
    },
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
