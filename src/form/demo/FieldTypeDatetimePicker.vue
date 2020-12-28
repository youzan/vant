<template>
  <van-field
    v-model="value"
    readonly
    clickable
    name="datetimePicker"
    :label="t('label')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" round position="bottom" teleport="body">
    <van-datetime-picker type="time" @confirm="onConfirm" @cancel="onCancel" />
  </van-popup>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    label: '时间选择',
    placeholder: '点击选择时间',
  },
  'en-US': {
    label: 'Datetime Picker',
    placeholder: 'Select time',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      value: '',
      showPicker: false,
    });

    const onConfirm = (time) => {
      state.value = time;
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
