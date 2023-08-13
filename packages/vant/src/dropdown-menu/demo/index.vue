<script setup lang="ts">
import VanDropdownMenu from '..';
import VanDropdownItem from '../../dropdown-item';
import VanCell from '../../cell';
import VanSwitch from '../../switch';
import VanButton from '../../button';
import { computed, ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import type { DropdownItemInstance } from '../../dropdown-item';

const t = useTranslate({
  'zh-CN': {
    disableMenu: '禁用菜单',
    switchTitle1: '包邮',
    switchTitle2: '团购',
    itemTitle: '筛选',
    expandDirection: '向上展开',
    customContent: '自定义菜单内容',
    customActiveColor: '自定义选中态颜色',
    swipeItems: '横向滚动',
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
  },
  'en-US': {
    disableMenu: 'Disable Menu',
    switchTitle1: 'Title',
    switchTitle2: 'Title',
    itemTitle: 'Title',
    expandDirection: 'Expand Direction',
    customContent: 'Custom Content',
    customActiveColor: 'Custom Active Color',
    swipeItems: 'Swipe Items',
    option1: [
      { text: 'Option1', value: 0 },
      { text: 'Option2', value: 1 },
      { text: 'Option3', value: 2 },
    ],
    option2: [
      { text: 'Option A', value: 'a' },
      { text: 'Option B', value: 'b' },
      { text: 'Option C', value: 'c' },
    ],
  },
});

const item = ref<DropdownItemInstance>();

const switch1 = ref(true);
const switch2 = ref(false);
const value1 = ref(0);
const value2 = ref('a');

const option1 = computed(() => t('option1'));
const option2 = computed(() => t('option2'));

const onConfirm = () => {
  item.value?.toggle();
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </demo-block>

  <demo-block :title="t('customContent')">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item :title="t('itemTitle')" ref="item">
        <van-cell center :title="t('switchTitle1')">
          <template #right-icon>
            <van-switch v-model="switch1" />
          </template>
        </van-cell>
        <van-cell center :title="t('switchTitle2')">
          <template #right-icon>
            <van-switch v-model="switch2" />
          </template>
        </van-cell>
        <div style="padding: 5px 16px">
          <van-button
            type="primary"
            block
            round
            style="height: 40px"
            @click="onConfirm"
          >
            {{ t('confirm') }}
          </van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </demo-block>

  <demo-block :title="t('customActiveColor')">
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </demo-block>

  <demo-block :title="t('swipeItems')">
    <van-dropdown-menu swipe-threshold="4">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </demo-block>

  <demo-block :title="t('expandDirection')">
    <van-dropdown-menu direction="up">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </demo-block>

  <demo-block :title="t('disableMenu')">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" disabled :options="option1" />
      <van-dropdown-item v-model="value2" disabled :options="option2" />
    </van-dropdown-menu>
  </demo-block>
</template>
