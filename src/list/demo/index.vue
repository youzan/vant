<template>
  <demo-section>
    <van-tabs>
      <van-tab :title="t('basicUsage')">
        <van-list
          v-model="list[0].loading"
          :finished="list[0].finished"
          :finished-text="t('finishedText')"
          @load="onLoad(0)"
        >
          <van-cell v-for="item in list[0].items" :key="item" :title="item" />
        </van-list>
      </van-tab>

      <van-tab :title="t('errorInfo')">
        <van-list
          v-model="list[1].loading"
          :finished="list[1].finished"
          :error.sync="list[1].error"
          :error-text="t('errorText')"
          @load="onLoad(1)"
        >
          <van-cell v-for="item in list[1].items" :key="item" :title="item" />
        </van-list>
      </van-tab>

      <van-tab :title="t('pullRefresh')">
        <van-pull-refresh v-model="list[2].refreshing" @refresh="onRefresh(2)">
          <van-list
            v-model="list[2].loading"
            :finished="list[2].finished"
            :finished-text="t('finishedText')"
            @load="onLoad(2)"
          >
            <van-cell v-for="item in list[2].items" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      errorInfo: '错误提示',
      errorText: '请求失败，点击重新加载',
      pullRefresh: '下拉刷新',
      finishedText: '没有更多了',
    },
    'en-US': {
      errorInfo: 'Error Info',
      errorText: 'Request failed. Click to reload',
      pullRefresh: 'PullRefresh',
      finishedText: 'Finished',
    },
  },

  data() {
    return {
      list: [
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false,
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false,
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false,
        },
      ],
    };
  },

  methods: {
    onLoad(index) {
      const list = this.list[index];
      list.loading = true;

      setTimeout(() => {
        if (list.refreshing) {
          list.items = [];
          list.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? '0' + text : text);
        }

        list.loading = false;
        list.refreshing = false;

        // show error info in second demo
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }

        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    },

    onRefresh(index) {
      this.list[index].finished = false;
      this.onLoad(index);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-list {
  .van-cell {
    text-align: center;
  }

  .page-desc {
    margin: 0;
    padding: 5px 0;
    color: @gray-7;
    font-size: 14px;
    text-align: center;

    &--text {
      margin: 0;
    }

    &--option {
      margin: 12px;
    }
  }

  .van-checkbox__label {
    color: @gray-7;
  }
}
</style>
