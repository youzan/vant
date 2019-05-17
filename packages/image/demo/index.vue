<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-row>
        <van-image
          width="100"
          height="100"
          :src="image"
        />
      </van-row>
    </demo-block>

    <demo-block :title="$t('fitMode')">
      <van-row gutter="20">
        <van-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <van-image
            :fit="fit"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </van-col>
      </van-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      fitMode: '缩放模式'
    },
    'en-US': {
      fitMode: 'Fit Mode'
    }
  },

  data() {
    return {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
    };
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  .van-row {
    padding: 0 15px;
  }

  .van-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-darker;
    font-size: 14px;
    text-align: center;
  }
}
</style>
