<template>
  <demo-block ref="basicUsage" :title="t('basicUsage')">
    <van-password-input
      :value="value.basicUsage"
      :focused="current === 'basicUsage'"
      @focus="current = 'basicUsage'"
    />
  </demo-block>

  <demo-block ref="customLength" :title="t('customLength')">
    <van-password-input
      :value="value.customLength"
      :length="4"
      :focused="current === 'customLength'"
      @focus="current = 'customLength'"
    />
  </demo-block>

  <demo-block ref="addGutter" :title="t('addGutter')">
    <van-password-input
      :value="value.addGutter"
      :gutter="10"
      :focused="current === 'addGutter'"
      @focus="current = 'addGutter'"
    />
  </demo-block>

  <demo-block ref="removeMask" :title="t('removeMask')">
    <van-password-input
      :mask="false"
      :value="value.removeMask"
      :focused="current === 'removeMask'"
      @focus="current = 'removeMask'"
    />
  </demo-block>

  <demo-block ref="showInfo" :title="t('showInfo')">
    <van-password-input
      :info="t('info')"
      :value="value.showInfo"
      :error-info="errorInfo"
      :focused="current === 'showInfo'"
      @focus="current = 'showInfo'"
    />
  </demo-block>

  <van-number-keyboard
    :show="!!current"
    @blur="current = ''"
    @input="onInput"
    @delete="onDelete"
  />
</template>

<script lang="ts">
import { ComponentPublicInstance, reactive, ref, toRefs, watch } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    info: '密码为 6 位数字',
    showInfo: '提示信息',
    addGutter: '格子间距',
    errorInfo: '密码错误',
    removeMask: '明文展示',
    customLength: '自定义长度',
  },
  'en-US': {
    info: 'Some tips',
    showInfo: 'Show Info',
    addGutter: 'Add Gutter',
    errorInfo: 'Password Mistake',
    removeMask: 'Remove Mask',
    customLength: 'Custom Length',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const initialValue = {
      showInfo: '123',
      addGutter: '123',
      basicUsage: '123',
      removeMask: '123',
      customLength: '123',
    };

    const refMap = {
      showInfo: ref<ComponentPublicInstance>(),
      addGutter: ref<ComponentPublicInstance>(),
      basicUsage: ref<ComponentPublicInstance>(),
      removeMask: ref<ComponentPublicInstance>(),
      customLength: ref<ComponentPublicInstance>(),
    };

    type ValueKeys = keyof typeof initialValue;

    const state = reactive({
      value: initialValue,
      current: 'basicUsage' as ValueKeys,
      errorInfo: '',
    });

    const onInput = (key: ValueKeys) => {
      const { value, current } = state;
      const maxlegnth = current === 'customLength' ? 4 : 6;
      const newValue = (value[current] + key).slice(0, maxlegnth);

      value[current] = newValue;

      if (
        current === 'showInfo' &&
        newValue.length === 6 &&
        newValue !== '123456'
      ) {
        state.errorInfo = t('errorInfo');
      }
    };

    const onDelete = () => {
      const { value, current } = state;
      value[current] = value[current].slice(0, value[current].length - 1);

      if (current === 'showInfo') {
        state.errorInfo = '';
      }
    };

    watch(
      () => state.current,
      (value) => {
        if (value) {
          const vm = refMap[value].value;
          if (vm) {
            const { top } = vm.$el.getBoundingClientRect();
            window.scrollTo(0, window.pageYOffset + top);
          }
        }
      }
    );

    return {
      ...toRefs(state),
      ...refMap,
      t,
      onInput,
      onDelete,
    };
  },
};
</script>

<style lang="less">
.demo-password-input {
  min-height: 150vh;
}
</style>
