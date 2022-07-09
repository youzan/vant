<script setup lang="ts">
import VanForm from '../../form';
import VanField from '../../field';
import VanButton from '../../button';
import VanCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { FieldValidateError } from '../../field/types';
import { closeToast, showLoadingToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    label: '文本',
    title: '校验规则',
    submit: '提交',
    message: '请输入正确内容',
    invalid: (val: string) => `${val} 不合法，请重新输入`,
    pattern: '正则校验',
    validator: '函数校验',
    validating: '验证中...',
    asyncValidator: '异步函数校验',
    validatorMessage: '校验函数返回错误提示',
  },
  'en-US': {
    label: 'Label',
    title: 'Validate Rules',
    submit: 'Submit',
    message: 'Error message',
    invalid: (val: string) => `${val} is invalid`,
    pattern: 'Use pattern',
    validator: 'Use validator',
    validating: 'Validating...',
    asyncValidator: 'Use async validator',
    validatorMessage: 'Use validator to return message',
  },
});

const value1 = ref('');
const value2 = ref('');
const value3 = ref('abc');
const value4 = ref('');
const pattern = /\d{6}/;

const validator = (val: string) => /1\d{10}/.test(val);

const validatorMessage = (val: string) => t('invalid', val);

const asyncValidator = (val: string) =>
  new Promise<boolean>((resolve) => {
    showLoadingToast(t('validating'));

    setTimeout(() => {
      closeToast();
      resolve(val === '1234');
    }, 1000);
  });

const onSubmit = (values: Record<string, string>) => {
  console.log('submit', values);
};

const onFailed = (errorInfo: {
  values: Record<string, string>;
  errors: FieldValidateError[];
}) => {
  console.log('failed', errorInfo);
};
</script>

<template>
  <demo-block :title="t('title')">
    <van-form @sumbit="onSubmit" @failed="onFailed">
      <van-cell-group inset>
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
          name="validatorMessage"
          :label="t('label')"
          :rules="[{ validator: validatorMessage }]"
          :placeholder="t('validatorMessage')"
        />
        <van-field
          v-model="value4"
          name="asyncValidator"
          :label="t('label')"
          :rules="[{ validator: asyncValidator, message: t('message') }]"
          :placeholder="t('asyncValidator')"
        />
      </van-cell-group>
      <div style="margin: 16px 16px 0">
        <van-button round block type="primary" native-type="submit">
          {{ t('submit') }}
        </van-button>
      </div>
    </van-form>
  </demo-block>
</template>
