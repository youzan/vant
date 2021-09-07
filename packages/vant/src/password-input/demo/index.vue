<script setup lang="ts">
import VanPasswordInput from '..';
import VanNumberKeyboard from '../../number-keyboard';
import { ref, watch } from 'vue';
import { ComponentInstance } from '../../utils';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    info: '密码为 6 位数字',
    showInfo: '提示信息',
    addGutter: '格子间距',
    errorInfo: '密码错误',
    removeMask: '明文展示',
    customLength: '自定义长度',
  },
  'en-US': {
    info: 'Some tips',
    showInfo: 'Show Info',
    addGutter: 'Add Gutter',
    errorInfo: 'Password Mistake',
    removeMask: 'Remove Mask',
    customLength: 'Custom Length',
  },
});

const initialValue = {
  showInfo: '123',
  addGutter: '123',
  basicUsage: '123',
  removeMask: '123',
  customLength: '123',
};

type ValueKeys = keyof typeof initialValue;

const values = ref(initialValue);
const current = ref<ValueKeys | null>('basicUsage');
const errorInfo = ref('');
const showInfo = ref<ComponentInstance>();
const addGutter = ref<ComponentInstance>();
const basicUsage = ref<ComponentInstance>();
const removeMask = ref<ComponentInstance>();
const customLength = ref<ComponentInstance>();

const refMap = {
  showInfo,
  addGutter,
  basicUsage,
  removeMask,
  customLength,
};

const onInput = (key: ValueKeys) => {
  if (!current.value) {
    return;
  }

  const maxlegnth = current.value === 'customLength' ? 4 : 6;
  const newValue = (values.value[current.value] + key).slice(0, maxlegnth);

  values.value[current.value] = newValue;

  if (
    current.value === 'showInfo' &&
    newValue.length === 6 &&
    newValue !== '123456'
  ) {
    errorInfo.value = t('errorInfo');
  }
};

const onDelete = () => {
  if (!current.value) {
    return;
  }

  values.value[current.value] = values.value[current.value].slice(
    0,
    values.value[current.value].length - 1
  );

  if (current.value === 'showInfo') {
    errorInfo.value = '';
  }
};

watch(current, (value) => {
  if (value) {
    const vm = refMap[value].value;
    if (vm) {
      const { top } = vm.$el.getBoundingClientRect();
      window.scrollTo(0, window.pageYOffset + top);
    }
  }
});
</script>

<template>
  <demo-block ref="basicUsage" :title="t('basicUsage')">
    <van-password-input
      :value="values.basicUsage"
      :focused="current === 'basicUsage'"
      @focus="current = 'basicUsage'"
    />
  </demo-block>

  <demo-block ref="customLength" :title="t('customLength')">
    <van-password-input
      :value="values.customLength"
      :length="4"
      :focused="current === 'customLength'"
      @focus="current = 'customLength'"
    />
  </demo-block>

  <demo-block ref="addGutter" :title="t('addGutter')">
    <van-password-input
      :value="values.addGutter"
      :gutter="10"
      :focused="current === 'addGutter'"
      @focus="current = 'addGutter'"
    />
  </demo-block>

  <demo-block ref="removeMask" :title="t('removeMask')">
    <van-password-input
      :mask="false"
      :value="values.removeMask"
      :focused="current === 'removeMask'"
      @focus="current = 'removeMask'"
    />
  </demo-block>

  <demo-block ref="showInfo" :title="t('showInfo')">
    <van-password-input
      :info="t('info')"
      :value="values.showInfo"
      :error-info="errorInfo"
      :focused="current === 'showInfo'"
      @focus="current = 'showInfo'"
    />
  </demo-block>

  <van-number-keyboard
    :show="!!current"
    @blur="current = null"
    @input="onInput"
    @delete="onDelete"
  />
</template>

<style lang="less">
.demo-password-input {
  min-height: 150vh;
}
</style>
