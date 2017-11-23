<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-submit-bar
        :price="3050"
        buttonText="提交订单"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-submit-bar
        disabled
        :price="3050"
        buttonText="提交订单"
        tip="您的收货地址不支持同城送, 我们已为您推荐快递"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('loading')">
      <van-submit-bar
        loading
        :price="3050"
        buttonText="提交订单"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-submit-bar
        :price="3050"
        buttonText="提交订单"
        @submit="onClickButton"
      >
        <van-checkbox v-model="checked">全选</van-checkbox>
        <span slot="tip">
          您的收货地址不支持同城送, <span class="van-edit-address" @click="onClickEditAddress">修改地址 ></span>
        </span>
      </van-submit-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {

    },
    'en-US': {

    }
  },

  data() {
    return {
      checked: true
    };
  },

  methods: {
    onClickButton() {
      Toast('点击按钮');
    },

    onClickEditAddress() {
      Toast('修改地址');
    }
  }
};
</script>

<style lang="postcss">
.demo-submit-bar {
  .van-submit-bar {
    position: relative;
  }

  .van-edit-address {
    color: #38F;
  }

  .van-checkbox {
    margin-left: 15px;
  }
}
</style>
