<template>
  <demo-block :title="t('title')">
    <van-form validate-first @sumbit="onSubmit" @failed="onFailed">
      <van-field
        v-model="value1"
        name="pattern"
        :label="t('label')"
        :rules="[{ pattern, message: t('message') }]"
        :placeholder="t('pattern')"
      />
      <van-field
        v-model="value2"
        name="validator"
        :label="t('label')"
        :rules="[{ validator, message: t('message') }]"
        :placeholder="t('validator')"
      />
      <van-field
        v-model="value3"
        name="asyncValidator"
        :label="t('label')"
        :rules="[{ validator: asyncValidator, message: t('message') }]"
        :placeholder="t('asyncValidator')"
      />
      <div style="margin: 16px 16px 0">
        <van-button round block type="primary" native-type="submit">
          {{ t('submit') }}
        </van-button>
      </div>
    </van-form>
  </demo-block>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';

const i18n = {
  'zh-CN': {
    label: '文本',
    title: '校验规则',
    submit: '提交',
    message: '请输入正确内容',
    pattern: '正则校验',
    validator: '函数校验',
    validating: '验证中...',
    asyncValidator: '异步函数校验',
  },
  'en-US': {
    label: 'Label',
    title: 'Validate Rules',
    submit: 'Submit',
    message: 'Error message',
    pattern: 'Use pattern',
    validator: 'Use validator',
    validating: 'Validating...',
    asyncValidator: 'Use async validator',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      value1: '',
      value2: '',
      value3: '',
    });

    const validator = (val) => /1\d{10}/.test(val);

    const asyncValidator = (val) =>
      new Promise((resolve) => {
        Toast.loading(t('validating'));

        setTimeout(() => {
          Toast.clear();
          resolve(val === '1234');
        }, 1000);
      });

    const onSubmit = (values) => {
      console.log('submit', values);
    };

    const onFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return {
      ...toRefs(state),
      t,
      pattern: /\d{6}/,
      onSubmit,
      onFailed,
      validator,
      asyncValidator,
    };
  },
};
</script>
