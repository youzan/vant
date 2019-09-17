<template>
  <demo-section>
    <van-tabs v-model="tab" sticky :color="BLUE">
      <van-tab :title="$t('basic')">
        <van-col v-for="icon in icons.basic" :key="icon" span="6" @click="copy(icon)">
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

      <van-tab :title="$t('outline')">
        <van-col v-for="icon in icons.outline" :key="icon" span="6" @click="copy(icon)">
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

      <van-tab :title="$t('filled')">
        <van-col v-for="icon in icons.filled" :key="icon" span="6" @click="copy(icon)">
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>
    </van-tabs>
  </demo-section>
</template>

<script>
import icons from '@vant/icons';
import { BLUE } from '../../utils/constant';

// from https://30secondsofcode.org
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      info: '提示信息',
      basic: '基础图标',
      copied: '复制成功',
      outline: '线框风格',
      filled: '实底风格'
    },
    'en-US': {
      title: 'Icon List',
      info: 'Show Info',
      basic: 'Basic',
      copied: 'Copied',
      outline: 'Outline',
      filled: 'Filled'
    }
  },

  data() {
    this.BLUE = BLUE;
    this.icons = icons;
    return {
      tab: 0
    };
  },

  methods: {
    copy(icon) {
      const tag = `<van-icon name="${icon}" />`;
      copyToClipboard(tag);

      this.$notify({
        type: 'success',
        duration: 1500,
        className: 'demo-icon-notify',
        message: `${this.$t('copied')}：${tag}`
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-icon {
  font-size: 0;

  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }

  &-notify {
    font-size: 13px;
  }

  .van-col {
    display: inline-block;
    float: none;
    height: 100px;
    text-align: center;
    vertical-align: middle;

    span {
      display: block;
      padding: 0 5px;
      color: @gray-darker;
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: @active-color;
    }
  }

  .van-icon {
    margin: 20px 0 10px;
    color: @text-color;
    font-size: 32px;
  }

  .van-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
  }
}
</style>
