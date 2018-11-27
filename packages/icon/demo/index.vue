<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-col span="8">
        <van-icon name="close" />
      </van-col>
      <van-col span="8">
        <van-icon name="//b.yzcdn.cn/vant/icon-demo-1126.png" />
      </van-col>
    </demo-block>

    <demo-block :title="$t('info')">
      <van-col span="8">
        <van-icon
          name="chat"
          info="9"
        />
      </van-col>
      <van-col span="8">
        <van-icon
          name="chat"
          info="99+"
        />
      </van-col>
    </demo-block>

    <demo-block :title="$t('basic')">
      <van-col
        v-for="icon in basic"
        :key="icon"
        span="8"
        class="demo-col-with-text"
      >
        <van-icon :name="icon" />
        <span>{{ icon }}</span>
      </van-col>
    </demo-block>

    <demo-block :title="$t('title')">
      <van-col
        v-for="icon in icons"
        :key="icon"
        span="8"
        class="demo-col-with-text"
      >
        <van-icon :name="icon" />
        <span>{{ icon }}</span>
      </van-col>
    </demo-block>
  </demo-section>
</template>

<script>
import icons from '../../../packages/icon/config';

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
    this.basic = icons.basic.map(icon => icon.css);
    this.icons = icons.glyphs.map(icon => icon.css);
    return {};
  }
};
</script>

<style lang="less">
.demo-icon {
  font-size: 0;

  .van-col {
    float: none;
    text-align: center;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
  }

  .demo-col-with-text {
    height: 100px;
  }

  .van-icon {
    font-size: 32px;
    margin: 15px 0;
    color: rgba(69, 90, 100, .8);
  }

  span {
    display: block;
    font-size: 14px;
  }
}
</style>
