<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button @click="show1 = true">{{ $t('button1') }}</van-button>
      <van-action-sheet
        v-model="show1"
        :actions="actions"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-button @click="show2 = true">{{ $t('button2') }}</van-button>
      <van-action-sheet
        v-model="show2"
        :actions="actions"
        :cancel-text="$t('cancel')"
        @cancel="onCancel"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-button @click="show3 = true">{{ $t('button3') }}</van-button>
      <van-action-sheet
        v-model="show3"
        :title="$t('title')"
      >
        <p>{{ $t('content') }}</p>
      </van-action-sheet>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      button1: '弹出 ActionSheet',
      button2: '弹出带取消按钮的 ActionSheet',
      button3: '弹出带标题的 ActionSheet',
      title2: '带取消按钮的 ActionSheet',
      title3: '带标题的 ActionSheet',
      description: '描述信息',
      disabledOption: '禁用选项'
    },
    'en-US': {
      button1: 'Show ActionSheet',
      button2: 'Show ActionSheet with cancel button',
      button3: 'Show ActionSheet with title',
      title2: 'ActionSheet with cancel button',
      title3: 'ActionSheet with title',
      description: 'Description',
      disabledOption: 'Disabled Option'
    }
  },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  },

  computed: {
    actions() {
      return [
        { name: this.$t('option') },
        { name: this.$t('option'), subname: this.$t('description') },
        { loading: true },
        { name: this.$t('disabledOption'), disabled: true }
      ];
    }
  },

  methods: {
    onSelect(item) {
      this.show1 = false;
      this.show2 = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast('cancel');
    }
  }
};
</script>

<style lang="less">
.demo-action-sheet {
  .van-button {
    margin-left: 15px;
  }

  p {
    padding: 20px;
  }
}
</style>
