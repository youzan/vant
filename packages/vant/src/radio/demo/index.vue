<script setup lang="ts">
import VanRadioGroup from '../../radio-group';
import VanRadio from '..';
import VanCellGroup from '../../cell-group';
import VanCell from '../../cell';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    radio: '单选框',
    text1: '未选中禁用',
    text2: '选中且禁用',
    withCell: '搭配单元格组件使用',
    horizontal: '水平排列',
    customIcon: '自定义图标',
    customColor: '自定义颜色',
    customShape: '自定义形状',
    customIconSize: '自定义大小',
    disableLabel: '禁用文本点击',
  },
  'en-US': {
    radio: 'Radio',
    text1: 'Disabled',
    text2: 'Disabled and checked',
    withCell: 'Inside a Cell',
    horizontal: 'Hrizontal',
    customIcon: 'Custom Icon',
    customColor: 'Custom Color',
    customShape: 'Custom Shape',
    customIconSize: 'Custom Icon Size',
    disableLabel: 'Disable label click',
  },
});

const radio1 = ref('1');
const radio2 = ref('2');
const radio3 = ref('1');
const radio4 = ref('1');
const radio5 = ref('1');
const radioLabel = ref('1');
const radioShape = ref('1');
const radioIconSize = ref('1');
const radioHorizontal = ref('1');
const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-radio-group v-model="radio1" class="demo-radio-group">
      <van-radio name="1">{{ t('radio') }} 1</van-radio>
      <van-radio name="2">{{ t('radio') }} 2</van-radio>
    </van-radio-group>
  </demo-block>

  <demo-block :title="t('horizontal')">
    <van-radio-group
      v-model="radioHorizontal"
      class="demo-radio-group"
      direction="horizontal"
    >
      <van-radio name="1">{{ t('radio') }} 1</van-radio>
      <van-radio name="2">{{ t('radio') }} 2</van-radio>
    </van-radio-group>
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-radio-group v-model="radio2" class="demo-radio-group" disabled>
      <van-radio name="1">{{ t('radio') }} 1</van-radio>
      <van-radio name="2">{{ t('radio') }} 2</van-radio>
    </van-radio-group>
  </demo-block>

  <demo-block :title="t('customShape')">
    <van-radio-group v-model="radioShape" class="demo-radio-group">
      <van-radio name="1" shape="square">{{ t('radio') }} 1</van-radio>
      <van-radio name="2" shape="square">{{ t('radio') }} 2</van-radio>
    </van-radio-group>
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-radio-group v-model="radio3" class="demo-radio-group">
      <van-radio name="1" checked-color="#ee0a24">
        {{ t('radio') }} 1
      </van-radio>
      <van-radio name="2" checked-color="#ee0a24">
        {{ t('radio') }} 2
      </van-radio>
    </van-radio-group>
  </demo-block>

  <demo-block :title="t('customIconSize')">
    <van-radio-group v-model="radioIconSize" class="demo-radio-group">
      <van-radio name="1" icon-size="24px"> {{ t('radio') }} 1 </van-radio>
      <van-radio name="2" icon-size="24px"> {{ t('radio') }} 2 </van-radio>
    </van-radio-group>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <van-radio-group v-model="radio4" class="demo-radio-group">
      <van-radio name="1">
        {{ t('radio') }} 1
        <template #icon="{ checked }">
          <img :src="checked ? activeIcon : inactiveIcon" />
        </template>
      </van-radio>
      <van-radio name="2">
        {{ t('radio') }} 2
        <template #icon="{ checked }">
          <img :src="checked ? activeIcon : inactiveIcon" />
        </template>
      </van-radio>
    </van-radio-group>
  </demo-block>

  <demo-block :title="t('disableLabel')">
    <van-radio-group v-model="radioLabel" class="demo-radio-group">
      <van-radio name="1" label-disabled>{{ t('radio') }} 1</van-radio>
      <van-radio name="2" label-disabled>{{ t('radio') }} 2</van-radio>
    </van-radio-group>
  </demo-block>

  <demo-block :title="t('withCell')">
    <van-radio-group v-model="radio5">
      <van-cell-group>
        <van-cell clickable :title="t('radio') + 1" @click="radio5 = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell clickable :title="t('radio') + 2" @click="radio5 = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </demo-block>
</template>

<style lang="less">
.demo-radio {
  background: var(--van-white);

  &-group {
    padding: 0 16px;

    .van-radio {
      margin-bottom: 8px;
    }
  }

  img {
    height: 20px;
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
