<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button @click="show1 = true">{{ $t('button1') }}</van-button>
      <van-popup v-model="show1" :prevent-scroll="true">{{ $t('content') }}</van-popup>
    </demo-block>

    <demo-block :title="$t('position')">
      <van-button @click="show2 = true;">{{ $t('button2') }}</van-button>

      <van-popup v-model="show2" position="bottom" :prevent-scroll="true">
        <van-tabs>
          <van-tab class="custom-pane" title="Tab1">
            <ul class="scroller">
              <li v-for="i in 30" :key="i" class="list-item">{{ i }} item item item</li>
            </ul>
          </van-tab>
          <van-tab class="custom-pane" title="Tab2">
            <p class="long-text">Lorem ipsum dolor sit amet, quis interdum et sollicitudin consectetuer scelerisque, gravida nulla consequatur dis mauris non morbi, dictum leo enim elementum ac wisi nullam, nam orci erat. Ultrices est. Nunc penatibus vel varius odio. Ullamcorper placerat amet amet sed, urna tempor, elit elit at. Eget congue. Sed proin metus sapien libero, pulvinar ut, ut aenean fermentum magna placerat dapibus voluptas, sed at lacinia pede fermentum rutrum et. Vitae nulla sapien vel in hac felis, montes in donec nulla eu volutpat augue.</p>
          </van-tab>
        </van-tabs>
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
      padding: 0;
    }

    .van-tabs__content {
      height: 166px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      .list-item {
        padding: 10px 10px;
        &:not(:last-child) {
          border-bottom: 1px solid #f9f9f9;
        }
      }
      .long-text {
        padding: 10px;
        line-height: 1.4;
        color: #666;
      }
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