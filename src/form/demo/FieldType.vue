<template>
  <demo-block :title="t('fieldType')">
    <van-form @submit="onSubmit">
      <van-field name="switch" :label="t('switch')">
        <template #input>
          <van-switch v-model="switchChecked" size="20" />
        </template>
      </van-field>
      <van-field name="switch77" :label="t('switch')">
        <template #input>
          <van-switch v-model="switchChecked77" size="20" />
        </template>
      </van-field>
      <van-field label="表单项" drole="other" :required="true" rules="required"><template #input></template><template #input="scope"><van-cascader :value.sync="testcas"  title="请选择" converter="json" label-field="级联选择" data-source='[{"text":"理学","value":"理学","children":[{"text":"物理学","value":"物理学","children":[{"text":"理论物理","value":"理论物理"},{"text":"凝聚态物理","value":"凝聚态物理"},{"text":"材料物理","value":"材料物理"}]},{"text":"数学","value":"数学","children":[{"text":"基础数学","value":"基础数学"},{"text":"计算数学","value":"计算数学"},{"text":"应用数学","value":"应用数学"}]},{"text":"化学","value":"化学"}]},{"text":"工学","value":"工学","children":[{"text":"计算机科学与技术","value":"计算机科学与技术","children":[{"text":"计算机系统结构","value":"计算机系统结构"},{"text":"计算机软件与理论","value":"计算机软件与理论","disabled":true},{"text":"计算机应用技术","value":"计算机应用技术"}]},{"text":"软件工程","value":"软件工程","disabled":true},{"text":"机械工程","value":"机械工程","children":[{"text":"机械制造及其自动化","value":"机械制造及其自动化"},{"text":"机械电子工程","value":"机械电子工程"},{"text":"机械设计及理论","value":"机械设计及理论","disabled":true},{"text":"车辆工程","value":"车辆工程","disabled":true}]}]}]'></van-cascader></template></van-field>

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

        </template>
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">{{ t('radio') }} 1</van-radio>
            <van-radio name="2">{{ t('radio') }} 2</van-radio>
          </van-radio-group>
        </template>

      </van-field>

      <van-field name="radio" :label="t('radio')">
        <template #input>
          <van-radio-group :value.sync="radio666" direction="horizontal">
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
    testcas: '',
      rate: 3,
      radio: '2',
      radio666: '1',
      slider: 50,
      stepper: 1,
      uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
      checkbox: false,
      checkboxGroup: [],
      switchChecked: false,
      switchChecked77: false,
    };
  },

  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>
