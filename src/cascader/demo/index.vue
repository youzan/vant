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

    <demo-block card :title="t('customFieldNames')">
      <van-field
        v-model="customFieldNames.result"
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="customFieldNames.show = true"
      />
      <van-popup
        v-model="customFieldNames.show"
        round
        position="bottom"
        get-container="body"
        safe-area-inset-bottom
      >
        <van-cascader
          v-model="customFieldNames.value"
          :title="t('selectArea')"
          :options="customFieldOptions"
          :field-names="fieldNames"
          @close="customFieldNames.show = false"
          @finish="onFinish('customFieldNames', $event)"
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
import zhCNOptions from './area-zh-CN';
import enUSOptions from './area-en-US';
import { deepClone } from '../../utils/deep-clone';

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
      customFieldNames: '自定义字段名',
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
      customFieldNames: 'Custom Field Names',
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
      customFieldNames: {
        show: false,
        value: null,
        result: '',
      },
      fieldNames: {
        text: 'name',
        value: 'code',
        children: 'items',
      },
    };
  },

  computed: {
    customFieldOptions() {
      const options = deepClone(this.t('options'));
      const adjustFieldName = (item) => {
        if ('text' in item) {
          item.name = item.text;
          delete item.text;
        }
        if ('value' in item) {
          item.code = item.value;
          delete item.value;
        }
        if ('children' in item) {
          item.items = item.children;
          delete item.children;
          item.items.forEach(adjustFieldName);
        }
      };

      options.forEach(adjustFieldName);
      return options;
    },
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
      const result = selectedOptions
        .map((option) => option.text || option.name)
        .join('/');

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
