<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-search v-model="value" :placeholder="$t('placeholder')" />
    </demo-block>

    <demo-block :title="$t('listenToEvents')">
      <form action="/">
        <van-search
          v-model="value"
          :placeholder="$t('placeholder')"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </demo-block>

    <demo-block :title="$t('customButton')">
      <van-search
        v-model="value"
        :placeholder="$t('placeholder')"
        show-action
        shape="round"
        :label="$t('label')"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">{{ $t('search') }}</div>
        </template>
      </van-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '地址',
      placeholder: '请输入搜索关键词',
      customButton: '自定义按钮',
      listenToEvents: '事件监听'
    },
    'en-US': {
      label: 'Address',
      placeholder: 'Placeholder',
      customButton: 'Custom Action Button',
      listenToEvents: 'Listen to Events'
    }
  },

  data() {
    return {
      value: ''
    };
  },

  methods: {
    onSearch() {
      this.$toast(this.value);
    },

    onCancel() {
      this.$toast(this.$t('cancel'));
    }
  }
};
</script>
