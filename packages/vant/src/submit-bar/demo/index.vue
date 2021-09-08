<script setup lang="ts">
import VanSubmitBar from '..';
import VanCheckbox from '../../checkbox';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    tip1: '你的收货地址不支持同城送, 我们已为你推荐快递',
    tip2: '你的收货地址不支持同城送, ',
    tip3: '修改地址',
    check: '全选',
    submit: '提交订单',
    clickLink: '修改地址',
    clickButton: '点击按钮',
  },
  'en-US': {
    tip1: 'Some tips',
    tip2: 'Some tips, ',
    tip3: 'Link',
    check: 'Label',
    submit: 'Submit',
    clickLink: 'Click Link',
    clickButton: 'Submit',
  },
});

const checked = ref(true);

const onSubmit = () => Toast(t('clickButton'));
const onClickLink = () => Toast(t('clickLink'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-submit-bar
      :price="3050"
      :button-text="t('submit')"
      @submit="onSubmit"
    />
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-submit-bar
      disabled
      :price="3050"
      :button-text="t('submit')"
      :tip="t('tip1')"
      tip-icon="info-o"
      @submit="onSubmit"
    />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <van-submit-bar
      loading
      :price="3050"
      :button-text="t('submit')"
      @submit="onSubmit"
    />
  </demo-block>

  <demo-block :title="t('advancedUsage')">
    <van-submit-bar :price="3050" :button-text="t('submit')" @submit="onSubmit">
      <van-checkbox v-model="checked">{{ t('check') }}</van-checkbox>
      <template #tip>
        {{ t('tip2') }}
        <span class="edit-address" @click="onClickLink">
          {{ t('tip3') }}
        </span>
      </template>
    </van-submit-bar>
  </demo-block>
</template>
Ï

<style lang="less">
.demo-submit-bar {
  .van-submit-bar {
    position: relative;
    padding-bottom: 0;
  }

  .edit-address {
    color: var(--van-blue);
  }

  .van-checkbox {
    margin-right: var(--van-padding-sm);
  }
}
</style>
