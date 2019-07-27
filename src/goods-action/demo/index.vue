<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-goods-action>
        <div>
          <template v-for="(i, index) in icons">
            <van-goods-action-icon
              :key="index"
              icon="chat-o"
              :text="$t('icon1')"
              @click="onClickIcon"
            />
          </template>
        </div>
        <template v-for="(i, index) in buttons">
          <van-goods-action-button
            :key="index"
            type="warning"
            :text="String(index)"
            @click="onClickButton"
          />
        </template>
      </van-goods-action>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      clickIcon: '点击图标',
      clickButton: '点击按钮',
      icon1: '客服',
      icon2: '购物车',
      icon3: '店铺',
      button1: '加入购物车',
      button2: '立即购买',
      title2: '图标提示'
    },
    'en-US': {
      clickIcon: 'Click Icon',
      clickButton: 'Click Button',
      icon1: 'Icon1',
      icon2: 'Icon2',
      icon3: 'Icon3',
      button1: 'Button1',
      button2: 'Button2',
      title2: 'Icon info'
    }
  },

  data() {
    this.add();
    return {
      show: false,
      icons: [],
      buttons: []
    };
  },

  methods: {
    add() {
      this.$nextTick(() => {
        this.$nextTick(() => {
          if (Math.floor(Math.random() * 10) % 2 === 1) {
            console.log('add button');
            this.buttons.push(1);
          } else {
            console.log('add icon');
            this.icons.push(1);
          }

          if (this.icons.length + this.buttons.length < 5) {
            this.add();
          }
        });
      });
    },

    onClickIcon() {
      this.$toast(this.$t('clickIcon'));
    },

    onClickButton() {
      this.$toast(this.$t('clickButton'));
    }
  }
};
</script>

<style lang="less">
.demo-goods-action {
  .van-goods-action {
    position: relative;
  }
}
</style>
