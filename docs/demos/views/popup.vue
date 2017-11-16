<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button @click="show1 = true">{{ $t('button1') }}</van-button>
      <van-popup v-model="show1">{{ $t('content') }}</van-popup>
    </demo-block>

    <demo-block :title="$t('position')">
      <van-button @click="show2 = true;">{{ $t('button2') }}</van-button>
      <van-popup v-model="show2" position="bottom">
        <van-button @click="showDialog">{{ $t('button3') }}</van-button>
      </van-popup>

      <van-button @click="show3 = true">{{ $t('button4') }}</van-button>
      <van-popup v-model="show3" position="top" :overlay="false">
        {{ $t('content') }}
      </van-popup>

      <van-button @click="show4 = true">{{ $t('button5') }}</van-button>
      <van-popup v-model="show4" position="right" :overlay="false">
        <van-button @click="show4 = false">{{ $t('button6') }}</van-button>
      </van-popup>
    </demo-block>
  </demo-section> 
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      position: '弹出位置',
      button1: '弹出 Popup',
      button2: '底部弹出',
      button3: '弹出 Dialog',
      button4: '顶部弹出',
      button5: '右侧弹出',
      button6: '关闭弹层'
    },
    'en-US': {
      position: 'Position',
      button1: 'Show Popup',
      button2: 'From Bottom',
      button3: 'Show Dialog',
      button4: 'From Top',
      button5: 'From Right',
      button6: 'Close Popup'
    }
  },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  },

  watch: {
    show3(val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false;
        }, 2000);
      }
    }
  },

  methods: {
    showDialog() {
      Dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      })
    }
  }
};
</script>

<style lang="postcss">
.demo-popup {
  .van-button {
    margin: 10px 0 10px 15px;
  }

  .van-popup {
    width: 60%;
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;

    &--bottom {
      width: 100%;
      height: 200px;
    }

    &--top {
      color: #fff;
      width: 100%;
      border-radius: 0;
      line-height: 20px;
      background-color: rgba(0, 0, 0, 0.8);
    }

    &--left,
    &--right {
      width: 100%;
      height: 100%;
    }
  }
}
</style>