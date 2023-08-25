<script setup lang="ts">
import VanCheckbox from '..';
import VanCheckboxGroup from '../../checkbox-group';
import VanButton from '../../button';
import VanCellGroup from '../../cell-group';
import VanCell from '../../cell';
import { ref, reactive } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import { useRefs } from '../../composables/use-refs';
import type { CheckboxInstance } from '../types';
import type { CheckboxGroupInstance } from '../../checkbox-group';

const t = useTranslate({
  'zh-CN': {
    checkbox: '复选框',
    customIcon: '自定义图标',
    customIconSize: '自定义大小',
    customColor: '自定义颜色',
    customShape: '自定义形状',
    leftLabel: '左侧文本',
    title3: '复选框组',
    title4: '限制最大可选数',
    title5: '搭配单元格组件使用',
    toggleAll: '全选与反选',
    checkAll: '全选',
    inverse: '反选',
    horizontal: '水平排列',
    disableLabel: '禁用文本点击',
    indeterminate: '不确定状态',
  },
  'en-US': {
    checkbox: 'Checkbox',
    customIcon: 'Custom Icon',
    customIconSize: 'Custom Icon Size',
    customColor: 'Custom Color',
    customShape: 'Custom Shape',
    leftLabel: 'Left Label',
    title3: 'Checkbox Group',
    title4: 'Maximum amount of checked options',
    title5: 'Inside a Cell',
    toggleAll: 'Toggle All',
    checkAll: 'Check All',
    inverse: 'Inverse',
    horizontal: 'Horizontal',
    disableLabel: 'Disable label click',
    indeterminate: 'indeterminate',
  },
});

const state = reactive({
  checkbox1: true,
  checkbox2: true,
  checkbox3: true,
  isCheckAll: false,
  isIndeterminate: true,
  checkboxLabel: true,
  checkboxIcon: true,
  leftLabel: false,
  list: ['a', 'b'],
  result: ['a', 'b'],
  checkboxShape: ['a', 'b'],
  result2: [],
  result3: [],
  result4: ['a', 'b', 'd'],
  checkAllResult: [],
  horizontalResult: [],
});

const list = ['a', 'b', 'c', 'd'];

const activeIcon = cdnURL('user-active.png');
const inactiveIcon = cdnURL('user-inactive.png');

const group = ref<CheckboxGroupInstance>();
const [refs, setRefs] = useRefs<CheckboxInstance>();

const toggle = (index: number) => {
  refs.value[index].toggle();
};

const checkAll = () => {
  group.value?.toggleAll(true);
};

const toggleAll = () => {
  group.value?.toggleAll();
};

const checkAllChange = (val: boolean) => {
  state.result4 = val ? list : [];
  state.isIndeterminate = false;
};

const checkedResultChange = (value: string[]) => {
  const checkedCount = value.length;
  state.isCheckAll = checkedCount === list.length;
  state.isIndeterminate = checkedCount > 0 && checkedCount < list.length;
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-checkbox v-model="state.checkbox1">{{ t('checkbox') }}</van-checkbox>
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-checkbox :model-value="false" disabled>
      {{ t('checkbox') }}
    </van-checkbox>
    <van-checkbox :model-value="true" disabled>
      {{ t('checkbox') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('customShape')">
    <van-checkbox-group v-model="state.checkboxShape" shape="square">
      <van-checkbox name="a">{{ t('customShape') }} a</van-checkbox>
      <van-checkbox name="b">{{ t('customShape') }} b</van-checkbox>
    </van-checkbox-group>
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-checkbox v-model="state.checkbox2" checked-color="#ee0a24">
      {{ t('customColor') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('customIconSize')">
    <van-checkbox v-model="state.checkboxIcon" icon-size="24px">
      {{ t('customIconSize') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <van-checkbox v-model="state.checkbox3">
      {{ t('customIcon') }}
      <template #icon="{ checked }">
        <img :src="checked ? activeIcon : inactiveIcon" />
      </template>
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('leftLabel')">
    <van-checkbox v-model="state.leftLabel" label-position="left">
      {{ t('leftLabel') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('disableLabel')">
    <van-checkbox v-model="state.checkboxLabel" label-disabled>
      {{ t('checkbox') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('title3')">
    <van-checkbox-group v-model="state.result">
      <van-checkbox name="a">{{ t('checkbox') }} a</van-checkbox>
      <van-checkbox name="b">{{ t('checkbox') }} b</van-checkbox>
    </van-checkbox-group>
  </demo-block>

  <demo-block :title="t('horizontal')">
    <van-checkbox-group v-model="state.horizontalResult" direction="horizontal">
      <van-checkbox name="a">{{ t('checkbox') }} a</van-checkbox>
      <van-checkbox name="b">{{ t('checkbox') }} b</van-checkbox>
    </van-checkbox-group>
  </demo-block>

  <demo-block :title="t('title4')">
    <van-checkbox-group v-model="state.result2" :max="2">
      <van-checkbox name="a">{{ t('checkbox') }} a</van-checkbox>
      <van-checkbox name="b">{{ t('checkbox') }} b</van-checkbox>
      <van-checkbox name="c">{{ t('checkbox') }} c</van-checkbox>
    </van-checkbox-group>
  </demo-block>

  <demo-block :title="t('toggleAll')">
    <van-checkbox-group v-model="state.checkAllResult" ref="group">
      <van-checkbox name="a">{{ t('checkbox') }} a</van-checkbox>
      <van-checkbox name="b">{{ t('checkbox') }} b</van-checkbox>
      <van-checkbox name="c">{{ t('checkbox') }} c</van-checkbox>
    </van-checkbox-group>

    <div class="demo-checkbox-buttons">
      <van-button type="primary" @click="checkAll">
        {{ t('checkAll') }}
      </van-button>
      <van-button type="primary" @click="toggleAll">
        {{ t('inverse') }}
      </van-button>
    </div>
  </demo-block>

  <demo-block :title="t('title5')">
    <van-checkbox-group v-model="state.result3">
      <van-cell-group inset>
        <van-cell
          v-for="(item, index) in state.list"
          clickable
          :key="index"
          :title="`${t('checkbox')} ${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <van-checkbox :ref="setRefs(index)" :name="item" @click.stop />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </demo-block>

  <demo-block :title="t('indeterminate')">
    <van-checkbox
      v-model="state.isCheckAll"
      :indeterminate="state.isIndeterminate"
      @change="checkAllChange"
    >
      {{ t('checkAll') }}
    </van-checkbox>
    <div class="divider" />
    <van-checkbox-group v-model="state.result4" @change="checkedResultChange">
      <van-checkbox v-for="item in list" :key="item" :name="item">
        {{ t('checkbox') }} {{ item }}
      </van-checkbox>
    </van-checkbox-group>
  </demo-block>
</template>

<style lang="less">
.demo-checkbox {
  .van-checkbox {
    margin: 0 0 8px 20px;
  }

  .van-cell {
    .van-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: var(--van-padding-md);

    .van-button {
      margin-left: var(--van-padding-md);
    }
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}

.divider {
  margin: 20px;
  height: 1px;
  background: #ccc;
}
</style>
