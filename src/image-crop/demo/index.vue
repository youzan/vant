<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-image-crop class="image_1" v-model="image1" deletable skip-crop />
    </demo-block>

    <demo-block :title="t('proportion')">
      <van-image-crop
        v-model="image2"
        :aspect-ratio="80 / 55"
        @rotate="onRotate"
        style="height: 68.75vw;"
      />
    </demo-block>

    <demo-block :title="t('listUsage')">
      <van-row class="img-list">
        <div class="item" v-for="(item, index) in imgList" :key="item.id">
          <div class="item-box">
            <van-image-crop
              deletable
              v-model="item.src"
              @delete="rmImg(index)"
            />
          </div>
        </div>
        <div class="item" @click="addImg">
          <div class="item-box add">添加图片</div>
        </div>
      </van-row>
    </demo-block>

    <demo-block :title="t('slotUsage')">
      <van-image-crop class="image_1" v-model="image3" deletable>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          "
        >
          点击选择要裁剪的图片
        </div>
        <template v-slot:delete>
          <span>移除</span>
        </template>
        <template v-slot:cancel>
          cancel
        </template>
        <template v-slot:rotate>
          rotate
        </template>
        <template v-slot:submit>
          submit
        </template>
      </van-image-crop>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      proportion: '调整比例',
      slotUsage: '使用Slot',
      listUsage: '列表',
    },
    'en-US': {
      proportion: 'Proportion',
      slotUsage: 'Use Slot',
      listUsage: 'List',
    },
  },

  data() {
    return {
      image1: null,
      image2: 'https://img.yzcdn.cn/vant/cat.jpeg',
      image3: null,
      imgList: [],
    };
  },

  methods: {
    addImg() {
      this.imgList.push({ id: Date.now(), src: '' });
    },
    rmImg(index) {
      this.imgList.splice(index, 1);
    },
    onRotate(flag) {
      console.log(flag);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-image-crop {
  overflow-x: hidden;
  background-color: @white;

  .image_1 {
    height: 100vw;
    border: 1px dotted #4fc08d;
  }

  .img-list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;

    .item {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      min-width: 33.33%;
      max-width: 33.33%;
      font-size: 14px;
      vertical-align: middle;
      border: 1px dotted #4fc08d;

      &::after {
        display: block;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        content: '';
      }

      .item-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }

    .add {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
