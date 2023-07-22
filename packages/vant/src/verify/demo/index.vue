<script setup lang="ts">
import VanVerify from '..';
import { useTranslate } from '../../../docs/site';
import Icon from '../../icon/Icon';

const t = useTranslate({
  'zh-CN': {
    defaultAction: '默认效果',
    modifyTrackColor: '自定义轨道颜色',
    modifyHintContent: '自定义提示文字',
    modifySuccessfulColor: '自定义验证成功主题色',
    modifySucessfulTextColor: '自定义成功提示文本颜色',
    modifySucessfulHintContent: '自定义成功的提示文字',
    modifyMaxIncorrectTimes: '自定义最大错误次数',
    modifySliderContent: '自定义滑块内容',
    modifyCallBack: '自定义回调函数',
    openRadiusEffect: '开启圆角效果',
    isAnimation: '开启/关闭动画效果',
    SlideVerify: '滑动滑块以验证',
    sucessfulText: '验证成功~',
  },
  'en-US': {
    defaultAction: 'Default slide effect',
    modifyTrackColor: 'Customize track colors',
    modifyHintContent: 'Customize notifition content',
    modifySuccessfulColor: 'Customize successful theme color',
    modifySucessfulTextColor: 'Customize successful text color',
    modifySucessfulHintContent: 'Customize Hint content after completing',
    modifyMaxIncorrectTimes: 'Customize maxium number of errors',
    modifySliderContent: 'Customize the content of slider',
    modifyCallBack: 'Customize the callback function',
    openRadiusEffect: 'Open the effect of radius',
    isAnimation: 'Turn on/down animation effect',
    SlideVerify: 'Slide the slider to verify',
    sucessfulText: 'Yeah! Validation verification',
  },
});
</script>

<template>
  <!-- 默认效果 -->
  <demo-block :title="t('defaultAction')">
    <van-verify> </van-verify>
  </demo-block>
  <!-- 自定义轨道颜色 -->
  <demo-block :title="t('modifyTrackColor')">
    <van-verify track-color="pink"> </van-verify>
  </demo-block>
  <!-- 自定义提示文字 -->
  <demo-block :title="t('modifyHintContent')">
    <van-verify :text="t('SlideVerify')"> </van-verify>
  </demo-block>
  <!-- 成功之后主题色 -->
  <demo-block :title="t('modifySuccessfulColor')">
    <van-verify sucess-color="#FAAB0C"> </van-verify>
  </demo-block>
  <!-- 成功之后的提示文字颜色 -->
  <demo-block :title="t('modifySucessfulTextColor')">
    <van-verify success-text-color="#161618"> </van-verify>
  </demo-block>
  <!-- 成功之后的提示文字 -->
  <demo-block :title="t('modifySucessfulHintContent')">
    <van-verify :success-text-content="t('sucessfulText')"> </van-verify>
  </demo-block>
  <!-- 最大错误次数提示 -->
  <demo-block :title="t('modifyMaxIncorrectTimes')">
    <van-verify :max-incorrect-times="1"> </van-verify>
  </demo-block>

  <!-- 自定义回调函数 -->
  <demo-block :title="t('modifyCallBack')">
    <van-verify
      :success-func="
        () => {
          console.log('验证成功');
        }
      "
      :fail-func="
        () => {
          console.log('验证失败');
        }
      "
    ></van-verify>
  </demo-block>
  <!-- 打开/关闭动画效果 -->
  <demo-block :title="t('isAnimation')">
    <van-verify :is-animation="false"></van-verify>
  </demo-block>
  <demo-block :title="t('modifySliderContent')">
    <van-verify>
      <template #default>
        <Icon name="arrow" />
      </template>
      <template #successSlot>
        <Icon name="success" />
      </template>
    </van-verify>
  </demo-block>
  <demo-block :title="t('modifySliderContent')">
    <van-verify>
      <template #default>
        <img
          src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png"
          alt=""
        />
      </template>
      <template #successSlot>
        <img
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          alt=""
        />
      </template>
    </van-verify>
  </demo-block>
</template>

<style lang="less" scoped>
.van-doc-demo-block {
  padding: 0 4px;
  margin: 0 2px;
}
</style>
