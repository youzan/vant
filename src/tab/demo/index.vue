<template>
  <demo-block :title="t('basicUsage')">
    <van-tabs v-model:active="active">
      <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block :title="t('matchByName')">
    <van-tabs v-model:active="activeName">
      <van-tab name="a" :title="t('tab') + 1"> {{ t('content') }} 1 </van-tab>
      <van-tab name="b" :title="t('tab') + 2"> {{ t('content') }} 2 </van-tab>
      <van-tab name="c" :title="t('tab') + 3"> {{ t('content') }} 3 </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block :title="t('title2')">
    <van-tabs>
      <van-tab v-for="index in 8" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block :title="t('title3')">
    <van-tabs @disabled="onClickDisabled">
      <van-tab
        v-for="index in 3"
        :title="t('tab') + index"
        :disabled="index === 2"
        :key="index"
      >
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block :title="t('title4')">
    <van-tabs type="card">
      <van-tab v-for="index in 3" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block :title="t('title5')">
    <van-tabs @click="onClick">
      <van-tab v-for="index in 2" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block :title="t('title6')">
    <van-tabs :active="active" sticky>
      <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('title7')">
    <van-tabs :active="active">
      <van-tab v-for="index in 2" :key="index">
        <template #title> <van-icon name="more-o" />{{ t('tab') }} </template>
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block :title="t('title8')">
    <van-tabs animated>
      <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block :title="t('title9')">
    <van-tabs :active="active" swipeable>
      <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('title10')">
    <van-tabs scrollspy sticky>
      <van-tab :title="t('tab') + index" v-for="index in 8" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('beforeChange')">
    <van-tabs :before-change="beforeChange">
      <van-tab :title="t('tab') + index" v-for="index in 4" :key="index">
        {{ t('content') }} {{ index }}
      </van-tab>
    </van-tabs>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '标签栏滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      title10: '滚动导航',
      disabled: ' 已被禁用',
      matchByName: '通过名称匹配',
      beforeChange: '异步切换',
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      title10: 'Scrollspy',
      disabled: ' is disabled',
      matchByName: 'Match By Name',
      beforeChange: 'Before Change',
    },
  },

  data() {
    return {
      active: 2,
      activeName: 'b',
      tabs: [1, 2, 3, 4],
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    },

    beforeChange(name) {
      if (name === 1) {
        return false;
      }

      return new Promise((resolve) => {
        resolve(name !== 3);
      });
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tab {
  margin-bottom: 80vh;

  .van-tab .van-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .van-tab__pane {
    padding: 24px 20px;
    background-color: @white;
  }

  .van-tabs--card .van-tab__pane {
    background-color: transparent;
  }
}
</style>
