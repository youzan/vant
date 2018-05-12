<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-password-input
        :value="value"
        :info="$t('info')"
        @focus="showKeyboard = true"
      />

      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      info: '密码为 6 位数字'
    },
    'en-US': {
      info: 'Some tips'
    }
  },

  data() {
    return {
      value: '123',
      showKeyboard: true
    };
  },

  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>
