<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-slider
        v-model="value1"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-slider
        v-model="value2"
        :min="10"
        :max="90"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-slider
        v-model="value3"
        disabled
      />
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-slider
        v-model="value4"
        :step="10"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="$t('customStyle')">
      <van-slider
        v-model="value5"
        bar-height="4px"
        active-color="#f44"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="$t('customButton')">
      <van-slider
        v-model="value6"
        active-color="#f44"
      >
        <div
          slot="button"
          class="custom-button"
        >
          {{ value6 }}
        </div>
      </van-slider>
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
      text: '当前值：'
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Range',
      title3: 'Disabled',
      title4: 'Step size',
      customStyle: 'Custom Style',
      customButton: 'Custom Button',
      text: 'Current value: '
    }
  },

  data() {
    return {
      value1: 50,
      value2: 50,
      value3: 50,
      value4: 50,
      value5: 50,
      value6: 50
    };
  },

  methods: {
    onChange(value) {
      this.$toast(this.$t('text') + value);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-slider {
  user-select: none;

  .van-slider {
    margin: 0 15px 30px;
  }

  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    border-radius: 100px;
    background-color: @red;
  }

  .van-doc-demo-block__title {
    padding-top: 25px;
  }
}
</style>
