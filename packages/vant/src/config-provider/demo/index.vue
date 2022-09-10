<script setup lang="ts">
import { ref, computed } from 'vue';
import VanCell from '../../cell';
import VanForm from '../../form';
import VanField from '../../field';
import VanRate from '../../rate';
import VanSwitch from '../../switch';
import VanSlider from '../../slider';
import VanButton from '../../button';
import VanConfigProvider from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    rate: '评分',
    slider: '滑块',
    switch: '开关',
    submit: '提交',
    customTheme: '定制主题',
    defaultTheme: '默认主题',
    darkMode: '深色模式',
    switchDarkMode: '切换深色模式',
  },
  'en-US': {
    rate: 'Rate',
    slider: 'Slider',
    switch: 'Switch',
    submit: 'Submit',
    customTheme: 'Custom Theme',
    defaultTheme: 'DefaultTheme',
    darkMode: 'Dark Mode',
    switchDarkMode: 'Switch Dark Mode',
  },
});

const darkMode = ref(false);
const theme = computed(() => (darkMode.value ? 'dark' : 'light'));
const rate = ref(4);
const slider = ref(50);
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackground: '#07c160',
  buttonPrimaryBackground: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
};
</script>

<template>
  <div :style="{ background: darkMode ? 'black' : '', minHeight: '100vh' }">
    <demo-block :title="t('darkMode')">
      <van-cell center :title="t('switchDarkMode')">
        <template #right-icon>
          <van-switch v-model="darkMode" />
        </template>
      </van-cell>
    </demo-block>

    <demo-block :title="t('defaultTheme')">
      <van-config-provider :theme="theme">
        <van-form>
          <van-field name="rate" :label="t('rate')">
            <template #input>
              <van-rate v-model="rate" />
            </template>
          </van-field>

          <van-field name="slider" :label="t('slider')">
            <template #input>
              <van-slider v-model="slider" />
            </template>
          </van-field>

          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
              {{ t('submit') }}
            </van-button>
          </div>
        </van-form>
      </van-config-provider>
    </demo-block>

    <demo-block :title="t('customTheme')">
      <van-config-provider :theme="theme" :theme-vars="themeVars">
        <van-form>
          <van-field name="rate" :label="t('rate')">
            <template #input>
              <van-rate v-model="rate" />
            </template>
          </van-field>

          <van-field name="slider" :label="t('slider')">
            <template #input>
              <van-slider v-model="slider" />
            </template>
          </van-field>

          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
              {{ t('submit') }}
            </van-button>
          </div>
        </van-form>
      </van-config-provider>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-collapse {
  .van-icon-question-o {
    margin-left: 5px;
    color: var(--van-blue);
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
