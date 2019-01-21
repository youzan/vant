<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item
          icon="search"
          dot
        >
          {{ $t('tab') }}
        </van-tabbar-item>
        <van-tabbar-item
          icon="friends-o"
          info="5"
        >
          {{ $t('tab') }}
        </van-tabbar-item>
        <van-tabbar-item
          icon="setting-o"
          info="20"
        >
          {{ $t('tab') }}
        </van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <van-tabbar v-model="active2">
        <van-tabbar-item info="3">
          <span>{{ $t('custom') }}</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item icon="search">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ $t('tab') }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-tabbar
        v-model="active3"
        active-color="#07c160"
      >
        <van-tabbar-item icon="home-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="search">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ $t('tab') }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      customIcon: '自定义图标',
      customColor: '自定义颜色'
    },
    'en-US': {
      customIcon: 'Custom icon',
      customColor: 'Custom Color'
    }
  },

  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  }
};
</script>

<style lang="less">
.demo-tabbar {
  .van-tabbar {
    position: relative;

    &-item {
      cursor: pointer;
    }
  }
}
</style>
