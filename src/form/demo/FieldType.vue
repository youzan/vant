<template>
  <demo-block :title="$t('fieldType')">
    <van-form @submit="onSubmit">
      <van-field name="switch" :label="$t('switch')">
        <van-switch v-model="switchChecked" slot="input" size="24" />
      </van-field>

      <van-field name="checkbox" :label="$t('checkbox')">
        <van-checkbox v-model="checkbox" slot="input" shape="square" />
      </van-field>

      <van-field name="radio" :label="$t('radio')">
        <van-radio-group v-model="radio" direction="horizontal" slot="input">
          <van-radio name="1" class="demo-radio">{{ $t('radio') }} 1</van-radio>
          <van-radio name="2">{{ $t('radio') }} 2</van-radio>
        </van-radio-group>
      </van-field>

      <van-field name="rate" :label="$t('rate')">
        <van-rate v-model="rate" slot="input" />
      </van-field>

      <van-field name="slider" :label="$t('slider')">
        <van-slider v-model="slider" slot="input" />
      </van-field>

      <van-field name="stepper" :label="$t('stepper')">
        <van-stepper v-model="stepper" slot="input" />
      </van-field>

      <div style="margin: 16px;">
        <van-button type="info" round block>{{ $t('submit') }}</van-button>
      </div>
    </van-form>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      rate: '评分',
      radio: '单选框',
      submit: '提交',
      switch: '开关',
      slider: '滑块',
      stepper: '步进器',
      checkbox: '复选框',
      fieldType: '表单项类型',
      requireCheckbox: '请勾选复选框',
    },
    'en-US': {
      rate: 'Rate',
      radio: 'Radio',
      submit: 'Submit',
      switch: 'Switch',
      slider: 'Slider',
      stepper: 'Stepper',
      checkbox: 'Checkbox',
      fieldType: 'Field Type',
      requireCheckbox: 'Checkbox is required',
    },
  },

  data() {
    return {
      rate: 3,
      radio: '1',
      slider: 50,
      stepper: 1,
      checkbox: false,
      switchChecked: false,
    };
  },

  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>
