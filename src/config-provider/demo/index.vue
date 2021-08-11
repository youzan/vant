<script setup lang="ts">
import { useTranslate } from '@demo/use-translate';
import { reactive } from '@vue/reactivity';

const i18n = {
  'zh-CN': {
    rate: '评分',
    slider: '滑块',
    switch: '开关',
    submit: '提交',
    customTheme: '定制主题',
    defaultTheme: '默认主题',
  },
  'en-US': {
    rate: 'Rate',
    slider: 'Slider',
    switch: 'Switch',
    submit: 'Submit',
    customTheme: 'Custom Theme',
    defaultTheme: 'DefaultTheme',
  },
};

const t = useTranslate(i18n);
const state = reactive({
  rate: 4,
  slider: 50,
  switchChecked: true,
});

const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
  buttonPrimaryBackgroundColor: '#07c160',
};
</script>

<template>
  <demo-block :title="t('defaultTheme')">
    <van-form>
      <van-field name="rate" :label="t('rate')">
        <template #input>
          <van-rate v-model="state.rate" />
        </template>
      </van-field>

      <van-field name="slider" :label="t('slider')">
        <template #input>
          <van-slider v-model="state.slider" />
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          {{ t('submit') }}
        </van-button>
      </div>
    </van-form>
  </demo-block>

  <demo-block :title="t('customTheme')">
    <van-config-provider :theme-vars="themeVars">
      <van-form>
        <van-field name="rate" :label="t('rate')">
          <template #input>
            <van-rate v-model="state.rate" />
          </template>
        </van-field>

        <van-field name="slider" :label="t('slider')">
          <template #input>
            <van-slider v-model="state.slider" />
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
</template>

<style lang="less">
@import '../../style/var';

.demo-collapse {
  .van-icon-question-o {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
