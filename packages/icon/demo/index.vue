<template>
  <demo-section>
    <van-tabs
      v-model="tab"
      sticky
      :color="BLUE"
    >
      <van-tab title="基础图标">
        <van-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>
      <van-tab title="线框风格">
        <van-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>
      <van-tab title="实底风格">
        <van-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>
    </van-tabs>
  </demo-section>
</template>

<script>
import icons from '@vant/icons';
import { BLUE } from '../../utils/color';

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      info: '显示徽标',
      basic: '基础图标'
    },
    'en-US': {
      title: 'Icon List',
      info: 'Show Info',
      basic: 'Basic Icon'
    }
  },

  data() {
    this.BLUE = BLUE;
    this.icons = icons;
    return {
      tab: 0
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-icon {
  font-size: 0;

  &-list {
    padding-top: 10px;
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
  }

  .van-col {
    float: none;
    text-align: center;
    height: 100px;
    display: inline-block;
    vertical-align: middle;

    span {
      display: block;
      padding: 0 5px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .van-icon {
    font-size: 32px;
    margin: 15px 0;
    color: @text-color;
  }

  .van-tab__pane {
    padding-top: 10px;
  }
}
</style>
