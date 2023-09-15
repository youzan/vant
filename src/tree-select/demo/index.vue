<template>
  <demo-section>
    <demo-block :title="t('radioMode')">
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
      />
    </demo-block>

    <demo-block :title="t('multipleMode')">
      <van-tree-select
        :items="items"
        :active-id.sync="activeIds"
        :main-active-index.sync="activeIndex2"
      />
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-tree-select
        height="55vw"
        :items="simpleItems"
        :main-active-index.sync="activeIndex3"
      >
        <template #content>
          <van-image
            v-if="activeIndex3 === 0"
            :show-loading="false"
            src="https://img01.yzcdn.cn/vant/apple-1.jpg"
          />
          <van-image
            v-if="activeIndex3 === 1"
            :show-loading="false"
            src="https://img01.yzcdn.cn/vant/apple-2.jpg"
          />
        </template>
      </van-tree-select>
    </demo-block>

    <demo-block :title="t('showBadge')">
      <van-tree-select
        height="55vw"
        :items="badgeItems"
        :active-id.sync="activeId2"
        :main-active-index.sync="activeIndex4"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import { zhCNData } from './data-zh';
import { enUSData } from './data-en';
import { deepClone } from '../../utils/deep-clone';

export default {
  i18n: {
    'zh-CN': {
      showBadge: '徽标提示',
      radioMode: '单选模式',
      multipleMode: '多选模式',
      customContent: '自定义内容',
      data: zhCNData,
      dataSimple: [{ text: '分组 1' }, { text: '分组 2' }],
    },
    'en-US': {
      showBadge: 'Show Badge',
      radioMode: 'Radio Mode',
      multipleMode: 'Multiple Mode',
      customContent: 'Custom Content',
      data: enUSData,
      dataSimple: [{ text: 'Group 1' }, { text: 'Group 2' }],
    },
  },

  data() {
    return {
      activeId: 1,
      activeId2: 1,
      activeIds: [1, 2],
      activeIndex: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      activeIndex4: 0,
    };
  },

  computed: {
    items() {
      return this.t('data');
    },

    simpleItems() {
      return this.t('dataSimple');
    },

    badgeItems() {
      const data = deepClone(this.t('data')).slice(0, 2);

      data[0].dot = true;
      data[1].badge = 5;

      return data;
    },
  },
};
</script>
