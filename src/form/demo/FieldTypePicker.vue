<template>
  <van-field
    readonly
    clickable
    name="picker"
    :value="value"
    :label="t('picker')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  >
    <van-popup
      v-model="showPicker"
      slot="extra"
      position="bottom"
      get-container="body"
    >
      <van-picker
        show-toolbar
        :columns="t('textColumns')"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </van-field>
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
