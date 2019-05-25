<template>
  <demo-section>
    <demo-block :title="$t('default')">
      <van-button
        type="primary"
        @touchstart.stop="keyboard = 'default'"
      >
        {{ $t('button1') }}
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'default'"
        :close-button-text="$t('close')"
        extra-key="."
        safe-area-inset-bottom
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </demo-block>

    <demo-block :title="$t('custom')">
      <van-button
        type="primary"
        @touchstart.stop="keyboard = 'custom'"
      >
        {{ $t('button2') }}
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'custom'"
        :close-button-text="$t('close')"
        theme="custom"
        extra-key="."
        safe-area-inset-bottom
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      default: '默认样式',
      custom: '自定义样式',
      button1: '弹出默认键盘',
      button2: '弹出自定义键盘',
      close: '完成',
      input: '输入'
    },
    'en-US': {
      default: 'Default style',
      custom: 'Custom style',
      button1: 'Show Default Keyboard',
      button2: 'Show Custom Keyboard',
      close: 'Close',
      input: 'Input'
    }
  },

  data() {
    return {
      keyboard: 'default'
    };
  },

  methods: {
    onInput(value) {
      this.$toast(`${this.$t('input')}: ${value}`);
    },

    onDelete() {
      this.$toast(this.$t('delete'));
    }
  }
};
</script>

<style lang="less">
.demo-number-keyboard {
  .van-button {
    margin-left: 15px;
  }
}
</style>
