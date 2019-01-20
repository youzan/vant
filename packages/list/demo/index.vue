<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="page-desc">
        <p class="page-desc--text">{{ $t('text') }}</p>
        <van-checkbox
          class="page-desc--option"
          v-model="loadedError"
        >
          模拟加载失败
        </van-checkbox>
      </div>
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          :finished-text="$t('finishedText')"
          @load="onLoad"
        >
          <van-cell
            v-for="item in list"
            :key="item"
            :title="item + ''"
          />
        </van-list>
      </van-pull-refresh>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '当即将滚动到元素底部时，会自动加载更多',
      finishedText: '没有更多了'
    },
    'en-US': {
      text: 'This list will load items will scroll to bottom.',
      finishedText: 'Finished'
    }
  },

  data() {
    return {
      list: [],
      refreshing: false,
      loading: false,
      finished: false,
      loadedError: false
    };
  },

  methods: {
    onLoad(handleError) {
      if (this.loadedError) {
        setTimeout(() => {
          fetch('http://www.baidu.com').then(res => {
          }).catch(err => {
            this.loading = false;
            handleError();
          });
        }, 500);
      } else {
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            const text = this.list.length + 1;
            this.list.push(text < 10 ? '0' + text : text);
          }
          this.loading = false;

          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    },

    onRefresh() {
      setTimeout(() => {
        this.list = [];
        this.finished = false;
        this.refreshing = false;
        window.scrollTo(0, 10);
      }, 1000);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-list {
  .van-cell {
    text-align: center;
  }

  .page-desc {
    padding: 5px 0;
    margin: 0;
    font-size: 14px;
    text-align: center;
    color: @gray-darker;

    &--text {
      margin: 0;
    }

    &--option {
      margin: 12px;
    }
  }

  .van-checkbox__label {
    color: @gray-darker;
  }
}
</style>
