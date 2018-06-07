<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button @click="show1 = true">{{ $t('button1') }}</van-button>
      <van-actionsheet v-model="show1" :actions="actions" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-button @click="show2 = true">{{ $t('button2') }}</van-button>
      <van-actionsheet v-model="show2" :actions="actions" :cancel-text="$t('cancel')" @cancel="handleCancel" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-button @click="show3 = true">{{ $t('button3') }}</van-button>
      <van-actionsheet v-model="show3" :title="$t('title')">
        <p>{{ $t('content') }}</p>
      </van-actionsheet>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      button1: '弹出 Actionsheet',
      button2: '弹出带取消按钮的 Actionsheet',
      button3: '弹出带标题的 Actionsheet',
      title2: '带取消按钮的 Actionsheet',
      title3: '带标题的 Actionsheet',
      description: '描述信息'
    },
    'en-US': {
      button1: 'Show Actionsheet',
      button2: 'Show Actionsheet with cancel button',
      button3: 'Show Actionsheet with title',
      title2: 'Actionsheet with cancel button',
      title3: 'Actionsheet with title',
      description: 'Description'
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
        { name: this.$t('option'), callback: this.onClick },
        { name: this.$t('option'), subname: this.$t('description') },
        { name: this.$t('option'), loading: true }
      ];
    }
  },

  methods: {
    onClick(item) {
      this.$toast(item.name);
    },

    handleCancel() {
      this.$toast('cancel');
    }
  }
};
</script>

<style lang="postcss">
.demo-actionsheet {
  .actionsheet-wx {
    color: #06bf04;
  }

  .van-button {
    margin-left: 15px;
  }

  p {
    padding: 20px;
  }
}
</style>
