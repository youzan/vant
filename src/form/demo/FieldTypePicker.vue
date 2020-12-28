<template>
  <van-field
    v-model="value"
    readonly
    clickable
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

<script>
import { reactive, toRefs } from 'vue';
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

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      value: '',
      showPicker: false,
    });

    const onConfirm = (value) => {
      state.value = value;
      state.showPicker = false;
    };

    const onCancel = () => {
      state.showPicker = false;
    };

    return {
      ...toRefs(state),
      t,
      onCancel,
      onConfirm,
    };
  },
};
</script>
