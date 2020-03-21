<template>
  <demo-section>
    <demo-block :title="t('title1')">
      <van-slider v-model="value1" @change="onChange" />
    </demo-block>

    <demo-block :title="t('title2')">
      <van-slider v-model="value2" :min="-50" :max="50" @change="onChange" />
    </demo-block>

    <demo-block :title="t('title3')">
      <van-slider v-model="value3" disabled />
    </demo-block>

    <demo-block :title="t('title4')">
      <van-slider v-model="value4" :step="10" @change="onChange" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-slider
        v-model="value5"
        bar-height="4px"
        active-color="#ee0a24"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('customButton')">
      <van-slider v-model="value6" active-color="#ee0a24">
        <template #button>
          <div class="custom-button">{{ value6 }}</div>
        </template>
      </van-slider>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('vertical')">
      <div :style="{ height: '120px', paddingLeft: '30px' }">
        <van-slider v-model="value7" vertical @change="onChange" />
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '基本用法',
      title2: '指定选择范围',
      title3: '禁用',
      title4: '指定步长',
      customStyle: '自定义样式',
      customButton: '自定义按钮',
      text: '当前值：',
      vertical: '垂直方向',
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Range',
      title3: 'Disabled',
      title4: 'Step size',
      customStyle: 'Custom Style',
      customButton: 'Custom Button',
      text: 'Current value: ',
      vertical: 'Vertical',
    },
  },

  data() {
    return {
      value1: 50,
      value2: 0,
      value3: 50,
      value4: 50,
      value5: 50,
      value6: 50,
      value7: 50,
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
