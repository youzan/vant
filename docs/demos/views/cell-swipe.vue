<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-swipe :right-width="65" :left-width="65">
        <span slot="left">{{ $t('button1') }}</span>
        <van-cell-group>
          <van-cell :title="$t('title')" :value="$t('content')"></van-cell>
        </van-cell-group>
        <span slot="right">{{ $t('button2') }}</span>
      </van-cell-swipe>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      button1: '选择',
      button2: '删除',
      title: '单元格'
    },
    'en-US': {
      button1: 'Select',
      button2: 'Delete',
      title: 'Cell'
    }
  }
};
</script>

<style lang="postcss">
.demo-cell-swipe {
  .van-cell-swipe__left,
  .van-cell-swipe__right {
      color: #FFFFFF;
      font-size: 16px;
      width: 65px;
      height: 44px;
      display: inline-block;
      text-align: center;
      line-height: 44px;
  }
  .van-cell-swipe__left {
    background-color: #FF4444;  
  }
  .van-cell-swipe__right {
    background-color: #84c483;
  }
}
</style>
