<template>
  <demo-block :title="t('basicUsage')">
    <van-checkbox v-model="checkbox1">{{ t('checkbox') }}</van-checkbox>
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
    <van-checkbox v-model="checkboxShape" shape="square">
      {{ t('customColor') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-checkbox v-model="checkbox2" checked-color="#07c160">
      {{ t('customColor') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('customIconSize')">
    <van-checkbox v-model="checboxIcon" icon-size="24px">
      {{ t('customIconSize') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <van-checkbox v-model="checkbox3">
      {{ t('customIcon') }}
      <template #icon="{ checked }">
        <img :src="checked ? activeIcon : inactiveIcon" />
      </template>
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('disableLabel')">
    <van-checkbox v-model="checkboxLabel" label-disabled>
      {{ t('checkbox') }}
    </van-checkbox>
  </demo-block>

  <demo-block :title="t('title3')">
    <van-checkbox-group v-model="result">
      <van-checkbox name="a">{{ t('checkbox') }} a</van-checkbox>
      <van-checkbox name="b">{{ t('checkbox') }} b</van-checkbox>
    </van-checkbox-group>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('horizontal')">
    <van-checkbox-group v-model="horizontalResult" direction="horizontal">
      <van-checkbox name="a">{{ t('checkbox') }} a</van-checkbox>
      <van-checkbox name="b">{{ t('checkbox') }} b</van-checkbox>
    </van-checkbox-group>
  </demo-block>

  <demo-block :title="t('title4')">
    <van-checkbox-group v-model="result2" :max="2">
      <van-checkbox name="a">{{ t('checkbox') }} a</van-checkbox>
      <van-checkbox name="b">{{ t('checkbox') }} b</van-checkbox>
      <van-checkbox name="c">{{ t('checkbox') }} c</van-checkbox>
    </van-checkbox-group>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('toggleAll')">
    <van-checkbox-group v-model="checkAllResult" ref="group">
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
    <van-checkbox-group v-model="result3">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
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
</template>

<script>
import { ref } from 'vue';
import { useRefs } from '../../composition/use-refs';

export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      customIcon: '自定义图标',
      customIconSize: '自定义大小',
      customColor: '自定义颜色',
      customShape: '自定义形状',
      title3: '复选框组',
      title4: '限制最大可选数',
      title5: '搭配单元格组件使用',
      toggleAll: '全选与反选',
      checkAll: '全选',
      inverse: '反选',
      horizontal: '水平排列',
      disableLabel: '禁用文本点击',
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customIconSize: 'Custom Icon Size',
      customColor: 'Custom Color',
      customShape: 'Custom Shape',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell',
      toggleAll: 'Toggle All',
      checkAll: 'Check All',
      inverse: 'Inverse',
      horizontal: 'Horizontal',
      disableLabel: 'Disable label click',
    },
  },

  setup() {
    const group = ref();
    const [refs, setRefs] = useRefs();

    const toggle = (index) => {
      refs.value[index].toggle();
    };

    const checkAll = () => {
      group.value.toggleAll(true);
    };

    const toggleAll = () => {
      group.value.toggleAll();
    };

    return {
      group,
      toggle,
      setRefs,
      checkAll,
      toggleAll,
    };
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxShape: true,
      checkboxLabel: true,
      checboxIcon: true,
      list: ['a', 'b'],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      checkAllResult: [],
      horizontalResult: [],
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-checkbox {
  background: @white;

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
    margin-top: @padding-md;

    .van-button {
      margin-left: @padding-md;
    }
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
