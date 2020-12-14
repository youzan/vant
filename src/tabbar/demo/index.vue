<template>
  <demo-block :title="t('basicUsage')">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="search">{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="friends-o">{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="setting-o">{{ t('tab') }}</van-tabbar-item>
    </van-tabbar>
  </demo-block>

  <demo-block :title="t('matchByName')">
    <van-tabbar v-model="activeName">
      <van-tabbar-item name="home" icon="home-o">
        {{ t('tab') }}
      </van-tabbar-item>
      <van-tabbar-item name="search" icon="search">
        {{ t('tab') }}
      </van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">
        {{ t('tab') }}
      </van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">
        {{ t('tab') }}
      </van-tabbar-item>
    </van-tabbar>
  </demo-block>

  <demo-block :title="t('badge')">
    <van-tabbar v-model="active2">
      <van-tabbar-item icon="home-o">{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="search" dot>{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">
        {{ t('tab') }}
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">
        {{ t('tab') }}
      </van-tabbar-item>
    </van-tabbar>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <van-tabbar v-model="active3">
      <van-tabbar-item badge="3">
        <span>{{ t('custom') }}</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search">{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="setting-o">{{ t('tab') }}</van-tabbar-item>
    </van-tabbar>
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-tabbar v-model="active4" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o">{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="search">{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="friends-o">{{ t('tab') }}</van-tabbar-item>
      <van-tabbar-item icon="setting-o">{{ t('tab') }}</van-tabbar-item>
    </van-tabbar>
  </demo-block>

  <demo-block :title="t('switchEvent')">
    <van-tabbar v-model="active5" @change="onChange">
      <van-tabbar-item icon="home-o">{{ `${t('tab')} 1` }}</van-tabbar-item>
      <van-tabbar-item icon="search">{{ `${t('tab')} 2` }}</van-tabbar-item>
      <van-tabbar-item icon="friends-o">{{ `${t('tab')} 3` }}</van-tabbar-item>
      <van-tabbar-item icon="setting-o">{{ `${t('tab')} 4` }}</van-tabbar-item>
    </van-tabbar>
  </demo-block>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';

const i18n = {
  'zh-CN': {
    badge: '徽标提示',
    customIcon: '自定义图标',
    customColor: '自定义颜色',
    matchByName: '通过名称匹配',
    switchEvent: '监听切换事件',
  },
  'en-US': {
    badge: 'Show Badge',
    customIcon: 'Custom Icon',
    customColor: 'Custom Color',
    matchByName: 'Match by name',
    switchEvent: 'Change Event',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      activeName: 'home',
    });

    const onChange = (index: number) => {
      Toast(`${t('tab')} ${index + 1}`);
    };

    return {
      ...toRefs(state),
      t,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
      onChange,
    };
  },
};
</script>

<style lang="less">
.demo-tabbar {
  .van-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
