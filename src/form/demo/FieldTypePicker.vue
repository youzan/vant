<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    picker: '选择器',
    placeholder: '点击选择城市',
    textColumns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  },
  'en-US': {
    picker: 'Picker',
    placeholder: 'Select city',
    textColumns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
  },
};

const t = useTranslate(i18n);
const result = ref('');
const showPicker = ref(false);

const onConfirm = (value: string) => {
  result.value = value;
  showPicker.value = false;
};

const onCancel = () => {
  showPicker.value = false;
};
</script>

<template>
  <van-field
    v-model="result"
    is-link
    readonly
    name="picker"
    :label="t('picker')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" round position="bottom" teleport="body">
    <van-picker
      :columns="t('textColumns')"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </van-popup>
</template>
