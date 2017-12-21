<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button @touchstart.native.stop="showKeyboard = true">
        {{ $t('button1') }}
      </van-button>

      <van-number-keyboard
        :show="showKeyboard"
        :closeButtonText="$t('close')"
        theme="custom"
        extraKey="."
        @blur="showKeyboard = false"
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
      button1: '弹出键盘',
      button2: '收起键盘',
      close: '完成'
    },
    'en-US': {
      button1: 'Show Keyboard',
      button2: 'Hide Keyboard',
      close: 'Close'
    }
  },

  data() {
    return {
      showKeyboard: true
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
}
</script>


<style lang="postcss">
.demo-number-keyboard {
  .van-button {
    margin-left: 15px;
  }
}
</style>
