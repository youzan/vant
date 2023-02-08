<script setup lang="ts">
const showCalendar = ref(false)
const showPopup = ref(false)
const showCascader = ref(false)
const showKeyboard = ref(false)
const input = ref('')
const date = ref('')
const cascaderValue = ref('')
const activeNames = ref(['1'])
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }]
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }]
  }
]
const imageList = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg'
]

const openPopup = () => {
  showPopup.value = true
}
const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`
const onConfirm = (value: Date) => {
  showCalendar.value = false
  date.value = formatDate(value)
}
const showImage = (index: number) => {
  showImagePreview({ images: imageList, startPosition: index })
}

onMounted(() => {
  showNotify('通知内容')
})
</script>

<template>
  <section>
    <van-sticky>
      <van-notice-bar
        left-icon="volume-o"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </van-sticky>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-tabs>
      <van-tab title="标签 1">
        内容 1
      </van-tab>
      <van-tab title="标签 2">
        内容 2
      </van-tab>
      <van-tab title="标签 3">
        内容 3
      </van-tab>
      <van-tab title="标签 4">
        内容 4
      </van-tab>
    </van-tabs>

    <van-row>
      <van-col span="20">
        <VanButton type="primary" @click="showToast('toast')">
          button
        </VanButton>
        <LazyVanButton type="success" @click="openPopup">
          lazy button
        </LazyVanButton>
      </van-col>
      <van-col span="4">
        <van-icon name="chat-o" />
        <van-tag type="primary">
          Tag
        </van-tag>
        <van-loading />
      </van-col>
    </van-row>

    <van-skeleton title avatar :row="3" />
    <van-steps active-icon="success" active-color="#07c160">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>

    <van-cell-group>
      <van-cell
        title="选择单个日期"
        :value="date"
        @click="showCalendar = true"
      />
      <van-cell
        title="选择所在地区"
        :value="cascaderValue"
        @click="showCascader = true"
      />
      <van-cell @touchstart.stop="showKeyboard = true">
        弹出默认键盘
      </van-cell>
    </van-cell-group>

    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">
        代码是写出来给人看的，附带能在机器上运行。
      </van-collapse-item>
      <van-collapse-item title="标题2" name="2">
        技术无非就是那些开发它的人的共同灵魂。
      </van-collapse-item>
      <van-collapse-item title="标题3" name="3">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </van-collapse-item>
    </van-collapse>

    <van-divider>分界线</van-divider>

    <img
      v-for="(img, index) in imageList"
      :key="img"
      v-lazy="img"
      width="100%"
      height="250px"
      @click="showImage(index)"
    >

    <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />
    <van-number-keyboard :show="showKeyboard" @blur="showKeyboard = false" />
    <van-popup
      v-model:show="showPopup"
      :style="{ height: '40%' }"
      position="bottom"
    >
      <van-field v-model="input" label="文本" placeholder="请输入用户名" />
      <van-password-input />
      <van-radio>单选框</van-radio>
      <van-checkbox>复选框</van-checkbox>
      <van-rate />
      <van-switch />
      <van-stepper />
      <van-progress :percentage="50" />
      <van-uploader />
    </van-popup>
    <van-popup v-model:show="showCascader" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="showCascader = false"
      />
    </van-popup>

    <van-back-top bottom="70" />
    <van-sticky position="bottom">
      <van-tabbar>
        <van-tabbar-item icon="home-o">
          标签
        </van-tabbar-item>
        <van-tabbar-item icon="search">
          标签
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o">
          标签
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o">
          标签
        </van-tabbar-item>
      </van-tabbar>
    </van-sticky>
  </section>
</template>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
