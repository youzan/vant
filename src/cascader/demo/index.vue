<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <van-field
        v-model="base.result"
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="base.show2 = true"
      />
      <van-popup
        v-model="base.show2"
        round
        position="bottom"
        get-container="body"
        safe-area-inset-bottom
      >
        <van-cascader
          v-model="base.value2"
          :title="t('selectArea')"
          :options="[{'text':'浙江省','value':'330000','children':[{'text':'杭州市','value':'330100','children':[{'text':'上城区','value':'330102'},{'text':'下城区','value':'330103'},{'text':'江干区','value':'330104'}]},{'text':'宁波市','value':'330200','children':[{'text':'海曙区','value':'330203'},{'text':'江北区','value':'330205'},{'text':'北仑区','value':'330206'}]},{'text':'温州市','value':'330300','children':[{'text':'鹿城区','value':'330302'},{'text':'龙湾区','value':'330303'},{'text':'瓯海区','value':'330304'}]}]},{'text':'江苏省','value':'320000','children':[{'text':'南京市','value':'320100','children':[{'text':'玄武区','value':'320102'},{'text':'秦淮区','value':'320104'},{'text':'建邺区','value':'320105'}]},{'text':'无锡市','value':'320200','children':[{'text':'锡山区','value':'320205'},{'text':'惠山区','value':'320206'},{'text':'滨湖区','value':'320211'}]},{'text':'徐州市','value':'320300','children':[{'text':'鼓楼区','value':'320302'},{'text':'云龙区','value':'320303'},{'text':'贾汪区','value':'320305'}]}]}]"
          @close="base.show = false"
          @finish="onFinish1('base', $event)"
        />
      </van-popup>
    </demo-block>
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
          @finish="onFinish1('base', $event)"
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
      optionstesttt: [{"text":"浙江省","value":"330000","children":[{"text":"杭州市","value":"330100","children":[{"text":"上城区","value":"330102"},{"text":"下城区","value":"330103"},{"text":"江干区","value":"330104"}]},{"text":"宁波市","value":"330200","children":[{"text":"海曙区","value":"330203"},{"text":"江北区","value":"330205"},{"text":"北仑区","value":"330206"}]},{"text":"温州市","value":"330300","children":[{"text":"鹿城区","value":"330302"},{"text":"龙湾区","value":"330303"},{"text":"瓯海区","value":"330304"}]}]},{"text":"江苏省","value":"320000","children":[{"text":"南京市","value":"320100","children":[{"text":"玄武区","value":"320102"},{"text":"秦淮区","value":"320104"},{"text":"建邺区","value":"320105"}]},{"text":"无锡市","value":"320200","children":[{"text":"锡山区","value":"320205"},{"text":"惠山区","value":"320206"},{"text":"滨湖区","value":"320211"}]},{"text":"徐州市","value":"320300","children":[{"text":"鼓楼区","value":"320302"},{"text":"云龙区","value":"320303"},{"text":"贾汪区","value":"320305"}]}]}],
      base: {
        show: false,
        show2: false,
        value2: '',
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

    onFinish1(type, { value, selectedOptions }) {
      const result = selectedOptions
        .map((option) => option.text || option.name)
        .join('/');

      this[type] = {
        ...this[type],
        value,
        result,
      };
      console.log(this.base.value);
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
