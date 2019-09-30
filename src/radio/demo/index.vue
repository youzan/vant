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

    <demo-block :title="$t('customColor')">
      <van-radio-group v-model="radio3" class="demo-radio-group">
        <van-radio name="1" checked-color="#07c160">{{ $t('radio') }} 1</van-radio>
        <van-radio name="2" checked-color="#07c160">{{ $t('radio') }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <van-radio-group v-model="radio4" class="demo-radio-group">
        <van-radio name="1">
          {{ $t('radio') }} 1
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive">
          </template>
        </van-radio>
        <van-radio name="2">
          {{ $t('radio') }} 2
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive">
          </template>
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
      customColor: '自定义颜色',
      withCell: '与 Cell 组件一起使用'
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      withCell: 'Inside a Cell'
    }
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1',
      radio5: '1',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
</script>

<style lang="less">
.demo-radio {
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
