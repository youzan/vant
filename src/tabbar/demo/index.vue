<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="search">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ $t('tab') }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="$t('matchByName')">
      <van-tabbar v-model="activeName">
        <van-tabbar-item name="home" icon="home-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item name="search" icon="search">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o">{{ $t('tab') }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="$t('badge')">
      <van-tabbar v-model="active2">
        <van-tabbar-item icon="home-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="search" dot>{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o" info="5">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o" info="20">{{ $t('tab') }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <van-tabbar v-model="active3">
        <van-tabbar-item info="3">
          <span>{{ $t('custom') }}</span>
          <template #icon="{ active }">
            <img :src="active ? icon.active : icon.inactive">
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ $t('tab') }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-tabbar v-model="active4" active-color="#07c160" inactive-color="#000">
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
      badge: '提示信息',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      matchByName: '通过名称匹配'
    },
    'en-US': {
      badge: 'Show Badge',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      matchByName: 'Match by name'
    }
  },

  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      activeName: 'home',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
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
