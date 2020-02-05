<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-radio-group v-model="radio1" class="demo-radio-group">
        <van-radio name="1">{{ $t('radio') }} 1</van-radio>
        <van-radio name="2">{{ $t('radio') }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-radio-group v-model="radio2" class="demo-radio-group" disabled>
        <van-radio name="1">{{ $t('radio') }} 1</van-radio>
        <van-radio name="2">{{ $t('radio') }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('disabledLabelClick')">
      <van-radio-group v-model="radioLabel" class="demo-radio-group">
        <van-radio name="1" label-disabled>{{ $t('radio') }} 1</van-radio>
        <van-radio name="2" label-disabled>{{ $t('radio') }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('customShape')">
      <van-radio-group v-model="radioShape" class="demo-radio-group">
        <van-radio name="1" shape="square">{{ $t('radio') }} 1</van-radio>
        <van-radio name="2" shape="square">{{ $t('radio') }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-radio-group v-model="radio3" class="demo-radio-group">
        <van-radio name="1" checked-color="#07c160">
          {{ $t('radio') }} 1
        </van-radio>
        <van-radio name="2" checked-color="#07c160">
          {{ $t('radio') }} 2
        </van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <van-radio-group v-model="radio4" class="demo-radio-group">
        <van-radio name="1">
          {{ $t('radio') }} 1
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive" />
          </template>
        </van-radio>
        <van-radio name="2">
          {{ $t('radio') }} 2
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive" />
          </template>
        </van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('customIconSize')">
      <van-radio-group v-model="radioIconSize" class="demo-radio-group">
        <van-radio name="1" checked-color="#07c160" icon-size="24px">
          {{ $t('radio') }} 1
        </van-radio>
        <van-radio name="2" checked-color="#07c160" icon-size="24px">
          {{ $t('radio') }} 2
        </van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('withCell')">
      <van-radio-group v-model="radio5">
        <van-cell-group>
          <van-cell clickable :title="$t('radio') + 1" @click="radio5 = '1'">
            <van-radio name="1" slot="right-icon" />
          </van-cell>
          <van-cell clickable :title="$t('radio') + 2" @click="radio5 = '2'">
            <van-radio name="2" slot="right-icon" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      radio: '单选框',
      text1: '未选中禁用',
      text2: '选中且禁用',
      customIcon: '自定义图标',
      customIconSize: '自定义大小',
      customColor: '自定义颜色',
      customShape: '自定义形状',
      withCell: '与 Cell 组件一起使用',
      disabledLabelClick: '禁用文本点击',
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      customIcon: 'Custom Icon',
      customIconSize: 'Custom Icon Size',
      customColor: 'Custom Color',
      customShape: 'Custom Shape',
      withCell: 'Inside a Cell',
      disabledLabelClick: 'Disable the click event of label',
    },
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1',
      radio5: '1',
      radioLabel: '1',
      radioIconSize: '1',
      radioShape: '1',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-radio {
  background: @white;

  &-group {
    padding: 0 17px;

    .van-radio:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  img {
    height: 20px;
  }
}
</style>
