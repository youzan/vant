<script setup lang="ts">
import { reactive } from 'vue';
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
const state = reactive({
  value: '',
  showPicker: false,
});

const onConfirm = (value: string) => {
  state.value = value;
  state.showPicker = false;
};

const onCancel = () => {
  state.showPicker = false;
};
</script>

<template>
  <van-field
    v-model="state.value"
    is-link
    readonly
    name="picker"
    :label="t('picker')"
    :placeholder="t('placeholder')"
    @click="state.showPicker = true"
  />
  <van-popup
    v-model:show="state.showPicker"
    round
    position="bottom"
    teleport="body"
  >
    <van-picker
      :columns="t('textColumns')"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </van-popup>
</template>
