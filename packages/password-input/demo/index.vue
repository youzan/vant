<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-password-input
        :value="value1"
        :info="$t('info')"
        @focus="keyboard = 'value1'"
      />

      <van-number-keyboard
        :show="!!keyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="keyboard = ''"
      />
    </demo-block>

    <demo-block :title="$t('removeMask')">
      <van-password-input
        :value="value2"
        :mask="false"
        @focus="keyboard = 'value2'"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      info: '密码为 6 位数字',
      removeMask: '明文展示'
    },
    'en-US': {
      info: 'Some tips',
      removeMask: 'Remove Mask'
    }
  },

  data() {
    return {
      value1: '123',
      value2: '123',
      keyboard: 'value1'
    };
  },

  methods: {
    onInput(key) {
      const { keyboard } = this;
      this[keyboard] = (this[keyboard] + key).slice(0, 6);
    },

    onDelete() {
      const { keyboard } = this;
      this[keyboard] = this[keyboard].slice(0, this[keyboard].length - 1);
    }
  }
};
</script>
