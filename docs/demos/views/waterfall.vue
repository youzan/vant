<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <p class="page-desc">{{ $t('text') }}</p>
      <ul
        v-waterfall-lower="loadMore"
        waterfall-disabled="disabled"
        waterfall-offset="400">
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </demo-block>
  </demo-section>
</template>

<script>
import { Waterfall } from 'packages';

export default {
  i18n: {
    'zh-CN': {
      text: '当即将滚动到元素底部时，会自动加载更多'
    },
    'en-US': {
      text: 'This list will load items will scroll to bottom.'
    }
  },

  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      disabled: false
    };
  },

  directives: {
    WaterfallLower: Waterfall('lower')
  },

  methods: {
    loadMore() {
      this.disabled = true;
      setTimeout(() => {
        for (let i = 0; i < 5; i ++) {
          this.list.push(this.list.length);
        }
        this.disabled = false;
      }, 200);
    }
  }
};
</script>


<style lang="postcss">
.demo-waterfall {
  ul {
    max-height: 360px;
    overflow: scroll;
    border-top: 1px solid #e5e5e5;
  }

  li {
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
    text-align: center;
  }

  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
}
</style>
