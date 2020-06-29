<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <div class="sku-container">
        <van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :quota="skuData.quota"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :quota-used="skuData.quota_used"
          :properties="skuData.properties"
          :hide-stock="skuData.sku.hide_stock"
          :message-config="messageConfig"
          :start-sale-num="skuData.start_sale_num"
          :custom-sku-validator="customSkuValidator"
          disable-stepper-input
          reset-stepper-on-hide
          safe-area-inset-bottom
          reset-selected-sku-on-hide
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <van-button block type="primary" @click="showBase = true">
          {{ t('basicUsage') }}
        </van-button>
      </div>
    </demo-block>

    <demo-block :title="t('customStepper')">
      <div class="sku-container">
        <van-sku
          v-model="showStepper"
          :sku="skuData.sku"
          :quota="skuData.quota"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :quota-used="skuData.quota_used"
          :properties="skuData.properties"
          :hide-stock="skuData.sku.hide_stock"
          :start-sale-num="skuData.start_sale_num"
          :message-config="messageConfig"
          :custom-stepper-config="customStepperConfig"
          hide-quota-text
          safe-area-inset-bottom
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <van-button block type="primary" @click="showStepper = true">
          {{ t('customStepper') }}
        </van-button>
      </div>
    </demo-block>

    <demo-block :title="t('hideSoldoutSku')">
      <div class="sku-container">
        <van-sku
          v-model="showSoldout"
          :sku="skuData.sku"
          :quota="skuData.quota"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :quota-used="skuData.quota_used"
          :properties="skuData.properties"
          :hide-stock="skuData.sku.hide_stock"
          :message-config="messageConfig"
          :start-sale-num="skuData.start_sale_num"
          :show-soldout-sku="false"
          :custom-stepper-config="customStepperConfig"
          hide-quota-text
          safe-area-inset-bottom
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <van-button block type="primary" @click="showSoldout = true">
          {{ t('hideSoldoutSku') }}
        </van-button>
      </div>
    </demo-block>

    <demo-block :title="t('largeImageMode')">
      <div class="sku-container">
        <van-sku
          v-model="showLargePicturePreview"
          :sku="skuData2.sku"
          :quota="skuData2.quota"
          :goods="skuData2.goods_info"
          :goods-id="skuData2.goods_id"
          :hide-stock="skuData2.sku.hide_stock"
          :properties="skuData2.properties"
          :quota-used="skuData2.quota_used"
          :message-config="messageConfig"
          :start-sale-num="skuData2.start_sale_num"
          :show-header-image="false"
          :custom-sku-validator="customSkuValidator"
          disable-stepper-input
          reset-stepper-on-hide
          safe-area-inset-bottom
          reset-selected-sku-on-hide
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        >
        </van-sku>
        <van-button
          block
          type="primary"
          @click="showLargePicturePreview = true"
        >
          {{ t('largeImageMode') }}
        </van-button>
      </div>
    </demo-block>

    <demo-block :title="t('customBySlot')">
      <div class="sku-container">
        <van-sku
          v-model="showCustom"
          :stepper-title="t('stepperTitle')"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :start-sale-num="skuData.start_sale_num"
          :properties="skuData.properties"
          show-add-cart-btn
          reset-stepper-on-hide
          safe-area-inset-bottom
          :initial-sku="initialSku"
          :message-config="messageConfig"
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        >
          <template #sku-header-price="{ price }">
            <div class="van-sku__goods-price">
              <span class="van-sku__price-symbol">￥</span>
              <span class="van-sku__price-num">{{ price }}</span>
            </div>
          </template>
          <template #sku-actions-top>
            <div class="van-sku-header-item text-center">
              {{ t('actionsTop') }}
            </div>
          </template>
          <template #sku-actions="{ skuEventBus }">
            <div class="van-sku-actions">
              <van-button
                square
                size="large"
                type="warning"
                @click="onPointClicked"
              >
                {{ t('button1') }}
              </van-button>
              <van-button
                square
                size="large"
                type="danger"
                @click="skuEventBus.$emit('sku:buy')"
              >
                {{ t('button2') }}
              </van-button>
            </div>
          </template>
        </van-sku>
        <van-button block type="primary" @click="showCustom = true">
          {{ t('customBySlot') }}
        </van-button>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import { initialSku, getSkuData } from './data';
import { LIMIT_TYPE } from '../constants';

export default {
  i18n: {
    'zh-CN': {
      button1: '积分兑换',
      button2: '买买买',
      actionsTop: '商品不多，赶快购买吧',
      stepperTitle: '我要买',
      customBySlot: '通过插槽定制',
      customStepper: '自定义步进器',
      hideSoldoutSku: '隐藏售罄规格',
      largeImageMode: '大图预览模式',
    },
    'en-US': {
      button1: 'Button',
      button2: 'Button',
      actionsTop: 'Action top info',
      customBySlot: 'Custom By Slot',
      stepperTitle: 'Stepper title',
      customStepper: 'Custom Stepper',
      hideSoldoutSku: 'Hide Soldout Sku',
      largeImageMode: 'Large Image Mode',
    },
  },

  data() {
    this.skuData = getSkuData();
    this.skuData2 = getSkuData(true);
    this.initialSku = initialSku;

    return {
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      showLargePicturePreview: false,
      customSkuValidator: () => '请选择xxx',
      customStepperConfig: {
        quotaText: '单次限购100件',
        stockFormatter: (stock) => `剩余${stock}`,
        handleOverLimit: (data) => {
          const { action, limitType, quota, startSaleNum = 1 } = data;

          if (action === 'minus') {
            this.$toast(
              startSaleNum > 1 ? `${startSaleNum}件起售` : '至少选择一件商品'
            );
          } else if (action === 'plus') {
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              this.$toast(`限购${quota}件`);
            } else {
              this.$toast('库存不够了');
            }
          }
        },
      },
      messageConfig: {
        initialMessages: {
          留言1: '商品留言',
        },
        uploadImg: (file, img) =>
          new Promise((resolve) => {
            setTimeout(() => resolve(img), 1000);
          }),
        uploadMaxSize: 3,
      },
    };
  },

  methods: {
    onBuyClicked(data) {
      this.$toast('buy:' + JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast('add cart:' + JSON.stringify(data));
    },

    onPointClicked() {
      this.$toast('积分兑换');
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sku {
  background-color: @white;

  .sku-container {
    padding: 0 @padding-md;
  }

  .text-center {
    text-align: center;
  }
}
</style>
