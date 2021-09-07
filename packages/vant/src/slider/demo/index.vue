<script setup lang="ts">
import VanSlider from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    text: '当前值：',
    title1: '基础用法',
    title2: '双滑块',
    title3: '指定选择范围',
    title4: '禁用',
    title5: '指定步长',
    vertical: '垂直方向',
    customStyle: '自定义样式',
    customButton: '自定义按钮',
  },
  'en-US': {
    text: 'Current value: ',
    title1: 'Basic Usage',
    title2: 'Dual thumb mode',
    title3: 'Range',
    title4: 'Disabled',
    title5: 'Step size',
    vertical: 'Vertical',
    customStyle: 'Custom Style',
    customButton: 'Custom Button',
  },
});

const value1 = ref(50);
const value2 = ref([20, 60]);
const value3 = ref(0);
const value4 = ref(50);
const value5 = ref(50);
const value6 = ref(50);
const value7 = ref(50);
const value8 = ref(50);
const value9 = ref([20, 60]);

const onChange = (value: string) => Toast(t('text') + value);
</script>

<template>
  <demo-block :title="t('title1')">
    <van-slider v-model="value1" @change="onChange" />
  </demo-block>

  <demo-block :title="t('title2')">
    <van-slider range v-model="value2" @change="onChange" />
  </demo-block>

  <demo-block :title="t('title3')">
    <van-slider v-model="value3" :min="-50" :max="50" @change="onChange" />
  </demo-block>

  <demo-block :title="t('title4')">
    <van-slider v-model="value4" disabled />
  </demo-block>

  <demo-block :title="t('title5')">
    <van-slider v-model="value5" :step="10" @change="onChange" />
  </demo-block>

  <demo-block :title="t('customStyle')">
    <van-slider
      v-model="value6"
      bar-height="4px"
      active-color="#ee0a24"
      @change="onChange"
    />
  </demo-block>

  <demo-block :title="t('customButton')">
    <van-slider v-model="value7" active-color="#ee0a24">
      <template #button>
        <div class="custom-button">{{ value7 }}</div>
      </template>
    </van-slider>
  </demo-block>

  <demo-block :title="t('vertical')">
    <div :style="{ height: '150px', paddingLeft: '30px' }">
      <van-slider v-model="value8" vertical @change="onChange" />
      <van-slider
        v-model="value9"
        range
        vertical
        style="margin-left: 100px"
        @change="onChange"
      />
    </div>
  </demo-block>
</template>

<style lang="less">
.demo-slider {
  background: var(--van-white);
  user-select: none;

  .van-doc-demo-block {
    padding: 0 var(--van-padding-md) 20px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: var(--van-red);
    border-radius: 100px;
  }
}
</style>
