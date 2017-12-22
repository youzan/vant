<template>
  <demo-section>
    <demo-block :title="$t('default')">
      <van-button @touchstart.native.stop="keyboard = 'default'">
        {{ $t('button1') }}
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'default'"
        :closeButtonText="$t('close')"
        extraKey="."
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </demo-block>

    <demo-block :title="$t('custom')">
      <van-button @touchstart.native.stop="keyboard = 'custom'">
        {{ $t('button2') }}
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'custom'"
        :closeButtonText="$t('close')"
        theme="custom"
        extraKey="."
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
      close: '完成'
    },
    'en-US': {
      default: 'Default style',
      custom: 'Custom style',
      button1: 'Show Default Keyboard',
      button2: 'Show Custom Keyboard',
      close: 'Close'
    }
  },

  data() {
    return {
      keyboard: 'default'
    };
  },

  methods: {
    onInput(value) {
      Toast('Input: ' + value);
    },
    onDelete() {
      Toast('Delete');
    }
  }
};
</script>

<style lang="postcss">
.demo-number-keyboard {
  .van-button {
    margin-left: 15px;
  }
}
</style>
