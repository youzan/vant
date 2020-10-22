<template>
  <van-field
    readonly
    clickable
    name="datetimePicker"
    :label="t('label')"
    :model-value="value"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" round position="bottom" teleport="body">
    <van-datetime-picker type="time" @confirm="onConfirm" @cancel="onCancel" />
  </van-popup>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '时间选择',
      placeholder: '点击选择时间',
    },
    'en-US': {
      label: 'Datetime Picker',
      placeholder: 'Select time',
    },
  },

  data() {
    return {
      value: '',
      showPicker: false,
    };
  },

  methods: {
    onConfirm(time) {
      console.log('time', time);
      this.value = time;
      this.showPicker = false;
    },
    onCancel() {
      this.showPicker = false;
    },
  },
};
</script>
