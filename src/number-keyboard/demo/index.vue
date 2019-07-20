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

    <demo-block :title="$t('bindValue')">
      <van-field
        readonly
        clickable
        :value="value"
        :placeholder="$t('clickToInput')"
        @touchstart.native.stop="keyboard = 'bindValue'"
      />

      <van-number-keyboard
        v-model="value"
        :show="keyboard === 'bindValue'"
        maxlength="6"
        safe-area-inset-bottom
        @blur="keyboard = ''"
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
      input: '输入',
      bindValue: '双向绑定',
      clickToInput: '点此输入'
    },
    'en-US': {
      default: 'Default style',
      custom: 'Custom style',
      button1: 'Show Default Keyboard',
      button2: 'Show Custom Keyboard',
      close: 'Close',
      input: 'Input',
      bindValue: 'Bind Value',
      clickToInput: 'Click To Input'
    }
  },

  data() {
    return {
      value: '',
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
@import "../../style/var";

.demo-number-keyboard {
  .van-button {
    margin-left: @padding-md;
  }
}
</style>
