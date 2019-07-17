<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-switch v-model="checked" />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-switch
        v-model="checked"
        disabled
      />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <van-switch
        v-model="checked"
        loading
      />
    </demo-block>

    <demo-block :title="$t('customSize')">
      <van-switch
        v-model="checked2"
        size="24px"
      />
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-switch
        v-model="checked3"
        active-color="#07c160"
        inactive-color="#f44"
      />
    </demo-block>

    <demo-block :title="$t('asyncControl')">
      <van-switch
        :value="checked4"
        @input="onInput"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '提醒',
      message: '是否切换开关？',
      customSize: '自定义大小',
      customColor: '自定义颜色',
      asyncControl: '异步控制'
    },
    'en-US': {
      title: 'Confirm',
      message: 'Are you sure to toggle switch?',
      customSize: 'Custom Size',
      customColor: 'Custom Color',
      asyncControl: 'Async Control'
    }
  },

  data() {
    return {
      checked: true,
      checked2: true,
      checked3: true,
      checked4: true
    };
  },

  methods: {
    onInput(checked) {
      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('message')
      }).then(() => {
        this.checked4 = checked;
      });
    }
  }
};
</script>

<style lang="less">
.demo-switch {
  .van-switch {
    margin: 0 15px;
  }
}
</style>
