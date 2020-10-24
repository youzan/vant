<template>
  <van-cell is-link @touchstart.stop="keyboard = 'default'">
    {{ t('button1') }}
  </van-cell>
  <van-cell is-link @touchstart.stop="keyboard = 'custom'">
    {{ t('button2') }}
  </van-cell>
  <van-cell is-link @touchstart.stop="keyboard = 'extraKey'">
    {{ t('button3') }}
  </van-cell>
  <van-cell is-link @touchstart.stop="keyboard = 'title'">
    {{ t('button4') }}
  </van-cell>
  <van-cell is-link @touchstart.stop="keyboard = 'multiExtraKey'">
    {{ t('button5') }}
  </van-cell>
  <van-field
    readonly
    clickable
    :label="t('bindValue')"
    :model-value="value"
    :placeholder="t('clickToInput')"
    @touchstart.stop="keyboard = 'bindValue'"
  />

  <van-number-keyboard
    :show="keyboard === 'default'"
    @blur="keyboard = ''"
    @input="onInput"
    @delete="onDelete"
  />

  <van-number-keyboard
    :show="keyboard === 'custom'"
    :close-button-text="t('close')"
    theme="custom"
    extra-key="."
    @blur="keyboard = ''"
    @input="onInput"
    @delete="onDelete"
  />

  <van-number-keyboard
    :show="keyboard === 'extraKey'"
    :close-button-text="t('close')"
    extra-key="X"
    @blur="keyboard = ''"
    @input="onInput"
    @delete="onDelete"
  />

  <van-number-keyboard
    :show="keyboard === 'title'"
    :close-button-text="t('close')"
    :title="t('title')"
    extra-key="."
    @blur="keyboard = ''"
    @input="onInput"
    @delete="onDelete"
  />

  <van-number-keyboard
    :show="keyboard === 'multiExtraKey'"
    :close-button-text="t('close')"
    theme="custom"
    :extra-key="['00', '.']"
    @blur="keyboard = ''"
    @input="onInput"
    @delete="onDelete"
  />

  <van-number-keyboard
    v-model="value"
    :show="keyboard === 'bindValue'"
    maxlength="6"
    @blur="keyboard = ''"
  />
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      close: '完成',
      input: '输入',
      title: '键盘标题',
      button1: '弹出默认键盘',
      button2: '弹出带右侧栏的键盘',
      button3: '弹出身份证号键盘',
      button4: '弹出带标题的键盘',
      button5: '弹出配置多个按键的键盘',
      bindValue: '双向绑定',
      clickToInput: '点此输入',
      extraKey: '左下角按键内容',
      multiExtraKey: '配置多个按键',
    },
    'en-US': {
      close: 'Close',
      input: 'Input',
      title: 'Keyboard Title',
      button1: 'Show Default Keyboard',
      button2: 'Show Keyboard With Sidebar',
      button3: 'Show IdNumber Keyboard',
      button4: 'Show Keyboard With Title',
      button5: 'Show Keyboard With Multiple ExtraKey',
      bindValue: 'Bind Value',
      clickToInput: 'Click To Input',
      extraKey: 'IdNumber Keyboard',
      multiExtraKey: 'Multiple ExtraKey',
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
