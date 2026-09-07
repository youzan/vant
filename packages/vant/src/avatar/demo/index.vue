<script setup lang="ts">
import VanRow from '../../row';
import VanCol from '../../col';
import VanBadge from '../../badge';
import VanAvatar from '..';
import VanAvatarGroup from '../../avatar-group';
import { useTranslate, cdnURL } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    basicUsage: '基础用法',
    shape: '形状',
    size: '尺寸',
    customColor: '自定义颜色',
    badge: '带徽记的头像',
    avatarGroup: '头像组',
    leftUp: '左侧叠层',
    rightUp: '右侧叠层',
    groupSize: '组尺寸',
    groupShape: '组形状',
  },
  'en-US': {
    basicUsage: 'Basic Usage',
    shape: 'Shape',
    size: 'Size',
    customColor: 'Custom Color',
    badge: 'Avatar with Badge',
    avatarGroup: 'Avatar Group',
    leftUp: 'Left-up Cascading',
    rightUp: 'Right-up Cascading',
    groupSize: 'Group Size',
    groupShape: 'Group Shape',
  },
});

const avatarURL = cdnURL('cat.jpeg');
const avatarURL2 = cdnURL('logo.png');
const sizes = ['large', 'medium', 'normal', 'small'];
const customColors = [
  { bgColor: '#DC143C', color: '#fff', text: 'V' },
  { bgColor: '#228B22', color: '#fff', text: 'A' },
  { bgColor: '#1E90FF', color: '#fff', text: 'N' },
  { bgColor: '#8A2BE2', color: '#fff', text: 'T' },
  { bgColor: '#EEEEEE', color: '#7B8198', icon: 'user-o' },
];
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-row align="center" gutter="16">
      <van-col>
        <van-avatar :src="avatarURL" />
      </van-col>
      <van-col>
        <van-avatar>
          <template #default>
            <div style="font-size: 14px">slot</div>
          </template>
        </van-avatar>
      </van-col>
      <van-col>
        <van-avatar icon="user-o" />
      </van-col>
    </van-row>
  </demo-block>

  <demo-block card :title="t('shape')">
    <van-row gutter="16" align="center">
      <van-col>
        <van-avatar :src="avatarURL" shape="square" />
      </van-col>
      <van-col>
        <van-avatar :src="avatarURL" shape="round" />
      </van-col>
    </van-row>
  </demo-block>

  <demo-block card :title="t('size')">
    <van-row gutter="16" align="center">
      <van-col v-for="size in sizes" :key="size">
        <van-avatar :src="avatarURL" :size="size" />
      </van-col>
    </van-row>
  </demo-block>

  <demo-block card :title="t('customColor')">
    <van-row gutter="16" align="center">
      <van-col v-for="(item, index) in customColors" :key="index">
        <van-avatar
          :bg-color="item.bgColor"
          :color="item.color"
          :text="item.text"
          :icon="item.icon"
          size="normal"
        />
      </van-col>
    </van-row>
  </demo-block>

  <!-- 徽记 -->
  <demo-block :title="t('badge')">
    <van-badge content="10" position="top-left">
      <van-avatar :src="avatarURL" shape="square" />
    </van-badge>

    <van-badge :content="20">
      <van-avatar :src="avatarURL" shape="square" />
    </van-badge>
    <van-badge dot>
      <van-avatar :src="avatarURL" shape="square" />
    </van-badge>
    <van-badge dot>
      <van-avatar text="A" shape="square" />
    </van-badge>
  </demo-block>

  <!-- 头像组 -->
  <demo-block card :title="t('avatarGroup')">
    <van-avatar-group :max-count="4">
      <van-avatar :src="avatarURL" />
      <van-avatar :src="avatarURL2" />
      <van-avatar text="A" bg-color="#1E90FF" />
      <van-avatar text="B" bg-color="#228B22" />
      <van-avatar text="C" bg-color="#DC143C" />
      <van-avatar icon="user-o" bg-color="#8A2BE2" />
    </van-avatar-group>
  </demo-block>

  <demo-block card :title="t('rightUp')">
    <van-avatar-group :max-count="4" cascading="right-up" size="45">
      <van-avatar :src="avatarURL" />
      <van-avatar :src="avatarURL2" />
      <van-avatar text="A" bg-color="#1E90FF" />
      <van-avatar text="B" bg-color="#228B22" />
      <van-avatar text="C" bg-color="#DC143C" />
      <van-avatar icon="user-o" bg-color="#8A2BE2" />
      <template #collapseAvatar="{ restCount }">
        <van-avatar :text="`+${restCount}`" bg-color="#CCCCCC" />
      </template>
    </van-avatar-group>
  </demo-block>

  <demo-block card :title="t('groupSize')">
    <van-avatar-group :max-count="4" size="small">
      <van-avatar :src="avatarURL" />
      <van-avatar :src="avatarURL2" />
      <van-avatar text="A" bg-color="#1E90FF" />
      <van-avatar text="B" bg-color="#228B22" />
      <van-avatar text="C" bg-color="#DC143C" />
    </van-avatar-group>
  </demo-block>

  <demo-block card :title="t('groupShape')">
    <van-avatar-group :max-count="4" shape="square" collapse-avatar="Custom">
      <van-avatar :src="avatarURL" shape="round" />
      <van-avatar :src="avatarURL2" />
      <van-avatar text="A" bg-color="#1E90FF" shape="round" />
      <van-avatar text="B" bg-color="#228B22" />
      <van-avatar text="C" bg-color="#DC143C" />
    </van-avatar-group>
  </demo-block>
</template>

<style lang="less">
.demo-avatar {
  background-color: var(--van-background-2);

  .van-badge__wrapper {
    margin-left: var(--van-padding-md);
  }
}
</style>
