<template>
  <van-field
    readonly
    clickable
    name="datetimePicker"
    :value="value"
    :label="t('label')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  >
    <template #extra>
      <van-popup
        v-model="showPicker"
        round
        position="bottom"
        get-container="body"
      >
        <van-datetime-picker
          type="time"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-popup>
    </template>
  </van-field>
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
