<template>
  <demo-section>
    <demo-block :title="t('default')">
      <van-button type="primary" @touchstart.stop="keyboard = 'default'">
        {{ t('button1') }}
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'default'"
        :close-button-text="t('close')"
        extra-key="."
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </demo-block>

    <demo-block :title="t('custom')">
      <van-button type="info" @touchstart.stop="keyboard = 'custom'">
        {{ t('button2') }}
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'custom'"
        :close-button-text="t('close')"
        theme="custom"
        extra-key="."
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </demo-block>

    <demo-block :title="t('bindValue')">
      <van-field
        readonly
        clickable
        :value="value"
        :placeholder="t('clickToInput')"
        @touchstart.native.stop="keyboard = 'bindValue'"
      />

      <van-number-keyboard
        v-model="value"
        :show="keyboard === 'bindValue'"
        maxlength="6"
        @blur="keyboard = ''"
      />
    </demo-block>

    <demo-block :title="t('extraKey')">
      <van-button plain type="primary" @touchstart.stop="keyboard = 'extraKey'">
        {{ t('button3') }}
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'extraKey'"
        :close-button-text="t('close')"
        extra-key="X"
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </demo-block>

    <demo-block :title="t('title')">
      <van-button plain type="info" @touchstart.stop="keyboard = 'title'">
        {{ t('button4') }}
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'title'"
        :close-button-text="t('close')"
        :title="t('title')"
        extra-key="."
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
      button3: '弹出身份证号码键盘',
      button4: '弹出自定义标题键盘',
      close: '完成',
      input: '输入',
      bindValue: '双向绑定',
      clickToInput: '点此输入',
      extraKey: '左下角按键内容',
      title: '键盘标题',
    },
    'en-US': {
      default: 'Default style',
      custom: 'Custom style',
      button1: 'Show Default Keyboard',
      button2: 'Show Custom Keyboard',
      button3: 'Show Id Card Number Keyboard',
      button4: 'Show Custom Title Keyboard',
      close: 'Close',
      input: 'Input',
      bindValue: 'Bind Value',
      clickToInput: 'Click To Input',
      extraKey: 'Bottom Left Button Content',
      title: 'Keyboard Title',
    },
  },

  data() {
    return {
      value: '',
      keyboard: 'default',
    };
  },

  methods: {
    onInput(value) {
      this.$toast(`${this.t('input')}: ${value}`);
    },

    onDelete() {
      this.$toast(this.t('delete'));
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-number-keyboard {
  padding-bottom: 300px;

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
