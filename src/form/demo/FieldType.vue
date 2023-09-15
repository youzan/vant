<template>
  <demo-block :title="t('fieldType')">
    <van-form @submit="onSubmit">
      <van-field name="switch" :label="t('switch')">
        <template #input>
          <van-switch v-model="switchChecked" size="20" />
        </template>
      </van-field>

      <van-field name="checkbox" :label="t('checkbox')">
        <template #input>
          <van-checkbox v-model="checkbox" shape="square" />
        </template>
      </van-field>

      <van-field name="checkboxGroup" :label="t('checkboxGroup')">
        <template #input>
          <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <van-checkbox name="1" shape="square">
              {{ t('checkbox') }} 1
            </van-checkbox>
            <van-checkbox name="2" shape="square">
              {{ t('checkbox') }} 2
            </van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>

      <van-field name="radio" :label="t('radio')">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">{{ t('radio') }} 1</van-radio>
            <van-radio name="2">{{ t('radio') }} 2</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="stepper" :label="t('stepper')">
        <template #input>
          <van-stepper v-model="stepper" />
        </template>
      </van-field>

      <van-field name="rate" :label="t('rate')">
        <template #input>
          <van-rate v-model="rate" />
        </template>
      </van-field>

      <van-field name="slider" :label="t('slider')">
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>

      <van-field name="uploader" :label="t('uploader')">
        <template #input>
          <van-uploader v-model="uploader" max-count="2" />
        </template>
      </van-field>

      <field-type-picker />
      <field-type-datetime-picker />
      <field-type-area />
      <field-type-calendar />

      <div style="margin: 16px 16px 0">
        <van-button round block type="info" native-type="submit">
          {{ t('submit') }}
        </van-button>
      </div>
    </van-form>
  </demo-block>
</template>

<script>
import FieldTypeArea from './FieldTypeArea';
import FieldTypePicker from './FieldTypePicker';
import FieldTypeCalendar from './FieldTypeCalendar';
import FieldTypeDatetimePicker from './FieldTypeDatetimePicker';

export default {
  i18n: {
    'zh-CN': {
      rate: '评分',
      radio: '单选框',
      submit: '提交',
      switch: '开关',
      slider: '滑块',
      picker: '选择器',
      stepper: '步进器',
      checkbox: '复选框',
      uploader: '文件上传',
      fieldType: '表单项类型',
      checkboxGroup: '复选框组',
      requireCheckbox: '请勾选复选框',
    },
    'en-US': {
      rate: 'Rate',
      radio: 'Radio',
      submit: 'Submit',
      switch: 'Switch',
      slider: 'Slider',
      picker: 'Picker',
      stepper: 'Stepper',
      checkbox: 'Checkbox',
      uploader: 'Uploader',
      fieldType: 'Field Type',
      checkboxGroup: 'Checkbox Group',
      requireCheckbox: 'Checkbox is required',
    },
  },

  components: {
    FieldTypeArea,
    FieldTypePicker,
    FieldTypeCalendar,
    FieldTypeDatetimePicker,
  },

  data() {
    return {
      rate: 3,
      radio: '1',
      slider: 50,
      stepper: 1,
      uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
      checkbox: false,
      checkboxGroup: [],
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
