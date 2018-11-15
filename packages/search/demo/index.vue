<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-search
        v-model="value"
        :placeholder="$t('placeholder')"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
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

    <demo-block :title="$t('title3')">
      <van-search
        v-model="value"
        :placeholder="$t('placeholder')"
        show-action
        @search="onSearch"
      >
        <div
          slot="action"
          @click="onSearch"
        >
          {{ $t('search') }}
        </div>
      </van-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '监听对应事件',
      title3: '自定义行动按钮',
      placeholder: '请输入搜索关键词'
    },
    'en-US': {
      title2: 'Listen to Events',
      title3: 'Custom Button',
      placeholder: 'Placeholder'
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
