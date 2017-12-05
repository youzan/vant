<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="sku-container">
        <van-sku
          v-model="showBase"
          :sku="sku"
          :goods="goods"
          :goodsId="goodsId"
          :hideStock="sku.hide_stock"
          :quota="quota"
          :quotaUsed="quotaUsed"
          :resetStepperOnHide="resetStepperOnHide"
          :disableStepperInput="disableStepperInput"
          @buy-clicked="handleBuyClicked"
          @add-cart="handleAddCartClicked"
        >
        </van-sku>
        <van-button type="primary" @click="showBase = true" block>基础用法</van-button>
      </div>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <div class="sku-container">
        <van-sku
          v-model="showCustomAction"
          stepperTitle="我要买"
          :sku="sku"
          :goods="goods"
          :goodsId="goodsId"
          :hideStock="sku.hide_stock"
          :showAddCartBtn="true"
          :quota="quota"
          :quotaUsed="quotaUsed"
          :resetStepperOnHide="true"
          :initialSku="initialSku"
          @buy-clicked="handleBuyClicked"
          @add-cart="handleAddCartClicked"
        >
          <!-- 隐藏sku messages -->
          <template slot="sku-messages"></template>
          <!-- 自定义sku actions -->
          <template slot="sku-actions" slot-scope="props">
            <div class="van-sku-actions">
              <van-button bottomAction @click="handlePointClicked">积分兑换</van-button>
              <!-- 直接触发sku内部事件，通过内部事件执行handleBuyClicked回调 -->
              <van-button type="primary" bottomAction @click="props.skuEventBus.$emit('sku:buy')">买买买</van-button>
            </div>
          </template>
        </van-sku>
        <van-button type="primary" @click="showCustomAction = true" block>自定义sku actions</van-button>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import data from '../mock/sku';

const goods = data.goods_info;
goods.picture = goods.picture[0];

export default {
  i18n: {
    'zh-CN': {

    },
    'en-US': {

    }
  },

  data() {
    return {
      showBase: false,
      showCustomAction: false,
      sku: data.sku,
      goods: goods,
      goodsId: data.goods_id,
      quota: data.quota,
      quotaUsed: data.quota_used,
      disableStepperInput: true,
      resetStepperOnHide: true,
      initialSku: {
        s1: '30349',
        s2: '1193'
      }
    };
  },

  methods: {
    handleBuyClicked(data) {
      Toast(JSON.stringify(data));
    },
    handleAddCartClicked(data) {
      Toast(JSON.stringify(data));
    },
    handlePointClicked() {
      Toast('积分兑换');
    }
  }
};
</script>

<style lang="postcss">
.demo-sku {
  .sku-container {
    padding: 0 15px;
  }
}
</style>
