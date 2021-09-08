<script setup lang="ts">
import VanCell from '../../cell';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '..';
import type { LoadingType } from '../../loading';

const t = useTranslate({
  'zh-CN': {
    fail: '失败提示',
    text: '提示内容',
    text2: '成功文案',
    text3: '失败文案',
    text4: (second: number) => `倒计时 ${second} 秒`,
    title1: '文字提示',
    title2: '加载提示',
    title3: '成功/失败提示',
    success: '成功提示',
    customIcon: '自定义图标',
    customImage: '自定义图片',
    loadingType: '自定义加载图标',
    positionTop: '顶部展示',
    updateMessage: '动态更新提示',
    positionBottom: '底部展示',
    customPosition: '自定义位置',
  },
  'en-US': {
    fail: 'Fail',
    text: 'Some messages',
    text2: 'Success',
    text3: 'Fail',
    text4: (second: number) => `${second} seconds`,
    title1: 'Text',
    title2: 'Loading',
    title3: 'Success/Fail',
    success: 'Success',
    customIcon: 'Custom Icon',
    customImage: 'Custom Image',
    loadingType: 'Loading Type',
    positionTop: 'Top',
    updateMessage: 'Update Message',
    positionBottom: 'Bottom',
    customPosition: 'Custom Position',
  },
});

const showLoadingToast = (loadingType?: LoadingType) => {
  Toast.loading({
    forbidClick: true,
    message: t('loading'),
    loadingType,
  });
};

const showSuccessToast = () => {
  Toast.success(t('text2'));
};

const showFailToast = () => {
  Toast.fail(t('text3'));
};

const showTopToast = () => {
  Toast({
    message: t('positionTop'),
    position: 'top',
  });
};

const showBottomToast = () => {
  Toast({
    message: t('positionBottom'),
    position: 'bottom',
  });
};

const showIconToast = () => {
  Toast({
    message: t('customIcon'),
    icon: 'like-o',
  });
};

const showImageToast = () => {
  Toast({
    message: t('customImage'),
    icon: 'https://img.yzcdn.cn/vant/logo.png',
  });
};

const showCustomizedToast = () => {
  const toast = Toast.loading({
    duration: 0,
    forbidClick: true,
    message: t('text4', 3),
  });

  let second = 3;
  const timer = setInterval(() => {
    second--;
    if (second) {
      toast.message = t('text4', second);
    } else {
      clearInterval(timer);
      Toast.clear();
    }
  }, 1000);
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('title1')" @click="Toast(t('text'))" />
    <van-cell is-link :title="t('title2')" @click="showLoadingToast()" />
    <van-cell is-link :title="t('success')" @click="showSuccessToast" />
    <van-cell is-link :title="t('fail')" @click="showFailToast" />
  </demo-block>

  <demo-block card :title="t('customIcon')">
    <van-cell is-link :title="t('customIcon')" @click="showIconToast" />
    <van-cell is-link :title="t('customImage')" @click="showImageToast" />
    <van-cell
      is-link
      :title="t('loadingType')"
      @click="showLoadingToast('spinner')"
    />
  </demo-block>

  <demo-block card :title="t('customPosition')">
    <van-cell is-link :title="t('positionTop')" @click="showTopToast" />
    <van-cell is-link :title="t('positionBottom')" @click="showBottomToast" />
  </demo-block>

  <demo-block card :title="t('updateMessage')">
    <van-cell
      is-link
      :title="t('updateMessage')"
      @click="showCustomizedToast"
    />
  </demo-block>
</template>
