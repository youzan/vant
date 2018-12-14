<template>
  <demo-section>
    <van-notice-bar>{{ $t('tips') }}</van-notice-bar>
    <demo-block :title="$t('basicUsage')">
      <p class="page-desc">{{ $t('text') }}</p>
      <ul
        v-waterfall-lower="loadMore"
        waterfall-disabled="disabled"
        waterfall-offset="400"
      >
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </demo-block>
  </demo-section>
</template>

<script>
import { Waterfall } from '../..';

export default {
  i18n: {
    'zh-CN': {
      text: '当即将滚动到元素底部时，会自动加载更多',
      tips: '注意：Waterfall 已被废弃，请使用 List 组件代替'
    },
    'en-US': {
      text: 'This list will load items will scroll to bottom.',
      tips: 'Waterfall is deprecated and no longer maintained, please use the List component instead.'
    }
  },

  directives: {
    WaterfallLower: Waterfall('lower')
  },

  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      disabled: false
    };
  },

  methods: {
    loadMore() {
      this.disabled = true;
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length);
        }
        this.disabled = false;
      }, 200);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-waterfall {
  ul {
    max-height: 360px;
    overflow: scroll;
    border-top: 1px solid @gray-light;
  }

  li {
    line-height: 50px;
    border-bottom: 1px solid @gray-light;
    background: @white;
    text-align: center;
  }

  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: @gray-darker;
  }
}
</style>
