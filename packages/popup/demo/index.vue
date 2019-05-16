<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button
        type="primary"
        @click="show1 = true"
      >
        {{ $t('button1') }}
      </van-button>
      <van-popup v-model="show1">{{ $t('content') }}</van-popup>
    </demo-block>

    <demo-block :title="$t('position')">
      <van-button
        type="primary"
        @click="show2 = true"
      >
        {{ $t('button2') }}
      </van-button>

      <van-popup
        v-model="show2"
        position="bottom"
      >
        <van-picker
          show-toolbar
          :columns="$t('columns')"
          @confirm="show2 = false"
          @cancel="show2 = false"
        />
      </van-popup>

      <van-button
        type="primary"
        @click="show3 = true"
      >
        {{ $t('button4') }}
      </van-button>
      <van-popup
        v-model="show3"
        position="top"
        :overlay="false"
      >
        {{ $t('content') }}
      </van-popup>

      <van-button
        type="primary"
        @click="show4 = true"
      >
        {{ $t('button5') }}
      </van-button>
      <van-popup
        v-model="show4"
        position="right"
      >
        <van-button
          type="primary"
          @click="show4 = false"
        >
          {{ $t('button6') }}
        </van-button>
        <van-button
          type="primary"
          @click="show5 = true"
        >
          {{ $t('button5') }}
        </van-button>
        <van-popup
          v-model="show5"
          position="right"
        >
          <van-button
            type="primary"
            @click="show5 = false"
          >
            {{ $t('button6') }}
          </van-button>
        </van-popup>
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
      button6: '关闭弹层',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    },
    'en-US': {
      position: 'Position',
      button1: 'Show Popup',
      button2: 'From Bottom',
      button3: 'Show Dialog',
      button4: 'From Top',
      button5: 'From Right',
      button6: 'Close Popup',
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    }
  },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  },

  watch: {
    show3(val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false;
        }, 2000);
      }
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popup {
  .van-button {
    margin-left: 15px;
  }

  .van-popup {
    box-sizing: border-box;
    padding: 20px;

    &--center {
      width: 60%;
    }

    &--bottom {
      width: 100%;
      padding: 0;
    }

    &--top {
      width: 100%;
      color: @white;
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
