<script setup lang="ts">
import VanGrid from '../../grid';
import VanGridItem from '../../grid-item';
import VanSidebar from '..';
import VanSidebarItem from '../../sidebar-item';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    title: '标签名',
    disabled: '禁用选项',
    showBadge: '徽标提示',
    changeEvent: '监听切换事件',
  },
  'en-US': {
    disabled: 'Disabled',
    showBadge: 'Show Badge',
    changeEvent: 'Change Event',
  },
});

const active1 = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);

const onChange = (index: number) => Toast(`${t('title')} ${index + 1}`);
</script>

<template>
  <van-grid :column-num="2" :border="false">
    <van-grid-item>
      <h3 class="demo-sidebar-title">{{ t('basicUsage') }}</h3>
      <van-sidebar v-model="active1">
        <van-sidebar-item :title="t('title')" />
        <van-sidebar-item :title="t('title')" />
        <van-sidebar-item :title="t('title')" />
      </van-sidebar>
    </van-grid-item>

    <van-grid-item>
      <h3 class="demo-sidebar-title">{{ t('showBadge') }}</h3>
      <van-sidebar v-model="active2">
        <van-sidebar-item :title="t('title')" dot />
        <van-sidebar-item :title="t('title')" badge="5" />
        <van-sidebar-item :title="t('title')" badge="20" />
      </van-sidebar>
    </van-grid-item>

    <van-grid-item>
      <h3 class="demo-sidebar-title">{{ t('disabled') }}</h3>
      <van-sidebar v-model="active3">
        <van-sidebar-item :title="t('title')" />
        <van-sidebar-item :title="t('title')" disabled />
        <van-sidebar-item :title="t('title')" />
      </van-sidebar>
    </van-grid-item>

    <van-grid-item>
      <h3 class="demo-sidebar-title">{{ t('changeEvent') }}</h3>
      <van-sidebar v-model="active4" @change="onChange">
        <van-sidebar-item :title="`${t('title')} 1`" />
        <van-sidebar-item :title="`${t('title')} 2`" />
        <van-sidebar-item :title="`${t('title')} 3`" />
      </van-sidebar>
    </van-grid-item>
  </van-grid>
</template>

<style lang="less">
.demo-sidebar {
  background-color: var(--van-white);

  .van-sidebar {
    margin-left: var(--van-padding-md);
  }

  &-title {
    margin-bottom: 16px;
    color: var(--van-gray-6);
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
