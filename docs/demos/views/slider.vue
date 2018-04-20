<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-slider v-model="value1"/>
      <van-row>
        <van-col span="24">
          <van-stepper v-model="value1" />
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-slider
        v-model="value2"
        :min="min"
        :max="max"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-slider v-model="value3" disabled />
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-slider
        v-model="value4"
        @change="handleChange"
        @after-change="handleAfterChange"
      />
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-slider
        v-model="value5"
        pivot-color="#333"
        loaded-bar-color="red"
        bar-color="blue"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '基本用法',
      title2: '最大最小值',
      title3: '禁用',
      title4: '事件',
      title5: '自定义样式'
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Max && Min',
      title3: 'Disabed',
      title4: 'Event',
      title5: 'Customized style'
    }
  },
  data() {
    return {
      value1: 50,
      value2: 50,
      value3: 50,
      value4: 50,
      value5: 50,
      min: 10,
      max: 90
    }
  },
  methods: {
    handleChange(value) {
      console.log('handleChange:', value)
    },
    handleAfterChange(value) {
      console.log('handleAfterChange:', value)
    }
  }
};
</script>

<style lang="postcss">
  .van-row {
    padding-top: 20px;
    .van-col {
      text-align: center;
    }
  }
</style>
