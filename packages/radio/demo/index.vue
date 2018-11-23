<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-radio-group
        v-model="radio1"
        class="demo-radio-group"
      >
        <van-radio name="1">{{ $t('radio') }} 1</van-radio>
        <van-radio name="2">{{ $t('radio') }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-radio-group
        v-model="radio2"
        class="demo-radio-group"
        disabled
      >
        <van-radio name="1">{{ $t('radio') }} 1</van-radio>
        <van-radio name="2">{{ $t('radio') }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-radio
        name="1"
        value="1"
        checked-color="#4b0"
        class="demo-radio-group"
      >
        {{ $t('radio') }}
      </van-radio>
    </demo-block>

    <demo-block :title="$t('withCell')">
      <van-radio-group v-model="radio3">
        <van-cell-group>
          <van-cell
            :title="$t('radio') + 1"
            clickable
            @click="radio3 = '1'"
          >
            <van-radio name="1" />
          </van-cell>
          <van-cell
            :title="$t('radio') + 2"
            clickable
            @click="radio3 = '2'"
          >
            <van-radio name="2" />
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
      customColor: '自定义颜色',
      withCell: '与 Cell 组件一起使用'
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      customColor: 'Custom Color',
      withCell: 'Inside a Cell'
    }
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1'
    };
  }
};
</script>

<style lang="less">
.demo-radio {
  &-group {
    padding: 0 17px;

    .van-radio {
      margin-bottom: 10px;
    }
  }
}
</style>
