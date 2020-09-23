<template>
  <demo-section class="demo-badge">
    <demo-block card :title="t('basicUsage')">
      <van-row class="demo-badge--row">
        <van-col>
          <van-badge :count="count1">
            <a href="#" class="avatar"></a>
          </van-badge>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block card :title="t('showMaxCount')">
      <van-row class="demo-badge--row">
        <van-col>
          <van-badge :count="count2" :max-count="maxCount">
            <a href="#" class="avatar"></a>
          </van-badge>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block card :title="t('offset')">
      <van-row class="demo-badge--row">
        <van-col>
          <van-badge :count="count1" :offset="offset">
            <a href="#" class="avatar"></a>
          </van-badge>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block card :title="t('dot')">
      <van-row class="demo-badge--row">
        <van-col>
          <van-badge :dot="true">
            <van-icon name="chat-o" />
          </van-badge>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block card :title="t('standalone')">
      <van-row>
        <van-col class="demo-badge--standalone">
          <van-badge :count="12"></van-badge>
          <van-badge :count="101"></van-badge>
          <van-badge dot></van-badge>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block card :title="t('showZero')">
      <van-row class="demo-badge--row">
        <van-col class="demo-badge--standalone">
          <van-badge :count="0">
            <a href="#" class="avatar"></a>
          </van-badge>
          <van-badge :count="0" show-zero>
            <a href="#" class="avatar"></a>
          </van-badge>
        </van-col>
      </van-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      showMaxCount: '最大展示数字',
      offset: '自定义偏移量',
      dot: '圆点',
      standalone: '独立使用',
      showZero: '显示0值'
    },
    'en-US': {
      showMaxCount: 'Max Count',
      offset: 'Custom Offset',
      dot: 'Red Badge',
      standalone: 'Standalone',
      showZero: 'Show Zero'
    },
  },
  data() {
    return {
      count1: 10,
      count2: 100,
      maxCount: 60,
      offset: [0, -10],
    };
  },
};
</script>

<style lang='less' scoped>
.demo-badge {
  &--row {
    margin: 16px 0;
  }

  .avatar {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #eee;
    display: inline-block;
    vertical-align: middle;
  }

  .van-col {
    text-align: center;
    display: inline-block;
  }

  .van-badge {
    color: #323233;
    font-size: 32px;
    margin-right: 16px;
  }

  &--standalone {
    text-align: left;
  }
}
</style>
