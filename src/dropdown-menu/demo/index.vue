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
            <van-switch v-model="switch1" size="24" :active-color="RED" />
          </template>
        </van-cell>
        <van-cell center :title="t('switchTitle2')">
          <template #right-icon>
            <van-switch v-model="switch2" size="24" :active-color="RED" />
          </template>
        </van-cell>
        <div style="padding: 5px 16px;">
          <van-button
            type="danger"
            block
            round
            style="height: 40px;"
            @click="onConfirm"
          >
            {{ t('confirm') }}
          </van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </demo-block>

  <demo-block :title="t('customActiveColor')">
    <van-dropdown-menu :active-color="BLUE">
      <van-dropdown-item v-model="value1" :options="option1" />
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

<script>
import { RED, BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      disableMenu: '禁用菜单',
      switchTitle1: '包邮',
      switchTitle2: '团购',
      itemTitle: '筛选',
      expandDirection: '向上展开',
      customContent: '自定义菜单内容',
      customActiveColor: '自定义选中态颜色',
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
  },

  data() {
    return {
      RED,
      BLUE,
      switch1: true,
      switch2: false,
      value1: 0,
      value2: 'a',
    };
  },

  computed: {
    option1() {
      return this.t('option1');
    },

    option2() {
      return this.t('option2');
    },
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
</script>
