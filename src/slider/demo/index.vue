<template>
  <demo-block :title="t('title1')">
    <van-slider v-model="value1" @change="onChange" />
  </demo-block>

  <demo-block :title="t('title2')">
    <van-slider range v-model="value2" @change="onChange" />
  </demo-block>

  <demo-block :title="t('title3')">
    <van-slider v-model="value3" :min="-50" :max="50" @change="onChange" />
  </demo-block>

  <demo-block :title="t('title4')">
    <van-slider v-model="value4" disabled />
  </demo-block>

  <demo-block :title="t('title5')">
    <van-slider v-model="value5" :step="10" @change="onChange" />
  </demo-block>

  <demo-block :title="t('customStyle')">
    <van-slider
      v-model="value6"
      bar-height="4px"
      active-color="#ee0a24"
      @change="onChange"
    />
  </demo-block>

  <demo-block :title="t('customButton')">
    <van-slider v-model="value7" active-color="#ee0a24">
      <template #button>
        <div class="custom-button">{{ value7 }}</div>
      </template>
    </van-slider>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('vertical')">
    <div :style="{ height: '150px', paddingLeft: '30px' }">
      <van-slider v-model="value8" vertical @change="onChange" />
      <van-slider
        v-model="value9"
        range
        vertical
        style="margin-left: 100px;"
        @change="onChange"
      />
    </div>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '当前值：',
      title1: '基础用法',
      title2: '双滑块',
      title3: '指定选择范围',
      title4: '禁用',
      title5: '指定步长',
      vertical: '垂直方向',
      customStyle: '自定义样式',
      customButton: '自定义按钮',
    },
    'en-US': {
      text: 'Current value: ',
      title1: 'Basic Usage',
      title2: 'Dual thumb mode',
      title3: 'Range',
      title4: 'Disabled',
      title5: 'Step size',
      vertical: 'Vertical',
      customStyle: 'Custom Style',
      customButton: 'Custom Button',
    },
  },

  data() {
    return {
      value1: 50,
      value2: [20, 60],
      value3: 0,
      value4: 50,
      value5: 50,
      value6: 50,
      value7: 50,
      value8: 50,
      value9: [20, 60],
    };
  },

  methods: {
    onChange(value) {
      this.$toast(this.t('text') + value);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-slider {
  background: @white;
  user-select: none;

  .van-doc-demo-block {
    padding: 0 @padding-md 20px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: @red;
    border-radius: 100px;
  }
}
</style>
