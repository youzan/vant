<template>
  <demo-section>
    <demo-block :title="$t('ellipsis')">
      <div class="van-ellipsis">{{ $t('text') }}</div>
    </demo-block>

    <demo-block :title="$t('hairline')">
      <div class="van-hairline--top" />
    </demo-block>

    <demo-block :title="$t('animation')">
      <van-switch-cell v-model="show" :title="$t('toggle')" :border="false" />
      <van-row>
        <transition name="van-fade">
          <van-col span="8" v-show="show">Fade</van-col>
        </transition>

        <transition name="van-slide-bottom">
          <van-col span="8" v-show="show">Slide Bottom</van-col>
        </transition>
      </van-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      hairline: '1px 边框',
      ellipsis: '文字省略',
      animation: '动画',
      toggle: '切换动画',
      text: '这是一段宽度限制 250px 的文字，后面的内容会省略'
    },
    'en-US': {
      hairline: 'Hairline',
      ellipsis: 'Text Ellipsis',
      animation: 'Animation',
      toggle: 'Switch animation',
      text: 'This is a paragraph of 250px width limit, the back will be omitted.'
    }
  },

  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="postcss">
.demo-style {
  .van-ellipsis {
    font-size: 13px;
    margin-left: 15px;
    max-width: 250px;
  }

  .van-hairline--top {
    height: 30px;
    background-color: #fff;

    &::after {
      top: 15px;
    }
  }

  .van-col {
    height: 50px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    text-align: center;
    line-height: 50px;
    margin-left: 15px;
    background-color: #39a9ed;
  }

  .van-switch-cell {
    margin-bottom: 15px;
  }
}
</style>
