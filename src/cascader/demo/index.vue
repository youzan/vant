<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <van-field
        v-model="base.result"
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="base.show = true"
      />
      <van-popup
        v-model="base.show"
        round
        position="bottom"
        get-container="body"
        safe-area-inset-bottom
      >
        <van-cascader
          v-model="base.value"
          :title="t('selectArea')"
          :options="t('options')"
          @close="base.show = false"
          @finish="onFinish('base', $event)"
        />
      </van-popup>
    </demo-block>

    <demo-block card :title="t('customColor')">
      <van-field
        v-model="customColor.result"
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="customColor.show = true"
      />
      <van-popup
        v-model="customColor.show"
        round
        position="bottom"
        get-container="body"
        safe-area-inset-bottom
      >
        <van-cascader
          v-model="customColor.value"
          :title="t('selectArea')"
          :options="t('options')"
          active-color="#1989fa"
          @close="customColor.show = false"
          @finish="onFinish('customColor', $event)"
        />
      </van-popup>
    </demo-block>

    <demo-block card :title="t('asyncOptions')">
      <van-field
        v-model="async.result"
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="async.show = true"
      />
      <van-popup
        v-model="async.show"
        round
        position="bottom"
        get-container="body"
        safe-area-inset-bottom
      >
        <van-cascader
          v-model="async.value"
          :title="t('selectArea')"
          :options="async.options"
          @close="async.show = false"
          @change="loadDynamicOptions"
          @finish="onFinish('async', $event)"
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
import zhCNOptions from './area-zh-CN';
import enUSOptions from './area-en-US';

export default {
  i18n: {
    'zh-CN': {
      area: '地区',
      options: zhCNOptions,
      selectArea: '请选择所在地区',
      customColor: '自定义颜色',
      asyncOptions: '异步加载选项',
      asyncOptions1: [
        {
          text: '浙江省',
          value: '330000',
          children: [],
        },
      ],
      asyncOptions2: [
        { text: '杭州市', value: '330100' },
        { text: '宁波市', value: '330200' },
      ],
    },
    'en-US': {
      area: 'Area',
      options: enUSOptions,
      selectArea: 'Select Area',
      customColor: 'Custom Color',
      asyncOptions: 'Async Options',
      asyncOptions1: [
        {
          text: 'Zhejiang',
          value: '330000',
          children: [],
        },
      ],
      asyncOptions2: [
        { text: 'Hangzhou', value: '330100' },
        { text: 'Ningbo', value: '330200' },
      ],
    },
  },

  data() {
    return {
      base: {
        show: false,
        value: '',
        result: '',
      },
      customColor: {
        show: false,
        value: null,
        result: '',
      },
      async: {
        show: false,
        value: null,
        result: '',
        options: [],
      },
    };
  },

  created() {
    this.async.options = this.t('asyncOptions1');
  },

  methods: {
    loadDynamicOptions({ value }) {
      if (value === '330000') {
        setTimeout(() => {
          this.async.options[0].children = this.t('asyncOptions2');
        }, 500);
      }
    },

    onFinish(type, { value, selectedOptions }) {
      const result = selectedOptions.map((option) => option.text).join('/');
      this[type] = {
        ...this[type],
        show: false,
        value,
        result,
      };
    },
  },
};
</script>
