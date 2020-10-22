<template>
  <van-field
    readonly
    clickable
    name="picker"
    :label="t('picker')"
    :model-value="value"
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
export default {
  i18n: {
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
  },

  data() {
    return {
      value: '',
      showPicker: false,
    };
  },

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },

    onCancel() {
      this.showPicker = false;
    },
  },
};
</script>
