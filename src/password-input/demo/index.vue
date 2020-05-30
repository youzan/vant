<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-password-input
        :value="value1"
        :info="t('info')"
        :focused="keyboard === 'value1'"
        @focus="keyboard = 'value1'"
      />

      <van-number-keyboard
        :show="!!keyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="keyboard = ''"
      />
    </demo-block>

    <demo-block :title="t('customLength')">
      <van-password-input
        :value="value2"
        :length="4"
        gutter="15"
        :focused="keyboard === 'value2'"
        @focus="keyboard = 'value2'"
      />
    </demo-block>

    <demo-block :title="t('removeMask')">
      <van-password-input
        :value="value3"
        :mask="false"
        :focused="keyboard === 'value3'"
        @focus="keyboard = 'value3'"
      />
    </demo-block>

    <demo-block :title="t('hintError')">
      <van-password-input
        :value="value4"
        :error-info="errorInfo"
        :focused="keyboard === 'value4'"
        @focus="keyboard = 'value4'"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      info: '密码为 6 位数字',
      customLength: '自定义长度',
      removeMask: '明文展示',
      hintError: '错误提示',
      errorInfo: '密码错误',
    },
    'en-US': {
      info: 'Some tips',
      customLength: 'Custom Length',
      removeMask: 'Remove Mask',
      hintError: 'Hint Error',
      errorInfo: 'Password Mistake',
    },
  },

  data() {
    return {
      value1: '123',
      value2: '123',
      value3: '123',
      value4: '123',
      keyboard: 'value1',
      errorInfo: '',
    };
  },

  methods: {
    onInput(key) {
      const { keyboard } = this;
      this[keyboard] = (this[keyboard] + key).slice(0, 6);
      if (this[keyboard].length === 6) {
        this.errorInfo = this.t('errorInfo');
      } else {
        this.errorInfo = '';
      }
    },

    onDelete() {
      const { keyboard } = this;
      this[keyboard] = this[keyboard].slice(0, this[keyboard].length - 1);
    },
  },
};
</script>
