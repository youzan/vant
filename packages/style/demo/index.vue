<template>
  <demo-section>
    <demo-block :title="$t('ellipsis')">
      <div class="van-ellipsis">{{ $t('text') }}</div>
    </demo-block>

    <demo-block :title="$t('hairline')">
      <div class="van-hairline--top" />
    </demo-block>

    <demo-block :title="$t('animation')">
      <van-cell
        is-link
        title="Fade"
        @click="animate('van-fade')"
      />
      <van-cell
        is-link
        title="Slide Up"
        @click="animate('van-slide-up')"
      />
      <van-cell
        is-link
        title="Slide Down"
        @click="animate('van-slide-down')"
      />
      <van-cell
        is-link
        title="Slide Left"
        @click="animate('van-slide-left')"
      />
      <van-cell
        is-link
        title="Slide Right"
        @click="animate('van-slide-right')"
      />
    </demo-block>

    <transition :name="transitionName">
      <div
        v-show="show"
        class="demo-animate-block"
      />
    </transition>
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
      show: false,
      transitionName: ''
    };
  },

  methods: {
    animate(transitionName) {
      this.show = true;
      this.transitionName = transitionName;

      setTimeout(() => {
        this.show = false;
      }, 500);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-style {
  .van-ellipsis {
    font-size: 13px;
    margin-left: 15px;
    max-width: 250px;
  }

  .van-hairline--top {
    height: 30px;
    background-color: @white;

    &::after {
      top: 5px;
    }
  }

  .demo-animate-block {
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    position: fixed;
    border-radius: 3px;
    margin: -50px 0 0 -50px;
    background-color: @blue;
  }
}
</style>
