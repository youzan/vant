<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="padding-15">
        <van-star-rate
          :total="totalA"
          v-model="valueA"
          :size="size"
        />
      </div>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <div class="padding-15">
        <van-star-rate
          :total="totalB"
          v-model="valueB"
          :size="24"
          :color="'#2ba'"
          :default-color="'#ceefe8'"
        />
      </div>
    </demo-block>

     <demo-block :title="$t('disabled')">
      <div class="padding-15">
        <van-star-rate
          disabled
          :total="totalC"
          v-model="valueC"
        />
      </div>
    </demo-block>

  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      disabled: '不可操作状态',
      customColor: '自定义颜色'
    },
    'en-US': {
      disabled: 'Disabled Component',
      customColor: 'Custom Color'
    }
  },

  data() {
    return {
      size: 30,
      totalA: 7,
      valueA: 5,
      totalB: 6,
      valueB: 4,
      totalC: 8,
      valueC: 2
    };
  },

  methods: {
    onSearch() {
      Toast(this.value);
    },
    onCancel() {
      Toast(this.$t('cancel'));
    }
  }
};
</script>

<style lang="postcss">
.demo-search {
  .van-search__action div {
    padding: 0 10px;
  }
}
.padding-15 {
  padding: 0 15px;
}
</style>
