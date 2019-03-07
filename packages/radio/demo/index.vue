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
        checked-color="#07c160"
        class="demo-radio-group"
      >
        {{ $t('radio') }}
      </van-radio>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <van-radio
        name="1"
        value="1"
        class="demo-radio-group"
      >
        {{ $t('customIcon') }}
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.normal"
        >
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
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
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

  img {
    height: 20px;
  }
}
</style>
