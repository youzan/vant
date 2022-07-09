<script setup lang="ts">
import VanCell from '../../cell';
import VanField from '../../field';
import VanNumberKeyboard from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    close: '完成',
    input: '输入',
    title: '键盘标题',
    button1: '弹出默认键盘',
    button2: '弹出带右侧栏的键盘',
    button3: '弹出身份证号键盘',
    button4: '弹出带标题的键盘',
    button5: '弹出配置多个按键的键盘',
    button6: '弹出配置随机数字的键盘',
    bindValue: '双向绑定',
    clickToInput: '点此输入',
    extraKey: '左下角按键内容',
    multiExtraKey: '配置多个按键',
    randomKeyOrder: '随机数字键盘',
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
    button6: 'Show Keyboard With Random Key Order',
    bindValue: 'Bind Value',
    clickToInput: 'Click To Input',
    extraKey: 'IdNumber Keyboard',
    multiExtraKey: 'Multiple ExtraKey',
    randomKeyOrder: 'Random Key Order',
  },
});

const value = ref('');
const keyboard = ref('default');

const onInput = (value: string) => showToast(`${t('input')}: ${value}`);
const onDelete = () => showToast(t('delete'));
const isTest = process.env.NODE_ENV === 'test';
</script>

<template>
  <demo-block card>
    <van-cell
      is-link
      :title="t('button1')"
      @touchstart.stop="keyboard = 'default'"
    />
    <van-cell
      is-link
      :title="t('button2')"
      @touchstart.stop="keyboard = 'custom'"
    />
    <van-cell
      is-link
      :title="t('button3')"
      @touchstart.stop="keyboard = 'extraKey'"
    />
    <van-cell
      is-link
      :title="t('button4')"
      @touchstart.stop="keyboard = 'title'"
    />
    <van-cell
      is-link
      :title="t('button5')"
      @touchstart.stop="keyboard = 'multiExtraKey'"
    />
    <van-cell
      is-link
      :title="t('button6')"
      @touchstart.stop="keyboard = 'randomKeyOrder'"
    />
    <van-field
      v-model="value"
      readonly
      clickable
      :label="t('bindValue')"
      :placeholder="t('clickToInput')"
      @touchstart.stop="keyboard = 'bindValue'"
    />
  </demo-block>

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
    v-if="!isTest"
    :show="keyboard === 'randomKeyOrder'"
    random-key-order
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

<style lang="less">
.demo-number-keyboard {
  padding-bottom: 300px;

  .van-button {
    margin-left: var(--van-padding-md);
  }
}
</style>
