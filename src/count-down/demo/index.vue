<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-count-down :time="time" />
    </demo-block>

    <demo-block :title="t('customFormat')">
      <van-count-down :time="time" :format="t('formatWithDay')" />
    </demo-block>

    <demo-block :title="t('millisecond')">
      <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-count-down :time="time">
        <template v-slot="currentTime">
          <span class="item">{{ currentTime.hours }}</span>
          <span class="item">{{ currentTime.minutes }}</span>
          <span class="item">{{ currentTime.seconds }}</span>
        </template>
      </van-count-down>
    </demo-block>

    <demo-block :title="t('manualControl')">
      <van-count-down
        ref="countDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="$toast(t('finished'))"
      />
      <van-grid clickable :column-num="3">
        <van-grid-item icon="play-circle-o" :text="t('start')" @click="start" />
        <van-grid-item
          icon="pause-circle-o"
          :text="t('pause')"
          @click="pause"
        />
        <van-grid-item icon="replay" :text="t('reset')" @click="reset" />
      </van-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      millisecond: '毫秒级渲染',
      customStyle: '自定义样式',
      customFormat: '自定义格式',
      manualControl: '手动控制',
      formatWithDay: 'DD 天 HH 时 mm 分 ss 秒',
      reset: '重置',
      pause: '暂停',
      start: '开始',
      finished: '倒计时结束',
    },
    'en-US': {
      millisecond: 'Millisecond',
      customStyle: 'Custom Style',
      customFormat: 'Custom Format',
      manualControl: 'Manual Control',
      formatWithDay: 'DD Day, HH:mm:ss',
      reset: 'Reset',
      pause: 'Pause',
      start: 'Start',
      finished: 'Finished',
    },
  },

  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },

  methods: {
    start() {
      this.$refs.countDown.start();
    },

    pause() {
      this.$refs.countDown.pause();
    },

    reset() {
      this.$refs.countDown.reset();
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-count-down {
  background-color: @white;

  .van-count-down {
    margin-left: @padding-md;
  }

  .item {
    display: inline-block;
    width: 22px;
    margin-right: 5px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: @blue;
    border-radius: 2px;
  }

  .van-grid {
    margin-top: 10px;
  }
}
</style>
